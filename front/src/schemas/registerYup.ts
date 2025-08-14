import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  email: Yup.string()
    .email("Email inválido")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Formato de email inválido"
    )
    .required("El email es obligatorio"),
  name: Yup.string().required("El nombre es obligatorio"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .matches(/[a-zA-Z]/, "La contraseña debe contener al menos una letra")
    .matches(/\d/, "La contraseña debe contener al menos un número")
    .matches(/[!@#$%^&*(),.?":{}|<>]/,"La contraseña debe contener al menos un carácter especial")
    .required("La contraseña es obligatoria"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Las contraseñas no coinciden')
    .required('Debes confirmar tu contraseña'),
});
