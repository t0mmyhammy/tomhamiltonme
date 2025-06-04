import {
  Target,
  Cog,
  Compass,
  Network,
  Banknote,
  Handshake,
  ChevronDown,
  Users,
  Rocket,
  Briefcase,
  FileText,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "What I Do | Tom Hamilton",
  description:
    "Strategic advisory services for founders and executives. From go-to-market optimization to career transitions, get hands-on support that drives real results.",
}

const services = [
  {
    icon: Target,
    title: "Go-to-Market Optimization",
    shortDescription: "Go-to-market isn't about doing more—it's about doing what matters most.",
    fullDescription: "I help teams uncover bottlenecks and unlock leverage in their growth motion—from positioning to sales process to team focus—so you can grow efficiently without burning out your runway.",
    testimonial: {
      quote: "We were burning too much on acquisition and not scaling fast enough—until we got the right strategy in place. In six months, our CAC dropped 30% and our GTM strategy finally clicked.",
      author: "CEO, B2B SaaS Company",
      challenge: "A B2B SaaS company was struggling with high customer acquisition costs and inconsistent sales performance.",
      solution: [
        "Conducted a comprehensive GTM audit",
        "Redesigned the sales process and qualification framework",
        "Implemented new metrics and accountability systems",
        "Created a scalable playbook for the sales team"
      ],
      results: [
        "30% reduction in Customer Acquisition Cost",
        "50% increase in sales team productivity",
        "3x improvement in sales cycle consistency"
      ]
    }
  },
  {
    icon: Cog,
    title: "Operational Strategy",
    shortDescription: "Most teams don't fail from lack of ambition—they fail from friction.",
    fullDescription: "Whether it's org design, process clutter, or decision-making gaps, I help streamline how your company runs so you can scale without chaos.",
    testimonial: {
      quote: "Our ops were messy and expensive. With the right strategy, we rebuilt our playbook, improved on-time delivery, and cut costs enough to expand our national retail partnership.",
      author: "COO, Retail Technology Company",
      challenge: "A retail technology company was facing operational bottlenecks and rising costs that threatened their expansion plans.",
      solution: [
        "Mapped and optimized core operational processes",
        "Implemented new inventory management systems",
        "Restructured the operations team for better efficiency",
        "Created clear decision-making frameworks"
      ],
      results: [
        "40% reduction in operational costs",
        "95% on-time delivery rate",
        "Successful expansion to 50+ retail locations"
      ]
    }
  },
  {
    icon: Compass,
    title: "Product Strategy",
    shortDescription: "Building the right product means more than shipping fast.",
    fullDescription: "I help align product decisions with customer insight, business priorities, and internal capacity—so your roadmap reflects what actually moves the business forward.",
    testimonial: {
      quote: "We transformed our product strategy from feature-focused to outcome-driven. The results speak for themselves.",
      author: "CPO, Product-Led Growth Company",
      challenge: "A product-led growth company was building features without clear alignment to business goals or user needs.",
      solution: [
        "Conducted user research and market analysis",
        "Created a new product prioritization framework",
        "Implemented outcome-based metrics",
        "Restructured the product development process"
      ],
      results: [
        "60% increase in user engagement",
        "40% reduction in development waste",
        "2x faster time to market for key features"
      ]
    }
  },
  {
    icon: Network,
    title: "Organizational Planning",
    shortDescription: "When growth hits, structure starts to matter.",
    fullDescription: "I work with leadership teams to clarify roles, level responsibilities, and design orgs that scale—without adding unnecessary layers or creating confusion.",
    testimonial: {
      quote: "The organizational clarity we achieved was transformative. We finally had the right structure to support our growth.",
      author: "CEO, Scaling Technology Company",
      challenge: "A scaling technology company was struggling with role confusion and inefficient decision-making as they grew.",
      solution: [
        "Conducted organizational assessment",
        "Designed new reporting structures",
        "Created clear role definitions and responsibilities",
        "Implemented new decision-making frameworks"
      ],
      results: [
        "50% reduction in decision-making time",
        "90% improvement in role clarity",
        "Successful transition to a matrix organization"
      ]
    }
  },
  {
    icon: Banknote,
    title: "Fundraising Readiness",
    shortDescription: "Fundraising is part pitch, part posture.",
    fullDescription: "I help founders sharpen their story, pressure-test their metrics, and prep for what investors will actually care about—internally and externally.",
    testimonial: {
      quote: "The guidance through our Series A was invaluable. We closed our round in record time with better terms than expected.",
      author: "Founder, FinTech Startup",
      challenge: "A FinTech startup needed to raise their Series A but lacked a compelling narrative and proper metrics.",
      solution: [
        "Developed a compelling investment narrative",
        "Created key metrics dashboard",
        "Conducted mock investor meetings",
        "Built a comprehensive data room"
      ],
      results: [
        "Closed Series A in 6 weeks",
        "20% better terms than initial offers",
        "Successfully onboarded strategic investors"
      ]
    }
  },
  {
    icon: Handshake,
    title: "Individual Career Transitions & Negotiations",
    shortDescription: "Career-defining moves deserve clarity, not guesswork.",
    fullDescription: "Whether you're stepping into a new role, negotiating comp, or weighing a shift, I help you move forward with structure, confidence, and smart positioning.",
    testimonial: {
      quote: "I went into the offer conversation feeling uncertain. With the right strategy, I walked out with $90k more and a clear path on equity.",
      author: "Tech Executive",
      challenge: "A tech executive was considering a major career move but lacked confidence in their negotiation strategy.",
      solution: [
        "Conducted market research and compensation analysis",
        "Developed negotiation strategy and talking points",
        "Role-played key conversations",
        "Created a comprehensive transition plan"
      ],
      results: [
        "$90k increase in total compensation",
        "Improved equity package",
        "Clear career growth path"
      ]
    }
  }
]

