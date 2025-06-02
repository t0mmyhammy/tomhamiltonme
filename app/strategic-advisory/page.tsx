import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Strategic Advisory Services",
  description:
    "Hands-on strategic advisory for startups and executives. Get frameworks and operational support to accelerate growth and execution.",
}

export default function StrategicAdvisoryPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
        Strategic Advisory
      </h1>

      <div className="prose prose-slate max-w-none">
        <h2>Overview</h2>
        <p>
          Most consultants give you frameworks. I give you frameworks plus the operational support to implement them. Every engagement is built to create momentum, not just insights.
        </p>
        <p>
          Strategy is choice. It's what you say no to. If your team can't articulate the plan in plain English, it's just expensive planning.
        </p>

        <h2>Client Testimonial</h2>
        <blockquote>
          <p>
            "Tom's blend of clarity and hands-on help changed the pace of our company."
          </p>
        </blockquote>

        <h2>Deliverables &amp; Process</h2>
        <ul>
          <li>Focused sprints tackling priority challenges</li>
          <li>Ongoing advisory check-ins</li>
          <li>Frameworks translated into real action</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
          <li>Sharper decision making</li>
          <li>Alignment from leadership through the front line</li>
          <li>Momentum that lasts</li>
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
