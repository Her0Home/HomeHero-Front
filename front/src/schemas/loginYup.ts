import * as Yup from "yup";

export const LogInSchema = Yup.object({
  email: Yup.string()
    .email("Email inválido")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Formato de email inválido"
    )
    .required("El email es obligatorio"),
 
  password: Yup.string()
    .required("La contraseña es obligatoria"),
});

