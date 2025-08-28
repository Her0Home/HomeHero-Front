import { FC } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ChatProvider } from "@/context/chatContext";

interface LayoutMainViewProps {
  children:React.ReactNode; 
}
const LayoutMainViews: FC<LayoutMainViewProps> = ({ children }) => {
  return (
    <div className="bg-hero-cream">
    <SidebarProvider>
      <AppSidebar variant="inset" />
      
      <SidebarInset>
        <ChatProvider>
          {children}
        </ChatProvider>
        
      </SidebarInset>
    </SidebarProvider>
    </div> 
  )
}

export default LayoutMainViews