import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ProductStrategyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
        Product Strategy
      </h1>

      <div className="prose prose-slate max-w-none">
        <h2>Overview</h2>
        <p>
          Align your roadmap with real customer insight and business priorities. This is about focusing limited resources on features that truly move the needle.
        </p>

        <h2>Client Testimonial</h2>
        <blockquote>
          <p>
            "Our product direction finally makes sense across teams thanks to Tom's guidance."
          </p>
        </blockquote>

        <h2>Deliverables &amp; Process</h2>
        <ul>
          <li>Stakeholder alignment sessions</li>
          <li>Prioritization frameworks tailored to your goals</li>
          <li>Roadmap working sessions and feedback loops</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Clarity on what to build next</li>
          <li>Shared understanding between product and commercial teams</li>
          <li>Faster delivery on the right features</li>
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
