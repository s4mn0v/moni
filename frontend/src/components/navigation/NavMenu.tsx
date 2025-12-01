"use client"

import { Link, useLocation } from "react-router"
import { useIsMobile } from "@/hooks/use-mobile"

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose
} from "@/components/ui/drawer"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

import { IconChartHistogram, IconDirectionArrows, IconMenu2 } from "@tabler/icons-react"

export function NavMenu() {
  const isMobile = useIsMobile()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">

      <Drawer>
        <DrawerTrigger asChild>
          <button className="
            bg-neutral-900/90 backdrop-blur-md shadow-lg
            text-white p-3 rounded-r-xl
            hover:bg-neutral-800 transition
          ">
            <IconMenu2 size={22} />
          </button>
        </DrawerTrigger>

        <DrawerContent className="fixed left-0 top-0 bottom-0 w-64 rounded-none pt-10">

          <div className="px-4 py-6">
            <NavigationMenu viewport={isMobile}>
              <NavigationMenuList className="flex flex-col gap-4 w-full">

                {/* GRAPHICS */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={`
                      ${navigationMenuTriggerStyle()} 
                      flex items-center gap-3 w-full 
                      ${isActive("/") ? "bg-neutral-800 text-white" : "opacity-70 hover:opacity-100"}
                    `}
                  >
                    <Link to="/">
                      <div className="flex flex-row gap-4 items-center uppercase w-full">
                        <IconChartHistogram className="text-white" size={20} />
                        Graphicsaaaaa
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* ACTIONS */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={`
                      ${navigationMenuTriggerStyle()} 
                      flex items-center gap-3 w-full
                      ${isActive("/actions") ? "bg-neutral-800 text-white" : "opacity-70 hover:opacity-100"}
                    `}
                  >
                    <Link to="/actions">
                      <div className="flex flex-row gap-4 items-center uppercase w-full">
                        <IconDirectionArrows className="text-white" size={20} />
                        Actions
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <DrawerClose asChild>
            <button className="absolute top-4 right-4 text-white">✕</button>
          </DrawerClose>

        </DrawerContent>
      </Drawer>

    </div>
  )
}
