import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 ml-0 md:ml-8">
          <Link href="/" className="font-bold text-xl transition-all duration-200 hover:text-slate-700 hover:cursor-[url('/images/wave-hand.png'),pointer]">
            Hi, I'm Tom 👋🏻
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/what-i-do" className="text-sm font-medium hover:text-slate-700 transition-colors duration-200">What I Do</Link>
          <Link href="/how-i-work" className="text-sm font-medium hover:text-slate-700 transition-colors duration-200">How I Work</Link>
          <Link href="/results" className="text-sm font-medium hover:text-slate-700 transition-colors duration-200">Results</Link>
          <Link href="/about" className="text-sm font-medium hover:text-slate-700 transition-colors duration-200">About</Link>
          <Link href="/contact">
            <Button className="bg-slate-900 text-white hover:bg-slate-800 transition-all duration-200">
              Lets Chat
            </Button>
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/what-i-do" className="text-lg font-medium hover:text-slate-700 transition-colors duration-200">What I Do</Link>
              <Link href="/how-i-work" className="text-lg font-medium hover:text-slate-700 transition-colors duration-200">How I Work</Link>
              <Link href="/results" className="text-lg font-medium hover:text-slate-700 transition-colors duration-200">Results</Link>
              <Link href="/about" className="text-lg font-medium hover:text-slate-700 transition-colors duration-200">About</Link>
              <Link href="/contact" className="text-lg font-medium bg-slate-900 text-white rounded-md px-4 py-2 hover:bg-slate-800 transition-all duration-200">Lets Chat</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
