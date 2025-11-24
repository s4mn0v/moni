import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Settings() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">1240</p>
        </CardContent>
      </Card>
    </div>
  )
}
