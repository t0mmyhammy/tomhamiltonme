import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, Clock, Users } from "lucide-react"

export const metadata = {
  title: "Advise | Open Tee",
  description:
    "Sometimes a second set of operator eyes is all a team needs. Through Open Tee, I help a few each quarter move faster with clarity and focus.",
}

export default function AdvisePage() {
  return (
    <div className="min-h-screen bg-opentee-off-white">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-opentee-heading mb-6">
              Clarity. Action. Results.
            </h1>
            <p className="text-xl md:text-2xl text-opentee-body mb-8 leading-relaxed">
              From scaling teams to navigating career shifts, I help founders and executives move with confidence and build what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-opentee-heading text-center mb-12">Scope</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-opentee-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-opentee-heading mb-4">Go-to-Market Tune-ups</h3>
                <p className="text-opentee-body">
                  Sharpen positioning, strengthen sales motion, and find the levers that unlock growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-opentee-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-opentee-heading mb-4">Operations and Service Quality</h3>
                <p className="text-opentee-body">
                  Tighten how teams work, improve delivery, and build systems that scale with calm and consistency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Lightbulb className="h-12 w-12 text-opentee-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-opentee-heading mb-4">Compensation and Negotiation</h3>
                <p className="text-opentee-body">
                  Navigate big decisions, negotiate stronger terms, and create clarity for the next step in your career.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="w-full py-16 md:py-24 bg-opentee-off-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-opentee-heading mb-6">Fit</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-opentee-accent font-bold text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-opentee-heading mb-2">Owner led</h3>
                    <p className="text-opentee-body">Clear goals, accountability, and a bias for progress.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-opentee-accent font-bold text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-opentee-heading mb-2">Michigan preferred</h3>
                    <p className="text-opentee-body">Local focus preferred, remote works when simple.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-opentee-accent font-bold text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-opentee-heading mb-2">Limited capacity</h3>
                    <p className="text-opentee-body">A few focused engagements under the Open Tee umbrella.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-opentee-heading mb-6">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-opentee-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-opentee-heading mb-2">Kickoff</h4>
                    <p className="text-opentee-body">A short conversation to clarify goals and context.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-opentee-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-opentee-heading mb-2">Focused Sprints</h4>
                    <p className="text-opentee-body">Defined work with clear deliverables and outcomes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-opentee-accent mt-1" />
                  <div>
                    <h4 className="font-semibold text-opentee-heading mb-2">Monthly Access</h4>
                    <p className="text-opentee-body">Steady support for teams that need continued guidance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-opentee-heading text-center mb-12">Recent Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-opentee-accent mb-2">20%+</div>
              <p className="text-opentee-body">reduction in customer acquisition costs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-opentee-accent mb-2">50%</div>
              <p className="text-opentee-body">improvement in operations team productivity</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-opentee-accent mb-2">40%</div>
              <p className="text-opentee-body">savings realized to CapEx investments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-opentee-black text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ask About Availability</h2>
          <p className="text-xl text-gray-300 mb-8">
            I take on a few select advisory projects each quarter.<br />
            If the timing and fit feel right, let's start the conversation.
          </p>
          <Link href="/contact">
            <Button className="bg-opentee-accent hover:bg-blue-600 px-8 py-4 text-lg font-medium">
              Start the Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
