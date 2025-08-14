"use client";

import { Input } from "@/components/ui/input";
import { IoEyeSharp  } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { FC, useState } from "react";
interface PasswordInputProps {
  id: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;

}



const PasswordInput: FC<PasswordInputProps> = ({ 
  
  value,
  id,
  onChange,
  onBlur,
  error, 
  required,

  }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-row items-center  gap-1  justify-between">
      <Input
        id={id}
        type={showPassword ? "text" : "password"}
        placeholder="Ingresa tu contraseña"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        required={required}
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="text-hero-black border rounded-md text-sm font-semibold  p-1 hover:text-hero-orange "
      >
        {showPassword ? <BsFillEyeSlashFill className=" text-2xl "  /> : <IoEyeSharp  className="text-2xl"/>}
      </button>
    </div>
  );
};

export default PasswordInput;
