import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ChartBarLabel } from "@/components/ui/bar-chart"

export default function Rewards() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">1240</p>
        </CardContent>
      </Card>

      <ChartBarLabel />
    </div>
  )
}
