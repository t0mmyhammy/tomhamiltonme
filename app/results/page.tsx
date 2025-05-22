import { Card, CardContent } from "@/components/ui/card"

export default function ResultsPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Results</h1>

      <p className="text-xl text-gray-600 mb-10">The outcomes that matter—measurable impact, not just activity.</p>

      <div className="space-y-10">
        {[
          {
            title: "PropTech GTM Optimization",
            situation: "Series A proptech startup with solid product-market fit but inefficient customer acquisition",
            challenge: "High CAC, long sales cycles, unclear value proposition messaging",
            approach: [
              "Analyzed entire sales funnel and customer journey",
              "Redesigned messaging and qualification process",
              "Implemented new lead scoring and sales enablement tools",
              "Restructured pricing strategy for faster decision-making",
            ],
            results: "30% reduction in CAC within 6 months, 40% increase in close rate",
          },
          {
            title: "Last-Mile Delivery Operations",
            situation: "Growing delivery company preparing for major retail partnership",
            challenge: "Inconsistent delivery performance across markets, unclear cost structure",
            approach: [
              "Right-sized operations across two key cities",
              "Implemented data-driven routing and capacity planning",
              "Restructured driver incentives and performance metrics",
              "Built scalable operational playbook",
            ],
            results: "20% improvement in on-time delivery, reduced cost-per-order, partnership secured",
          },
          {
            title: "Executive Compensation Negotiation",
            situation: "High-performing startup executive preparing for promotion discussion",
            challenge: "Unclear market compensation, undefined role scope, equity progression uncertainty",
            approach: [
              "Conducted market analysis and compensation benchmarking",
              "Developed clear role definition and success metrics",
              "Structured negotiation strategy with multiple scenarios",
              "Prepared talking points and supporting documentation",
            ],
            results: "$90k annual compensation increase, clearer equity path, expanded role scope",
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
                    <p className="font-medium text-slate-900">{caseStudy.results}</p>
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
