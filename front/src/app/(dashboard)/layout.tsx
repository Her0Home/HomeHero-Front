"use client"

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ChatProvider } from '@/context/chatContex';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
  );
}