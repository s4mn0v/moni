import { createBrowserRouter } from "react-router"
import Dashboard from "@/components/pages/Dashboard"
import Levels from "@/components/pages/Levels"
import DashboardLayout from "@/layout/DashboardLayout"
import ErrorPage from "@/components/pages/ErrorPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,   // ← AQUI
    children: [
      { index: true, element: <Dashboard /> },
      { path: "levels", element: <Levels /> },

      // Opción extra: un error 404 dentro del layout
      { path: "*", element: <ErrorPage /> },
    ],
  },
])
