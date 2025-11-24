import { createBrowserRouter } from "react-router"
import DashboardLayout from "@/layout/DashboardLayout"
import HomePage from "@/components/pages/HomePage"
import Notifications from "@/components/pages/Notifications"
import Dashboard from "@/components/pages/Dashboard"
import Actions from "@/components/pages/Actions"
import Rewards from "@/components/pages/Rewards"
import Settings from "@/components/pages/Settings"
import Account from "@/components/pages/Account"
import ErrorPage from "@/components/pages/ErrorPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,   // ← AQUI
    children: [
      { index: true, element: <HomePage /> },
      { path: "Dashboard", element: <Dashboard /> },
      { path: "Notifications", element: <Notifications /> },
      { path: "Actions", element: <Actions /> },
      { path: "Settings", element: <Settings /> },
      { path: "Rewards", element: <Rewards /> },
      { path: "Account", element: <Account /> },

      // Opción extra: un error 404 dentro del layout
      { path: "*", element: <ErrorPage /> },
    ],
  },
])