const clientTypes = [
  {
    icon: Rocket,
    title: "Founders scaling beyond PMF",
    description: "Ready to move from product-market fit to sustainable growth"
  },
  {
    icon: Briefcase,
    title: "Executives in transition",
    description: "Navigating role changes or compensation negotiations"
  },
  {
    icon: Users,
    title: "Teams stuck in execution",
    description: "Between strategy and implementation"
  },
  {
    icon: Banknote,
    title: "Companies prepping for fundraising",
    description: "Getting ready for major partnerships or investment"
  },
  {
    icon: Sparkles,
    title: "Leaders who want an advisor",
    description: "Not just another vendor or consultant"
  },
  {
    icon: Handshake,
    title: "Individuals at career crossroads",
    description: "Making strategic moves with confidence"
  }
]

const engagementStyles = [
  {
    style: "Strategic Sprints",
    bestFor: "Critical inflection points",
    duration: "30–60 days"
  },
  {
    style: "Ongoing Advisory",
    bestFor: "Steady partnership, flexibility",
    duration: "3–6 months"
  },
  {
    style: "Executive Coaching",
    bestFor: "Role transitions, leveling up",
    duration: "Rolling"
  },
  {
    style: "Operational Audits",
    bestFor: "Identifying what's broken",
    duration: "2–4 weeks"
  },
  {
    style: "Outcome-Based Projects",
    bestFor: "ROI-driven initiatives",
    duration: "Custom"
  }
]

