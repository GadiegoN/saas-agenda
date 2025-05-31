import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex h-screen w-full flex-col">
        {children}
        <SidebarTrigger />
      </div>
    </SidebarProvider>
  );
}
