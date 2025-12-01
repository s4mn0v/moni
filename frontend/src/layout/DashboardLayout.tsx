import { Outlet } from "react-router"
import { NavMenu } from "@/components/navigation/NavMenu"
import { Footer } from "@/components/navigation/Footer"

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-background">

      {/* Header fijo */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavMenu />
      </div>

      {/* Contenedor principal desplazado hacia abajo */}
      <div className="flex flex-col flex-1 pt-16"> 
        {/* Ajusta este valor según altura real del NavMenu */}

        <div className="p-6 space-y-6 flex-1 scroll-left">
          <Outlet />
        </div>

        <Footer />
      </div>

    </div>
  )
}
