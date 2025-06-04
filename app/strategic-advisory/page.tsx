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
        <h2>Service Description</h2>
        <p>
          Most consultants give you frameworks. I give you frameworks plus the operational support to implement them. Every engagement is built to create momentum, not just insights.
        </p>
        <p>
          Strategy is choice. It's what you say no to. If your team can't articulate the plan in plain English, it's just expensive planning.
        </p>

        <div className="my-12 p-6 bg-slate-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Client Success Story</h2>
          <blockquote className="border-l-4 border-slate-300 pl-4 my-6">
            <p className="text-lg italic">
              "Tom's blend of clarity and hands-on help changed the pace of our company. We went from theoretical strategy to concrete execution in weeks, not months."
            </p>
            <footer className="mt-4 font-medium">
              — Sarah Chen, CEO of TechFlow
            </footer>
          </blockquote>

          <h3 className="text-lg font-semibold mt-8 mb-4">The Challenge</h3>
          <p>
            TechFlow was struggling to align their product strategy with market needs. Their leadership team had different visions for the company's direction, leading to scattered resources and missed opportunities.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-4">The Solution</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Conducted a 2-week strategy sprint to align leadership</li>
            <li>Developed a clear, actionable roadmap with quarterly milestones</li>
            <li>Created a decision-making framework for product prioritization</li>
            <li>Implemented weekly check-ins to maintain momentum</li>
          </ul>

          <h3 className="text-lg font-semibold mt-8 mb-4">The Results</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Product development cycle reduced by 40%</li>
            <li>Team alignment improved from 60% to 95%</li>
            <li>Revenue growth accelerated by 3x in the following quarter</li>
          </ul>
        </div>

        <h2>How We Work Together</h2>
        <ul>
          <li>Initial 2-week strategy sprint to tackle priority challenges</li>
          <li>Weekly advisory check-ins to maintain momentum</li>
          <li>Monthly deep-dive sessions for strategic alignment</li>
          <li>Quarterly planning and review sessions</li>
        </ul>

        <h2>What You'll Get</h2>
        <ul>
          <li>Clear, actionable strategic frameworks</li>
          <li>Hands-on implementation support</li>
          <li>Regular progress tracking and adjustments</li>
          <li>Direct access to strategic guidance when needed</li>
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