const contractFormats = [
  {
    title: "Retainer Engagements",
    description: "Flexible monthly support for evolving priorities.",
    details: [
      "2–3 month commitments",
      "Set hours or days per month",
      "Ideal for evolving priorities"
    ]
  },
  {
    title: "Project-Based Engagements",
    description: "Clear scope, clear timeline, focused on results.",
    details: [
      "Defined goals and timeline",
      "Great for key initiatives",
      "Value-based pricing"
    ]
  },
  {
    title: "Hourly Engagements (Scoped)",
    description: "Quick, focused, and low-friction.",
    details: [
      "Clear scope and timeline",
      "Fast turnaround",
      "Transparent billing"
    ]
  },
  {
    title: "Custom Setups",
    description: "Open to equity, hybrid models, or boards.",
    details: [
      "Flexible arrangements",
      "Equity or hybrid models",
      "Advisory board roles"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-7xl pb-12 md:pb-24 pt-0">
      {/* Sticky Navigation */}
      <nav className="sticky top-16 z-40 bg-white border-b border-slate-200 shadow-sm mb-12 p-0">
        <div className="flex justify-end container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex gap-8 py-3 overflow-x-auto">
            <a href="#approach" className="text-sm font-medium hover:text-slate-700 whitespace-nowrap">Approach</a>
            <a href="#clients" className="text-sm font-medium hover:text-slate-700 whitespace-nowrap">Who I Work With</a>
            <a href="#engagements" className="text-sm font-medium hover:text-slate-700 whitespace-nowrap">Engagement Styles</a>
            <a href="#pricing" className="text-sm font-medium hover:text-slate-700 whitespace-nowrap">Contract Formats</a>
            <a href="#work" className="text-sm font-medium hover:text-slate-700 whitespace-nowrap">Exemplary Work</a>
          </div>
        </div>
      </nav>

      {/* Section 1: What Makes This Different */}
      <section id="approach" className="max-w-4xl mx-auto mb-20 mt-12 scroll-mt-32">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8 text-center">
          Not Just Strategy. Momentum.
        </h1>

        <div className="prose prose-slate max-w-none text-center mb-12">
          <p className="text-xl">
            Most consultants give you a plan and step back. I stay in it with you—translating strategy into real progress. Every engagement is designed to create momentum, not just recommendations.
          </p>
        </div>

        <div className="bg-slate-50 p-8 rounded-lg text-center">
          <blockquote className="text-2xl font-medium italic">
            "Strategy is choice. If your team can't explain it in plain English, it's not a strategy—it's just expensive planning."
          </blockquote>
        </div>
      </section>

      {/* Section 2: Who I Work With */}
      <section id="clients" className="max-w-4xl mx-auto mb-20 scroll-mt-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
          Who I Work With
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <client.icon className="h-8 w-8 mb-4 text-slate-900 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">{client.title}</h3>
                <p className="text-gray-600">{client.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 3: How I Work */}
      <section id="engagements" className="max-w-4xl mx-auto mb-20 scroll-mt-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
          Ways to Work Together
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-6">Style</th>
                <th className="text-left py-4 px-6">Best For</th>
                <th className="text-left py-4 px-6">Duration</th>
              </tr>
            </thead>
            <tbody>
              {engagementStyles.map((style, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 px-6 font-medium">{style.style}</td>
                  <td className="py-4 px-6">{style.bestFor}</td>
                  <td className="py-4 px-6">{style.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Link href="/contact">
            <Button className="bg-slate-900 hover:bg-slate-800">
              Let's find the right format for your goals
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Section 4: Contract Formats */}
      <section id="pricing" className="max-w-4xl mx-auto mb-20 scroll-mt-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
          Contract Formats
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contractFormats.map((format, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{format.title}</h3>
                <p className="text-gray-600 mb-4">{format.description}</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  {format.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact">
            <Button className="bg-slate-900 hover:bg-slate-800">
              Curious about pricing? Let's talk options
            </Button>
          </Link>
        </div>
      </section>

      {/* Section 5: Exemplary Work */}
      <section id="work" className="max-w-4xl mx-auto scroll-mt-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
          Exemplary Work
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {services.map((service, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <service.icon className="h-6 w-6" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm text-gray-500">{service.shortDescription}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-10 space-y-6">
                  <p className="text-gray-600">{service.fullDescription}</p>
                  
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <blockquote className="border-l-4 border-slate-300 pl-4 mb-4">
                      <p className="text-lg italic">{service.testimonial.quote}</p>
                      <footer className="mt-2 font-medium">— {service.testimonial.author}</footer>
                    </blockquote>

                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">The Challenge</h4>
                      <p className="text-gray-600 mb-4">{service.testimonial.challenge}</p>

                      <h4 className="font-semibold mb-2">The Solution</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                        {service.testimonial.solution.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>

                      <h4 className="font-semibold mb-2">The Results</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-600">
                        {service.testimonial.results.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <Link href="mailto:hi@tomhamilton.me">
            <Button className="bg-slate-900 hover:bg-slate-800">
              Let's get started
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
