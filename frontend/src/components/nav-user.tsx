import { Link } from "react-router"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { ModeToggle } from "@/components/mode-toggle"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
  }
}) {

  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex flex-row gap-2 items-center">
        <Link to="/account" className="flex-1">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="text-muted-foreground truncate text-xs">
                {user.email}
              </span>
            </div>
          </SidebarMenuButton>
        </Link>
        <ModeToggle />
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
