"use client";

import { useFormik } from "formik";
import Swal from "sweetalert2";
import { routes } from "@/routes";
import { useRouter } from "next/navigation";
import PasswordInput from "@/components/auth/paswordInputs";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { LogInSchema } from "@/schemas/loginYup";
import { useAuth } from "@/context/authcontext";
import { postLogin } from "@/services/auth";
interface LogInFormValues {
  email: string;
  password: string;
}
type LoginDTO = LogInFormValues;


export const LoginForm = ()=> {
const { saveToken } = useAuth();

  const Routes = useRouter();

  const formik = useFormik<LogInFormValues>({
    initialValues: {
      email: "ricardo.diaz@example.com",
      password: "Password456@",

    },
    validationSchema: LogInSchema,
    onSubmit: async (values, { resetForm }) => {
      const data: LoginDTO = {
        email: values.email,
        password: values.password,
      };
      try {
        const res = await postLogin(data);   

        if (!res?.data) {
          return Swal.fire({
            icon: "error",
            title: "Error al iniciar sesión",
            text: "Error desconocido",
          });
        }
        
        saveToken(res.data);
        
        await Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Usuario logueado correctamente",
          showConfirmButton: false,
          timer: 2000,
        });
        resetForm();
        Routes.push(routes.home);
      } catch (e: unknown) {
        console.error("Error al registrar usuario", e);
        Swal.fire({
          icon: "error",
          title: "Error al registrar el usuario",
        });
      }
    },
  });

  return (
    <form className="flex flex-col gap-6 " onSubmit={formik.handleSubmit}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold font-Title">Iniciar Sesión</h1>
        <p className="text-sm font-Text ">
          Ingresa tu correo electrónico para acceder a tu cuenta
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Correo</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : undefined
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <Label htmlFor="password">Contraseña</Label>
          </div>

          <PasswordInput
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : undefined
            }
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Iniciar sesión
        </Button>
        </div>
        
    </form>
    
  );
}



