import { TopBar } from "./top-bar"
import { Navigation } from "./navigation"
import { Footer } from "./footer"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

