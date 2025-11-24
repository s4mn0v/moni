import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import TradingViewWidget from "../TradingViewWidget"

export default function Actions() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1240</p>
          </CardContent>
        </Card>
      </div>
      <TradingViewWidget />
    </div>
  )
}
