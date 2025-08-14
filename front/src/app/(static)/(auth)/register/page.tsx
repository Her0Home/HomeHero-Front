import FooterRegisterForm from "@/components/auth/register/foter-registerForm";
import { RegisterForm } from "@/components/auth/register/register-form";
import { FC } from "react";


 
const Register: FC = () => {
  return ( 
    <div>
      <RegisterForm/>
      <FooterRegisterForm/>
    </div>
   );
}
 
export default Register;
