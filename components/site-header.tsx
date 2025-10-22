"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

export default function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-24 items-center px-4 md:px-6 relative">
        {/* Logo - absolutely centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="transition-all duration-200 hover:opacity-80">
            <img 
              src="/OpenTeeLogo.png" 
              alt="Open Tee" 
              className="h-36 w-36"
            />
          </Link>
        </div>
        {/* Navigation - positioned to the right */}
        <nav className="hidden md:flex gap-8 items-center ml-auto">
          <Link href="/buy" className={`text-sm font-medium transition-colors duration-200 px-1 ${pathname === '/buy' ? 'text-opentee-black font-bold border-b-2 border-opentee-accent' : 'text-opentee-body hover:text-opentee-black'}`}>Buy</Link>
          <Link href="/build" className={`text-sm font-medium transition-colors duration-200 px-1 ${pathname === '/build' ? 'text-opentee-black font-bold border-b-2 border-opentee-accent' : 'text-opentee-body hover:text-opentee-black'}`}>Build</Link>
          <Link href="/advise" className={`text-sm font-medium transition-colors duration-200 px-1 ${pathname === '/advise' ? 'text-opentee-black font-bold border-b-2 border-opentee-accent' : 'text-opentee-body hover:text-opentee-black'}`}>Advise</Link>
          <Link href="/contact">
            <Button className="bg-opentee-black text-white hover:bg-opentee-slate transition-all duration-200">
              Contact
            </Button>
          </Link>
        </nav>
        {/* Mobile menu button - positioned to the right */}
        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
          <SheetContent side="right">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/OpenTeeLogo.png" 
                alt="Open Tee" 
                className="h-24 w-24"
              />
            </div>
            <nav className="flex flex-col gap-4">
              <Link href="/buy" className={`text-lg font-medium transition-colors duration-200 px-1 ${pathname === '/buy' ? 'text-opentee-black font-bold border-b-2 border-opentee-accent' : 'text-opentee-body hover:text-opentee-black'}`}>Buy</Link>
              <Link href="/build" className={`text-lg font-medium transition-colors duration-200 px-1 ${pathname === '/build' ? 'text-opentee-black font-bold border-b-2 border-opentee-accent' : 'text-opentee-body hover:text-opentee-black'}`}>Build</Link>
              <Link href="/advise" className={`text-lg font-medium transition-colors duration-200 px-1 ${pathname === '/advise' ? 'text-opentee-black font-bold border-b-2 border-opentee-accent' : 'text-opentee-body hover:text-opentee-black'}`}>Advise</Link>
              <Link href="/contact" className="text-lg font-medium bg-opentee-black text-white rounded-md px-4 py-2 hover:bg-opentee-slate transition-all duration-200">Contact</Link>
            </nav>
          </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
