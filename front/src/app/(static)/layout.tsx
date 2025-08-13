import { FC } from "react";

interface LayouStaticViewProps {
  children:React.ReactNode; 
}
const LayouStaticViews: FC<LayouStaticViewProps> = ({ children }) => {
  return (
    <>
    <div className="bg-hero-cream">
      {children}
    </div> 
    </>
  )
}

export default LayouStaticViews