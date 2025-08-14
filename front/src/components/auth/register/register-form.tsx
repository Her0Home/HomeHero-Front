"use client";
import { RegisterSchema } from "@/schemas/registerYup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { routes } from "@/routes";
import { useRouter } from "next/navigation";
import PasswordInput from "@/components/auth/paswordInputs";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
interface RegisterFormValues {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}
type RegisterDTO = Omit<RegisterFormValues, "confirmPassword">;

export const RegisterForm = ()=> {

  const Routes = useRouter();

  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { resetForm }) => {
      const data: RegisterDTO = {
        email: values.email,
        name: values.name,
        password: values.password,
      };
      try {
        console.log(data); // Solo para depurar, sin await

        // Aquí deberías llamar a tu API de registro
        // Ejemplo: const res = await registerUser(data);
        const res = true; // Simulación de éxito

        if (!res) {
          return Swal.fire({
            icon: "error",
            title: "Error al iniciar sesión",
            text: "Error desconocido",
          });
        }

        await Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Usuario registrado correctamente",
          showConfirmButton: false,
          timer: 2000,
        });
        resetForm();
        Routes.push(routes.login);
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
        <h1 className="text-2xl font-Title font-bold">Regsitrate</h1>
        <p className="text-sm font-Text ">
          Crea una cuenta para acceder a todas las funcionalidades de la
          plataforma. Es rápido y fácil.
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
          <div className="flex items-center">
            <Label htmlFor="Name">Nombre</Label>
          </div>
          <Input
            id="name"
            type="string"
            placeholder="Tu nombre"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : undefined
            }
            required
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

        {formik.values.password.length > 5 && (
          <>
            <div className="flex flex-col gap-2">
              <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
              <PasswordInput
                id="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? formik.errors.confirmPassword
                    : undefined
                }
              />
            </div>
          </>
        )}
        <Button type="submit" className="w-full">
          Registrarse
        </Button>
        </div>
        
    </form>
  );
}
