import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function OrganizationalPlanningPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
        Organizational Planning
      </h1>

      <div className="prose prose-slate max-w-none">
        <h2>Overview</h2>
        <p>
          When growth hits, structure matters. I help leadership teams design orgs that scale without creating confusion or unnecessary layers.
        </p>

        <h2>Client Testimonial</h2>
        <blockquote>
          <p>
            "We finally have a clear org chart and decision rights. The team is moving faster and with more trust."
          </p>
        </blockquote>

        <h2>Deliverables &amp; Process</h2>
        <ul>
          <li>Role and responsibility mapping</li>
          <li>Org chart design with leveling guidance</li>
          <li>Change management and rollout support</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Better alignment during growth</li>
          <li>Improved accountability</li>
          <li>Clear career paths for your team</li>
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
