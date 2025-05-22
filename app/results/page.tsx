import { Card, CardContent } from "@/components/ui/card"

export default function ResultsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Results</h1>

      <div className="prose prose-slate max-w-none mb-10">
        <p>The outcomes that matter—measurable impact, not just activity.</p>
      </div>

      <div className="space-y-10">
        {[
          {
            title: "PropTech GTM Optimization",
            situation:
              "Series A proptech startup with solid product-market fit but inefficient customer acquisition.",
            challenge:
              "High CAC, long sales cycles, and unclear value prop messaging slowed growth and strained the sales team.",
            approach: [
              "Audited full GTM funnel across marketing, SDRs, and AE handoff",
              "Rebuilt core messaging around key buyer personas",
              "Introduced lead scoring and sales enablement materials",
              "Restructured pricing tiers to align with buyer decision drivers",
            ],
            results: [
              "30% reduction in CAC within 6 months",
              "40% increase in close rate",
              "Doubled qualified pipeline volume",
            ],
          },
          {
            title: "Last-Mile Ops Redesign",
            situation:
              "Growing last-mile delivery startup with expanding demand but inconsistent operational performance.",
            challenge:
              "Low on-time delivery rate, high cost-per-order, and strained team capacity heading into a major retail partnership.",
            approach: [
              "Analyzed shift scheduling, routing patterns, and store-level staging",
              "Simplified zone coverage and adjusted incentive structure",
              "Implemented real-time dashboards for cost and fulfillment metrics",
            ],
            results: [
              "20% increase in on-time delivery",
              "Significant reduction in cost-per-order",
              "Enabled national retailer partnership rollout",
            ],
          },
          {
            title: "Fintech Product Strategy Alignment",
            situation:
              "Fast-growing fintech startup with strong engineering talent but fragmented product direction across ops, sales, and leadership.",
            challenge:
              "Multiple teams pulling roadmap in different directions—causing unclear priorities, slow delivery, and missed customer outcomes.",
            approach: [
              "Led alignment sessions across product, ops, and commercial leads",
              "Introduced a prioritization model tying roadmap to business metrics",
              "Reorganized product planning cadence to include feedback loops and measurable outcomes",
            ],
            results: [
              "Improved roadmap clarity and team focus within 6 weeks",
              "Reduced internal churn on feature direction",
              "Accelerated delivery on core features tied to revenue and retention",
            ],
          },
          {
            title: "Seed+ Fundraise & Org Planning",
            situation:
              "Pre-Seed SaaS founder preparing for a Seed+ raise amidst internal misalignment and unclear role structure.",
            challenge:
              "Unclear org plan, diluted narrative, and weak investor-facing materials slowed fundraising momentum.",
            approach: [
              "Rebuilt hiring plan and org chart aligned to growth plan",
              "Crafted crisp, metrics-backed pitch materials",
              "Coached founder through mock investor Q&A and objection handling",
            ],
            results: [
              "Completed raise on target timeline",
              "Increased investor conversion during second meetings",
              "Greater founder confidence in internal and external leadership",
            ],
          },
          {
            title: "Startup Executive Transition & Negotiation",
            situation:
              "Startup VP exploring a new leadership role with increased responsibility but unclear compensation structure and expectations.",
            challenge:
              "Offer lacked transparency around equity, performance metrics, and long-term growth trajectory—creating risk for the candidate.",
            approach: [
              "Benchmarked comp and equity norms across similar-stage companies",
              "Developed a negotiation narrative and email strategy tailored to the hiring CEO and board",
              "Clarified key priorities (scope, leveling, upside) and coached the executive through live conversations",
            ],
            results: [
              "$90K increase in total compensation",
              "Gained structured equity with milestone-based vesting",
              "Walked into the role with confidence, clarity, and board alignment",
            ],
          },
        ].map((caseStudy, index) => (
          <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="h-2 bg-slate-900"></div>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">{caseStudy.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">Situation:</h3>
                    <p>{caseStudy.situation}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Challenge:</h3>
                    <p>{caseStudy.challenge}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">Approach:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {caseStudy.approach.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Results:</h3>
                    <ul className="list-disc pl-5 space-y-1 font-medium text-slate-900">
                      {caseStudy.results.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
