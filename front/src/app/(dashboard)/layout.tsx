import { FC } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";

interface LayoutMainViewProps {
  children:React.ReactNode; 
}
const LayoutMainViews: FC<LayoutMainViewProps> = ({ children }) => {
  return (
    <>
    <div className="bg-hero-cream">
    <SidebarProvider>
      {/* /sidebar */}
      <AppSidebar variant="inset" />
      
      <SidebarInset>
        <h1>Hola Mundo </h1>
        <SiteHeader/>
        
      {children}
        
      </SidebarInset>
    </SidebarProvider>
    </div> 
    </>
  )
}

export default LayoutMainViews