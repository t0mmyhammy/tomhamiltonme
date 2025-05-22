import Link from "next/link"
import { Linkedin } from "lucide-react"
import XLogo from "@/components/icons/x-logo"
import SubstackLogo from "@/components/icons/substack-logo"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-6 md:px-8">
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left text-sm text-muted-foreground">
          <span>
            Based in Michigan <span aria-hidden="true" className="mx-1">&middot;</span> Working globally
          </span>
          <span>&copy; 2025 Tom Hamilton. Building clarity through action.</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/thomasghamilton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5 text-gray-500 hover:text-gray-900" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://x.com/t0mmyhammy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XLogo className="h-5 w-5 text-gray-500 hover:text-gray-900" />
            <span className="sr-only">X</span>
          </Link>
          <Link
            href="https://forwardfactor.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SubstackLogo className="h-5 w-5 text-gray-500 hover:text-gray-900" />
            <span className="sr-only">Substack</span>
          </Link>
          <Link href="mailto:hi@tomhamilton.me" className="text-sm text-gray-500 hover:text-gray-900">
            hi@tomhamilton.me
          </Link>
        </div>
      </div>
    </footer>
  )
}
