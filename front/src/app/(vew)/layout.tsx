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
  </> 
  )
}

export default LayoutMainViews