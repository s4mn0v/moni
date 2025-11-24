import { SidebarProvider, Sidebar } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Outlet } from "react-router"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <Sidebar>
          <AppSidebar />
        </Sidebar>

        <div className="flex flex-col flex-1 justify-between">
          <div className="p-6 space-y-6">
            <Outlet />
          </div>
          <SiteHeader />
        </div>
      </div>
    </SidebarProvider>
  )
}
