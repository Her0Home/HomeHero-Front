import { FC } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

interface LayoutMainViewProps {
  children:React.ReactNode; 
}
const LayoutMainViews: FC<LayoutMainViewProps> = ({ children }) => {
  return (
    <div className="bg-hero-cream">
    <SidebarProvider>
      <AppSidebar variant="inset" />
      
      <SidebarInset>
          {children}
        
      </SidebarInset>
    </SidebarProvider>
    </div> 
  )
}

export default LayoutMainViews