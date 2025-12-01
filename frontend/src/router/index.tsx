import { createBrowserRouter } from "react-router"
import DashboardLayout from "@/layout/DashboardLayout"
import HomePage from "@/components/pages/HomePage"
import Actions from "@/components/pages/Actions"
import ErrorPage from "@/components/pages/ErrorPage"
import Test from "@/components/pages/Test"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "Actions", element: <Actions /> },
      { path: "Test", element: <Test />},

      // Error Page
      { path: "*", element: <ErrorPage /> },
    ],
  },
])
