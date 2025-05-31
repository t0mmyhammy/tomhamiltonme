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
    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Strategic Advisory</h1>

        <div className="prose prose-slate max-w-none">
          <h2>What Makes This Different</h2>
          <p>
            Most consultants give you frameworks. I give you frameworks plus the operational support to implement them.
            Every engagement is designed around creating momentum, not just insights.
          </p>
          <p>
            Strategy is choice. It's what you say no to. If everyone on your team can't articulate the plan in plain
            English, it's not a real strategy—it's just expensive planning.
          </p>

          <h2>Who I Work With</h2>
          <ul>
            <li>Founders scaling from product-market fit to growth</li>
            <li>Executives navigating role transitions and negotiations</li>
            <li>Teams stuck between strategy and execution</li>
            <li>Companies preparing for fundraising or major partnerships</li>
            <li>Leaders who want an advisor, not just a consultant</li>
          </ul>

          <h2>Engagement Styles</h2>
          <ul>
            <li>Strategic Sprints (30-60 day focused projects)</li>
            <li>Ongoing Advisory (3-6 month strategic partnership)</li>
            <li>Executive Coaching (career transitions and negotiations)</li>
            <li>Operational Audits (efficiency and scale diagnostics)</li>
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
    </div>
  )
}
