// app/page.tsx (or wherever your Home component lives)

import Link from "next/link"
import {
  ArrowRight,
  ChevronRight,
  Target,
  Cog,
  Compass,
  Network,
  Banknote,
  Handshake,
} from "lucide-react"

export const metadata = {
  title: "Tom Hamilton | Strategic Advisor",
  description:
    "Strategic advisory for founders and executives. Go-to-market optimization, operational efficiency, and executive coaching that drive real results.",
}
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
            <div className="flex flex-col space-y-4 text-center md:text-left animate-fadeSlideIn">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Clarity. Action. Results.
              </h1>
              <p className="text-gray-500 md:text-xl max-w-[600px]">
                From scaling teams to navigating career shifts, I help founders and executives move with confidence—and build what matters most.
              </p>
              <div className="pt-4 flex justify-center md:justify-start">
                <Link href="/contact">
                  <Button className="bg-slate-900 hover:bg-slate-800 transition-transform duration-200 hover:-translate-y-0.5">
                    Let's Build What Matters
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="relative w-[400px] h-[500px] md:w-[500px] md:h-[600px] overflow-hidden">
                <img
                  src="/images/Hero-Grayscale.png"
                  alt="Tom Hamilton strategic advisor"
                  className="object-cover w-full h-full animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="w-full py-8 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Wondering how to build momentum or hit your goals?
              </h2>
              <p className="mx-auto max-w-[700px] text-xl font-semibold mt-6">
                <span className="block sm:inline">
                  Stop wondering. Start knowing.
                </span>{" "}
                <span className="block sm:inline">
                  Let's do something about it.
                </span>
              </p>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg mt-4">
                Strategy without execution is just expensive planning. I work with founders, execs, and scaling teams to turn clarity into traction—whether that means reworking a go-to-market plan, fixing operational friction, or navigating a high-stakes career move.
              </p>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg mt-4">
                My approach is hands-on. We don't just talk—we build. We'll collaborate to build systems that scale, foster enduring accountability, and apply AI tools where they truly make an impact. No fluff. Just focused work that drives results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Services Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <div className="space-y-2 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How I Help</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                High-leverage support for teams (and individuals) that are building, scaling, or evolving.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Go-to-Market Optimization",
                description:
                  "Go-to-market isn't about doing more—it's about doing what matters most. I help teams uncover bottlenecks and unlock leverage in their growth motion—from positioning to sales process to team focus—so you can grow efficiently without burning out your runway.",
              },
              {
                icon: Cog,
                title: "Operational Strategy",
                description:
                  "Most teams don't fail from lack of ambition—they fail from friction. Whether it's org design, process clutter, or decision-making gaps, I help streamline how your company runs so you can scale without chaos.",
              },
              {
                icon: Compass,
                title: "Product Strategy",
                description:
                  "Building the right product means more than shipping fast. I help align product decisions with customer insight, business priorities, and internal capacity—so your roadmap reflects what actually moves the business forward.",
              },
              {
                icon: Network,
                title: "Organizational Planning",
                description:
                  "When growth hits, structure starts to matter. I work with leadership teams to clarify roles, level responsibilities, and design orgs that scale—without adding unnecessary layers or creating confusion.",
              },
              {
                icon: Banknote,
                title: "Fundraising Readiness",
                description:
                  "Fundraising is part pitch, part posture. I help founders sharpen their story, pressure-test their metrics, and prep for what investors will actually care about—internally and externally.",
              },
              {
                icon: Handshake,
                title: "Individual Career Transitions & Negotiations",
                description:
                  "Career-defining moves deserve clarity, not guesswork. Whether you're stepping into a new role, negotiating comp, or weighing a shift, I help you move forward with structure, confidence, and smart positioning.",
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <service.icon className="h-10 w-10 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-500">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-2">How I Work</h2>
          <p className="text-xl text-center text-gray-500 mb-10">A momentum-first approach that turns clarity into action—and action into results.</p>
          <ol className="space-y-8 max-w-3xl mx-auto">
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-900 text-white font-bold text-lg">1</span>
              <div>
                <span className="font-semibold">Immersion & Insight</span>
                <div className="text-gray-600">I dig in quickly—listening, observing, and asking sharp questions to find where leverage lives.</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-900 text-white font-bold text-lg">2</span>
              <div>
                <span className="font-semibold">Co-Creating Clarity</span>
                <div className="text-gray-600">Together, we build simple tools and frameworks that help you make faster, better decisions.</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-900 text-white font-bold text-lg">3</span>
              <div>
                <span className="font-semibold">Action Planning</span>
                <div className="text-gray-600">We turn that clarity into a focused plan with clear owners, timelines, and priorities.</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-900 text-white font-bold text-lg">4</span>
              <div>
                <span className="font-semibold">Embedded Execution</span>
                <div className="text-gray-600">I work alongside your team to push through the messy middle—no handoffs, no fluff.</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-900 text-white font-bold text-lg">5</span>
              <div>
                <span className="font-semibold">Ongoing Calibration</span>
                <div className="text-gray-600">We check in, adjust, and keep moving—building momentum as we learn what works.</div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Real Results Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2 text-center">Real Results</h2>
          <p className="text-xl text-center text-gray-500 mb-8">The outcomes that matter—measurable impact, not just activity.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border rounded-lg p-6 bg-slate-50 text-gray-700 flex items-center justify-center">
              <span className="italic">“Our go-to-market motion felt disjointed—too many messages, no clear process. Tom helped us tighten everything up. We finally had a story that resonated, a process that worked, and a team that felt confident again. He brought structure without slowing us down.”</span> <span className="font-bold ml-2">- Seed Series CEO</span>
            </div>
            <div className="border rounded-lg p-6 bg-slate-50 text-gray-700 flex items-center justify-center">
              <span className="italic">“Our ops were messy and expensive. Tom rebuilt our playbook, improved delivery, and cut costs enough to land a national partnership. He taught us fundamentals and helped us level up fast.”</span> <span className="font-bold ml-2">- Series A CEO & Founder</span>
            </div>
            <div className="border rounded-lg p-6 bg-slate-50 text-gray-700 flex items-center justify-center">
              <span className="italic">“I was unsure going into the offer conversation. With Tom’s help, I walked out $40k ahead and crystal clear on what I wanted. His coaching challenged my thinking—and helped me confidently ask for more.”</span> <span className="font-bold ml-2">- Head of Product at Late-Stage Startup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Build Momentum?</h2>
              <p className="text-gray-300 md:text-xl">
                Whether it's go-to-market clarity, operational friction, or a career move you want to get right—let's work through it together.
              </p>
            </div>
            <Link href="/contact" className="w-full">
              <Button className="w-full bg-white text-slate-900 hover:bg-gray-200 h-12 transition-all duration-200">
                Schedule a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
