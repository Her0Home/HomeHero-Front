"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  JSX,
  useEffect,
} from "react";
import {  IUserResponse } from "@/types/users";
import { LogInResponse } from "@/types";

type AuthContextType = {
  isAuth: boolean | null;
  user: IUserResponse | null;
  token: string | null;
  saveUserData: (data: LogInResponse) => void;
  resetuserData: () => void;
};

const AUTH_KEY = "authData";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const [user, setUser] = useState<IUserResponse | null>(null);
  const [token, setToken] = useState<string | null>(null);
  ///Actions
  const saveUserData = (data: LogInResponse) => { 
    setUser(data.user);
    setToken(data.token);
    setIsAuth(true);
    localStorage.setItem(AUTH_KEY, JSON.stringify(data));
  };

  const resetuserData = () => {
    setUser(null);
    setToken(null);
    setIsAuth(false);
    localStorage.removeItem(AUTH_KEY);
  };
  useEffect(() => {
    const storage = localStorage.getItem(AUTH_KEY);
    if (!storage) {
      setIsAuth(false);
      return;
    }
    try {
      const parsed: LogInResponse = JSON.parse(storage);

      // Validación básica para mayor defensividad
      if (!parsed.token || !parsed.user) {
        setIsAuth(false); 
        return;
      }

      
      setUser(parsed.user);
      setToken(parsed.token);
      setIsAuth(true);
    } catch (error) {
        console.error("Error al parsear authData:", error);
        setIsAuth(false);
    }
  }, []); 
  return (
    <AuthContext.Provider
      value={{ isAuth, user, token, saveUserData, resetuserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
