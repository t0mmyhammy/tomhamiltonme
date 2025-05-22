import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-2 pl-2">
          <Link href="/" className="font-bold text-xl transition-all duration-200 hover:text-slate-700">
            Tom Hamilton
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link
            href="/strategic-advisory"
            className="text-sm font-medium hover:text-slate-700 transition-colors duration-200"
          >
            Strategic Advisory
          </Link>
          <Link href="/how-i-work" className="text-sm font-medium hover:text-slate-700 transition-colors duration-200">
            How I Work
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-slate-700 transition-colors duration-200">
            About
          </Link>
          <Link href="/results" className="text-sm font-medium hover:text-slate-700 transition-colors duration-200">
            Results
          </Link>
          <Link href="/newsletter">
            <Button
              variant="outline"
              className="border-slate-900 text-slate-900 hover:bg-slate-100 transition-all duration-200"
            >
              GET CLARITY UPDATES
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
              <Link
                href="/strategic-advisory"
                className="text-lg font-medium hover:text-slate-700 transition-colors duration-200"
              >
                Strategic Advisory
              </Link>
              <Link
                href="/how-i-work"
                className="text-lg font-medium hover:text-slate-700 transition-colors duration-200"
              >
                How I Work
              </Link>
              <Link href="/about" className="text-lg font-medium hover:text-slate-700 transition-colors duration-200">
                About
              </Link>
              <Link href="/results" className="text-lg font-medium hover:text-slate-700 transition-colors duration-200">
                Results
              </Link>
              <Link
                href="/newsletter"
                className="text-lg font-medium hover:text-slate-700 transition-colors duration-200"
              >
                Get Clarity Updates
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
