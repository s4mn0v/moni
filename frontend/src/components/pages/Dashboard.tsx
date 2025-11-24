import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">1240</p>
        </CardContent>
      </Card>
    </div>
  )
}
