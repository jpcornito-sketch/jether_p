import { BasketballIcon } from "./basketball-icon"

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-card/50 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <BasketballIcon className="w-5 h-5 text-primary" />
          <span>&copy; {new Date().getFullYear()} Jether Cornito. All rights reserved.</span>
        </div>
        <div className="text-sm text-muted-foreground">
          Built with passion and code
        </div>
      </div>
    </footer>
  )
}
