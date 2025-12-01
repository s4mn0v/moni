import { Button } from "@/components/ui/button"
import { IconBrandGithub, IconCoin } from "@tabler/icons-react"

export function Footer() {

  return (
    <footer className="sticky bottom-0 z-50 bg-background border-t">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <IconCoin />
        <p>Moni</p>
        <div className="ml-auto flex items-center gap-2 sticky top-0">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/s4mn0v"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              <IconBrandGithub className="mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}