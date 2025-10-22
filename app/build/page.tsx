import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Target, Users, TrendingUp } from "lucide-react"

export const metadata = {
  title: "Build | Open Tee",
  description:
    "We believe momentum starts with clarity. Our approach provides the path to act with speed, resilience, and focus on what's best for customers and employees.",
}

export default function BuildPage() {
  return (
    <div className="min-h-screen bg-opentee-off-white">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-opentee-heading mb-6">
              We like to leave a mark
            </h1>
            <p className="text-xl md:text-2xl text-opentee-body mb-8 leading-relaxed">
              Through clarity, momentum, and partnership, we build organizations that last.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#2068a7' }}>
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-6 font-gilroy">Our Values</h2>
          <p className="text-lg text-white text-center mb-12 max-w-3xl mx-auto">
            Our values guide how we show up for our customers, teams, and ourselves.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-opentee-heading mb-4">Integrity</h3>
                <p className="text-base text-opentee-body">
                  We do what we say we'll do, with honesty and transparency in every interaction.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-opentee-heading mb-4">Ownership</h3>
                <p className="text-base text-opentee-body">
                  We take accountability for results and build alongside teams to create shared wins and lasting impact.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-opentee-heading mb-4">Excellence</h3>
                <p className="text-base text-opentee-body">
                  We hold a high bar in everything we do, from strategy to execution, always raising the standard.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-opentee-heading mb-4">Clarity</h3>
                <p className="text-base text-opentee-body">
                  We simplify complexity and provide direction that everyone can act on.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-opentee-heading mb-4">Accountability</h3>
                <p className="text-base text-opentee-body">
                  We own the outcome and hold ourselves to the highest standards.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-opentee-heading mb-4">Growth</h3>
                <p className="text-base text-opentee-body">
                  We believe progress comes through learning, reflection, and helping others reach their potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-opentee-heading mb-6">Our Approach</h2>
              <p className="text-lg text-opentee-body mb-6 leading-relaxed">
                We believe momentum starts with clarity. The best companies move fast because their teams understand what matters and how to deliver it. We focus on building real systems that people use every day, not decks, not theories.
              </p>
              <p className="text-lg text-opentee-body mb-6 leading-relaxed">
                We keep things practical and close to the work. Every process, habit, and decision should help teams serve customers better, work smarter, and take pride in what they build.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-2 border-opentee-off-white">
                <CardContent className="p-6 text-center">
                  <Zap className="h-8 w-8 text-opentee-accent mx-auto mb-4" />
                  <h3 className="font-bold text-opentee-heading mb-2">Speed</h3>
                  <p className="text-base text-opentee-body">Act quickly where it counts most.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-opentee-off-white">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-opentee-accent mx-auto mb-4" />
                  <h3 className="font-bold text-opentee-heading mb-2">Clarity</h3>
                  <p className="text-base text-opentee-body">Make goals and next steps obvious to everyone.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-opentee-off-white">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-opentee-accent mx-auto mb-4" />
                  <h3 className="font-bold text-opentee-heading mb-2">Partnership</h3>
                  <p className="text-base text-opentee-body">Work shoulder to shoulder with teams, not above them.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-opentee-off-white">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-opentee-accent mx-auto mb-4" />
                  <h3 className="font-bold text-opentee-heading mb-2">Results</h3>
                  <p className="text-base text-opentee-body">Measure what matters, celebrate progress, and keep improving.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="w-full py-16 md:py-24 bg-opentee-off-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-opentee-heading text-center mb-6">What I Believe About Great Organizations</h2>
          <p className="text-lg text-opentee-body text-center mb-12 max-w-3xl mx-auto">
            These are lessons I've learned from years of building and leading teams.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <span className="text-2xl font-bold text-opentee-accent flex-shrink-0 w-8">1.</span>
                <div>
                  <h3 className="text-xl font-semibold text-opentee-heading mb-3">Shared Wins > Individual Credit</h3>
                  <p className="text-opentee-body">High-performing teams focus on collective progress, not heroics.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-2xl font-bold text-opentee-accent flex-shrink-0 w-8">2.</span>
                <div>
                  <h3 className="text-xl font-semibold text-opentee-heading mb-3">Clarity Is a Gift</h3>
                  <p className="text-opentee-body">Clear expectations and ownership drive speed and trust.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-2xl font-bold text-opentee-accent flex-shrink-0 w-8">3.</span>
                <div>
                  <h3 className="text-xl font-semibold text-opentee-heading mb-3">Feedback Is Fuel</h3>
                  <p className="text-opentee-body">Honest feedback improves both performance and relationships.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-2xl font-bold text-opentee-accent flex-shrink-0 w-8">4.</span>
                <div>
                  <h3 className="text-xl font-semibold text-opentee-heading mb-3">Execution Builds Trust</h3>
                  <p className="text-opentee-body">Following through creates credibility and momentum.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-2xl font-bold text-opentee-accent flex-shrink-0 w-8">5.</span>
                <div>
                  <h3 className="text-xl font-semibold text-opentee-heading mb-3">Fail Fast, Learn Faster</h3>
                  <p className="text-opentee-body">Testing and iteration beat over-polishing every time.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-2xl font-bold text-opentee-accent flex-shrink-0 w-8">6.</span>
                <div>
                  <h3 className="text-xl font-semibold text-opentee-heading mb-3">Calm Is Contagious</h3>
                  <p className="text-opentee-body">The best leaders bring steady energy when things get tough.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-2xl font-bold text-opentee-accent flex-shrink-0 w-8">7.</span>
                <div>
                  <h3 className="text-xl font-semibold text-opentee-heading mb-3">Stay Close to the Work</h3>
                  <p className="text-opentee-body">Credibility comes from proximity, not distance.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-2xl font-bold text-opentee-accent flex-shrink-0 w-8">8.</span>
                <div>
                  <h3 className="text-xl font-semibold text-opentee-heading mb-3">AI Is a Force Multiplier</h3>
                  <p className="text-opentee-body">The best teams use AI to focus on what truly matters: judgment, creativity, and speed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-opentee-heading mb-6">Ready to Build Together?</h2>
          <p className="text-xl text-opentee-body mb-8">
            Let's create something that lasts for your team, your customers, and your community.
          </p>
          <Link href="/contact">
            <Button className="bg-opentee-accent hover:bg-blue-600 px-8 py-4 text-lg font-medium">
              Schedule Time to Chat
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
