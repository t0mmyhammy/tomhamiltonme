import Link from "next/link"
import {
  ArrowRight,
  ChevronRight,
  Target,
  Cog,
  Compass,
  Banknote,
  Handshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="w-full py-8 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
            <div className="flex flex-col space-y-4 text-center md:text-left animate-fadeSlideIn">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Strategy That Actually Ships
              </h1>
              <p className="text-gray-500 md:text-xl max-w-[600px]">
                For founders and executives who refuse to let good strategy die in a slide deck.
              </p>
              <div className="pt-4 flex justify-center md:justify-start">
                <Link href="/contact">
                  <Button className="bg-slate-900 hover:bg-slate-800 transition-transform duration-200 hover:-translate-y-0.5">
                    LET'S BUILD WHAT MATTERS
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="relative w-[400px] h-[500px] md:w-[500px] md:h-[600px] overflow-hidden">
                <img src="/images/Hero-Grayscale.png" alt="Tom Hamilton" className="object-cover w-full h-full animate-float" />
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
                Wondering if your ideas will actually work?
              </h2>
              <p className="mx-auto max-w-[700px] text-xl font-semibold mt-6">
                Stop wondering. Start knowing. Let&rsquo;s do something about it.
              </p>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg mt-4">
                Strategy without execution is just expensive planning. I work with founders, executives, and scaling
                teams to close that gap—turning clarity into operational reality.
              </p>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg mt-4">
                My approach is hands-on. We don&rsquo;t just talk strategy—we build. Together, we&rsquo;ll design solutions,
                systems, and workflows that actually scale. No fluff. Just focused work that moves the needle, helps you
                grow, and builds new habits around execution, accountability, and smart use of AI.
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
                High-leverage support for teams that are building, scaling, or evolving.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Go-to-Market Optimization",
                description:
                  "Go-to-market isn\u2019t about doing more\u2014it\u2019s about doing what matters most. I help teams uncover bottlenecks and unlock leverage in their growth motion—from positioning to sales process to team focus—so you can grow efficiently without burning out your runway.",
              },
              {
                icon: Cog,
                title: "Operational Strategy",
                description:
                  "Most teams don’t fail from lack of ambition—they fail from friction. Whether it’s org design, process clutter, or decision-making gaps, I help streamline how your company runs so you can scale without chaos.",
              },
              {
                icon: Compass,
                title: "Product Strategy",
                description:
                  "Building the right product means more than shipping fast. I help align product decisions with customer insight, business priorities, and internal capacity—so your roadmap reflects what actually moves the business forward.",
              },
              {
                icon: Banknote,
                title: "Organizational Planning & Fundraising",
                description:
                  "Growth creates pressure. So do funding rounds. I work with founders and execs to align the org, clarify roles, sharpen pitch materials, and prep for what investors will actually care about—internally and externally.",
              },
              {
                icon: Handshake,
                title: "Executive Transitions & Negotiations",
                description:
                  "Career-defining moves deserve clarity, not guesswork. From compensation strategy to role transitions, I help leaders make confident decisions and navigate inflection points with structure, confidence, and smart positioning.",
              },
            ].map((service, index) => {
              let colStart = "";
              if (index === 3) colStart = "md:col-start-2";
              if (index === 4) colStart = "md:col-start-4";
              return (
                <div key={index} className={cn("group md:col-span-2", colStart)}>
                  <Card className="h-full transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <service.icon className="h-10 w-10 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-500">{service.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
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
                A momentum-first approach that turns clarity into action—and
                action into results.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "Step 1",
                title: "Immersion & Insight",
                description:
                  "I dig in quickly—listening, observing, and asking sharp questions to find where leverage lives.",
              },
              {
                step: "Step 2",
                title: "Co-Creating Clarity",
                description:
                  "Together, we build simple tools and frameworks that help you make faster, better decisions.",
              },
              {
                step: "Step 3",
                title: "Action Planning",
                description:
                  "We turn that clarity into a focused plan with clear owners, timelines, and priorities.",
              },
              {
                step: "Step 4",
                title: "Embedded Execution",
                description:
                  "I work alongside your team to push through the messy middle—no handoffs, no fluff.",
              },
              {
                step: "Step 5",
                title: "Ongoing Calibration",
                description:
                  "We check in, adjust, and keep moving—building momentum as we learn what works.",
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
                  "We were burning too much on acquisition and not scaling fast enough—until Tom stepped in. In six months, our CAC dropped 30% and our GTM strategy finally clicked. But the real value? Tom didn’t just fix sales—he challenged how we worked, pushed us on accountability, and helped shape a culture of execution. He saw opportunities across the business we didn’t even know we were missing."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-500 italic">
                  "Our ops were messy and expensive. Tom helped us rebuild the playbook, improve on-time delivery, and cut costs enough to expand a national retail partnership. What stood out was how quickly he called out our blind spots and built trust on the ground. He didn’t stay in his lane—he raised the bar across the board and held us to it."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-500 italic">
                  "I went into the offer conversation feeling uncertain. With Tom’s help, I walked out with $90k more and a clear path on equity. But more than the comp bump, he helped me show up differently—more strategic, more clear. He asked hard questions early, helped me think bigger, and even challenged how I defined my next chapter. That kind of coaching sticks."
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
              <Button className="w-full bg-white text-slate-900 hover:bg-gray-200 h-12 transition-transform duration-200 hover:-translate-y-0.5">
                Start the Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
