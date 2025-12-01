"use client"

import { Bar, BarChart } from "recharts"

import { type ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export default function HomePage() {
  return (
    <div>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quod praesentium cumque, unde, ab repellendus fuga, recusandae rerum illum molestias deleniti laboriosam odit officia nihil nisi quaerat porro ipsa corrupti? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias odit ipsam maiores modi nobis, fugit recusandae ipsa voluptate facilis dolorum placeat sit quod. Recusandae alias voluptatibus inventore eaque. Libero, illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis blanditiis ipsam quos soluta voluptatem ipsum odio tempora quae reprehenderit similique ducimus, omnis officia mollitia, magni natus, alias debitis. Iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias repudiandae id ex, est quam ad. Corporis accusantium facilis, laborum consequatur a eveniet, eum doloribus illum quod iste, error voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit doloremque asperiores id placeat. Voluptatem soluta, expedita, ratione facere cumque sunt libero doloremque quas id voluptate, molestias laudantium quos eius nostrum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus rerum culpa pariatur debitis adipisci quas quidem earum laboriosam! Ipsam, et perspiciatis deserunt dicta modi magnam voluptate perferendis maxime alias! Veniam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur cupiditate voluptates reprehenderit, amet aut delectus temporibus atque officia doloribus. Facere nobis consectetur voluptatum quod obcaecati vero maxime rem dolorum praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquam sed repellendus itaque molestias veniam perferendis expedita illum tempore, corporis enim esse nemo consectetur dolores nulla quam eius dolor placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas nihil quaerat ut aliquid! Consequatur, reiciendis. Fugit, quos! Enim dignissimos tempore odit perferendis numquam voluptatem ratione! Magni nulla iure ab. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo dolorem eum facere id architecto repellat aut voluptate deserunt quae velit reiciendis maiores laborum repellendus beatae consectetur, eligendi cupiditate rem? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nemo est quidem aspernatur amet debitis necessitatibus libero modi, culpa eveniet similique qui eius suscipit in, ullam laborum magni repudiandae! Voluptas? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magni, dolor ratione, corrupti incidunt voluptatem possimus quia animi dicta vero tempora voluptatibus impedit iusto eius recusandae suscipit eligendi omnis quaerat! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae eaque accusantium laudantium. Amet voluptatem nam possimus corporis accusantium hic. Cupiditate pariatur architecto quibusdam doloribus repudiandae commodi quisquam mollitia temporibus rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt odit non, enim soluta quos molestias voluptatibus ea! Autem architecto dolorum est dolor qui, inventore quasi repellat dolore ipsa accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum omnis iste saepe quibusdam aperiam, soluta voluptatibus deserunt ea numquam eius doloribus asperiores quasi maxime exercitationem hic? Voluptatibus, aliquid vero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum deleniti sequi alias explicabo aliquam, id aliquid rem. Id error itaque minus non assumenda iste quae earum, commodi ducimus accusantium ratione? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae itaque illum, excepturi fugit earum similique aut ea quas et fuga, odio aliquid. Minus fuga exercitationem a dolores architecto sit aperiam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam praesentium magnam sed voluptates minus, neque nisi, itaque quos corporis facilis distinctio veritatis nobis animi pariatur assumenda earum rerum vitae voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quia voluptates autem optio perspiciatis aspernatur nostrum necessitatibus, sint quaerat beatae quasi harum aliquam dolor, ipsam illo molestiae provident culpa ea.
      </p>
    </div>
  )
}
