import { SidebarProvider, Sidebar } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SectionCards } from "@/components/section-cards"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import data from "@/app/dashboard/data.json"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <Sidebar>
          <AppSidebar />
        </Sidebar>

        <div className="flex flex-col flex-1">
          <SiteHeader />
          <div className="p-6 space-y-6">

            {/* Sección de tarjetas */}
            <SectionCards />

            {/* Chart */}
            <div className="border rounded-lg p-4">
              <ChartAreaInteractive />
            </div>

            {/* Tabla */}
            <div className="border rounded-lg p-4">
              <DataTable data={data} />
            </div>

          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}
