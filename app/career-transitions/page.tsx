import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CareerTransitionsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
        Individual Career Transitions &amp; Negotiations
      </h1>

      <div className="prose prose-slate max-w-none">
        <h2>Overview</h2>
        <p>
          Career-defining moves deserve clarity, not guesswork. I help you navigate new roles and negotiations with structure and confidence.
        </p>

        <h2>Client Testimonial</h2>
        <blockquote>
          <p>
            "With Tom's coaching I secured the offer I wanted and walked in with a clear plan."
          </p>
        </blockquote>

        <h2>Deliverables &amp; Process</h2>
        <ul>
          <li>Benchmarking of compensation and equity</li>
          <li>Structured negotiation planning</li>
          <li>Ongoing check-ins through the transition</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Confidence in what you're asking for</li>
          <li>Clarity on priorities and trade-offs</li>
          <li>Smoother start in the new role</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/contact">
          <Button className="bg-slate-900 hover:bg-slate-800">
            Start the Conversation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
