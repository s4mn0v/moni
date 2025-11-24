import * as React from "react"
import {
  IconDashboard,
  IconActivity,
  IconCoin,
  IconSettings,
  IconGift
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Moni Admin",
    email: "moni@moni.com",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Actions",
      url: "/actions",
      icon: IconActivity,
    },
    {
      title: "Rewards",
      url: "/rewards",
      icon: IconGift,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <h1>
                <a href="#" className="flex flex-row gap-2 text-2xl items-center uppercase tracking-widest">
                  <IconCoin className="size-6!" />
                  Moni
                </a>
              </h1>

            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
