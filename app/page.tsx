import Link from "next/link"
import {
  ArrowRight,
  ChevronRight,
  Target,
  Cog,
  Handshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
            <div className="flex flex-col space-y-4 text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Strategy That Actually Ships
              </h1>
              <p className="text-gray-500 md:text-xl max-w-[600px]">
                For founders and executives who refuse to let good strategy die in PowerPoint
              </p>
              <div className="pt-4 flex justify-center md:justify-start">
                <Link href="/contact">
                  <Button className="bg-slate-900 hover:bg-slate-800">
                    I HELP LEADERS BRIDGE STRATEGY AND EXECUTION
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="relative w-[400px] h-[500px] md:w-[500px] md:h-[600px] overflow-hidden">
                <img src="/images/Hero-Grayscale.png" alt="Tom Hamilton" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Tired of strategy sessions that produce beautiful decks but zero momentum?
              </h2>
              <p className="mx-auto max-w-[700px] text-xl font-semibold mt-6">I get it.</p>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg mt-4">
                Strategy without execution is just expensive planning. I work with founders, executives, and scaling
                teams who need someone to bridge that gap—turning strategic clarity into operational reality. No
                consultancy theater. Just focused work that moves the needle.
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
                Hands-on advisory for the challenges that keep you up at night.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Go-to-Market Optimization",
                description:
                  "Refining your GTM motion for efficiency and scale. From customer acquisition cost reduction to sales process optimization—I help you find the leverage points that compound growth without burning through runway.",
              },
              {
                icon: Cog,
                title: "Operational Strategy",
                description:
                  "Diagnosing and fixing the operational inefficiencies that slow you down. Whether it's org design, process optimization, or resource allocation—I help you build systems that scale with intention.",
              },
              {
                icon: Handshake,
                title: "Executive Transitions & Negotiations",
                description:
                  "Career-defining moves require strategic thinking. From compensation negotiations to role transitions, I help ambitious professionals navigate inflection points with clarity and confidence.",
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

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <div className="space-y-2 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How I Work</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                A framework-first approach that prioritizes action over analysis.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "Step 1",
                title: "Rapid Diagnostic",
                description: "Quick assessment to identify the highest-leverage opportunities and constraints",
              },
              {
                step: "Step 2",
                title: "Framework Development",
                description: "Custom frameworks tailored to your specific situation and goals",
              },
              {
                step: "Step 3",
                title: "Implementation Planning",
                description: "Clear roadmap with defined ownership, timelines, and success metrics",
              },
              {
                step: "Step 4",
                title: "Side-by-Side Execution",
                description: "Rolling up sleeves to work through the messy middle—not just sending recommendations",
              },
              {
                step: "Step 5",
                title: "Continuous Calibration",
                description: "Regular check-ins to adjust course based on real-world feedback and results",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <div className="space-y-2 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Real Results</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                The outcomes that matter—measurable impact, not just activity.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-500 italic">
                  "Cut customer acquisition cost by 30% in six months for a Series A proptech startup through
                  go-to-market redesign and sales process optimization."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-500 italic">
                  "Improved on-time delivery by 20% and reduced cost-per-order for last-mile delivery company, enabling
                  major retail partnership."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-500 italic">
                  "Guided startup CEO through executive negotiation resulting in $90k compensation increase and clearer
                  equity progression path."
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/results">
              <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-100">
                View All Case Studies
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Let's Talk Strategy</h2>
              <p className="text-gray-300 md:text-xl">
                Working on something challenging? Whether it's go-to-market optimization, operational efficiency,
                or a career transition—I'm here to help.
              </p>
            </div>
            <Link href="/contact" className="w-full">
              <Button className="w-full bg-white text-slate-900 hover:bg-gray-200 h-12 transition-all duration-200">
                Start the Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
