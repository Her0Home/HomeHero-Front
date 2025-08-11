import { FC } from "react";

interface LayoutMainViewProps {
  children:React.ReactNode; 
}
const LayoutMainViews: FC<LayoutMainViewProps> = ({ children }) => {
  return (
    <>
    <div className="bg-hero-cream">
      {children}
    </div> 
    </>
  )
}

export default LayoutMainViews