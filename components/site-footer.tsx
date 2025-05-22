import Link from "next/link"
import { Linkedin } from "lucide-react"
import XLogo from "@/components/icons/x-logo"
import SubstackLogo from "@/components/icons/substack-logo"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-gray-500">Based in Michigan • Working globally</p>
          <p className="text-sm text-gray-500">© 2025 Tom Hamilton. Building clarity through action.</p>
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
          <Link href="mailto:hello@example.com" className="text-sm text-gray-500 hover:text-gray-900">
            hello@example.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
