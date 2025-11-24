import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Notifications() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1240</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
