import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function OperationalStrategyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
        Operational Strategy
      </h1>

      <div className="prose prose-slate max-w-none">
        <h2>Overview</h2>
        <p>
          Streamline how your company actually runs. We focus on clearing operational friction so your team can scale without chaos.
        </p>

        <h2>Client Testimonial</h2>
        <blockquote>
          <p>
            "The systems Tom put in place gave us back hours each week and real clarity on ownership."
          </p>
        </blockquote>

        <h2>Deliverables &amp; Process</h2>
        <ul>
          <li>Full ops assessment</li>
          <li>Priority workflow redesign</li>
          <li>Implementation coaching with leadership</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Reduced internal friction</li>
          <li>Better cross-team alignment</li>
          <li>Clear accountability structures</li>
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
