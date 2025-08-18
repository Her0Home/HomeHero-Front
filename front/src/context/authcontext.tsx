'use client';
import React, { createContext, useContext,  ReactNode, useState, JSX, useEffect } from 'react';
import { LogInResponse } from "@/helpers/page";
import { IUser } from '@/types/users';

type AuthContextType = {
    isAuth: boolean | null;
    user: IUser | null;
    token: string | null;
    saveUserData: (data: any) => void;
    resetuserData: () => void;
};

const AUTH_KEY = 'authData';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
    const [isAuth, setIsAuth] = useState<boolean | null>(null);
    const [user, setUser] = useState<IUser | null>(null);
    const [token, setToken] = useState<string | null>(null);
    ///Actions
    const saveUserData = (data:LogInResponse) => {
        setIsAuth(true);
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem(AUTH_KEY, JSON.stringify({
            user: data.user,
            token: data.token,
            isAuth: true,
        }));
    }
    const resetuserData = () => {
        setIsAuth(false);
        setUser(null);
        setToken(null);
        localStorage.removeItem(AUTH_KEY);
    }
    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem(AUTH_KEY) || '{}');
        if( storage === undefined || !Object.keys(storage).length) {
            setIsAuth(false);
            return;
        }
        const storageType = storage as any;
        setIsAuth(storage?.isAuth)
        setUser(storage?.user);
        setToken(storageType?.token);

    }, []);

    return <AuthContext.Provider value={{isAuth, user, token, saveUserData, resetuserData}}>
        {children}
    </AuthContext.Provider>;
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
