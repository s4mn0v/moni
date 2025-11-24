import { Card, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Levels</CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}
