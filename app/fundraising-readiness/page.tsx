import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FundraisingReadinessPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
        Fundraising Readiness
      </h1>

      <div className="prose prose-slate max-w-none">
        <h2>Overview</h2>
        <p>
          Fundraising is part pitch, part posture. We'll tighten your story, prep your metrics, and get you ready for the conversations that matter.
        </p>

        <h2>Client Testimonial</h2>
        <blockquote>
          <p>
            "Our raise moved forward quickly once Tom helped us refine the narrative and materials."
          </p>
        </blockquote>

        <h2>Deliverables &amp; Process</h2>
        <ul>
          <li>Metrics and narrative review</li>
          <li>Investor materials and Q&amp;A prep</li>
          <li>Coaching on pitch delivery</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Stronger investor conversations</li>
          <li>Clearer financial story</li>
          <li>Confidence heading into the raise</li>
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
