import { Footer } from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/NavBar";
import { FC } from "react";

interface LayoutMainViewProps {
  children:React.ReactNode; 
}
const LayoutMainViews: FC<LayoutMainViewProps> = ({ children }) => {
  return (
  <>
  <Navbar/>
    {children}
    <Footer/>
  </> 
  )
}

export default LayoutMainViews