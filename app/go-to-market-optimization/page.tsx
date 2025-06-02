import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function GoToMarketOptimizationPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
        Go-to-Market Optimization
      </h1>

      <div className="prose prose-slate max-w-none">
        <h2>Overview</h2>
        <p>
          Sharpen your positioning and streamline your sales motion. This service focuses on finding the leverage points in your current go-to-market plan and turning them into repeatable wins.
        </p>

        <h2>Client Testimonial</h2>
        <blockquote>
          <p>
            "Tom helped us cut through the noise and close deals faster than ever."
          </p>
        </blockquote>

        <h2>Deliverables &amp; Process</h2>
        <ul>
          <li>Deep dive audit of existing funnel</li>
          <li>Messaging and enablement refresh</li>
          <li>Weekly working sessions to drive execution</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Lower customer acquisition costs</li>
          <li>Clearer value proposition</li>
          <li>Faster sales cycles</li>
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
