import { Link, useRouteError } from "react-router"
import { Button } from "@/components/ui/button"

export default function ErrorPage() {
  const error = useRouteError() as { status?: number } | null

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Oops! Error</h1>

      <p className="text-gray-600 mb-4">
        {error?.status === 404
          ? "La página que buscas no existe."
          : "Ocurrió un error inesperado."}
      </p>

      <Link to="/">
        <Button>Volver al inicio</Button>
      </Link>
    </div>
  )
}
