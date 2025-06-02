import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import caseStudies from "@/lib/caseStudies"

export const metadata = {
  title: "Services",
  description: "Overview of how Tom Hamilton helps startups and executives."
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Services</h1>

      <div className="prose prose-slate max-w-none mb-10">
        <p>Strategic advisory and hands-on support to help you build momentum.</p>
      </div>

      <div className="space-y-10" id="case-studies">
        {caseStudies.map((caseStudy, index) => (
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

      <div className="mt-12 flex justify-center">
        <Link href="/contact">
          <Button className="bg-slate-900 hover:bg-slate-800">Start the Conversation</Button>
        </Link>
      </div>
    </div>
  )
}
