import { createBrowserRouter } from "react-router"
import Dashboard from "@/components/pages/Dashboard"
import HomePage from "@/components/pages/HomePage"
import DashboardLayout from "@/layout/DashboardLayout"
import ErrorPage from "@/components/pages/ErrorPage"
import Actions from "@/components/pages/Actions"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,   // ← AQUI
    children: [
      { index: true, element: <HomePage /> },
      { path: "Dashboard", element: <Dashboard /> },
      { path: "Actions", element: <Actions /> },

      // Opción extra: un error 404 dentro del layout
      { path: "*", element: <ErrorPage /> },
    ],
  },
])
