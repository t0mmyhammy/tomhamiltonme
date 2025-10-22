import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, DollarSign, Users, Building2 } from "lucide-react"

export const metadata = {
  title: "Buy | Open Tee",
  description:
    "Open Tee acquires Michigan-based service businesses with strong fundamentals where continuity, culture, and community matter most.",
}

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-opentee-off-white">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-opentee-heading mb-6 font-gilroy">
              Open Tee acquires Michigan-based service businesses
            </h1>
            <p className="text-lg md:text-xl text-opentee-body mb-8 leading-relaxed">
              We focus on strong fundamentals where continuity, culture, and community matter most.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-opentee-heading text-center mb-12 font-gilroy">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 text-opentee-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-opentee-heading mb-4">Local Focus</h3>
                <p className="text-opentee-body">
                  Born and raised in Metro Detroit, we understand our community's rhythm and values. We chose to come back as adults to build businesses that earn lasting trust.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Building2 className="h-12 w-12 text-opentee-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-opentee-heading mb-4">Operator Mindset</h3>
                <p className="text-opentee-body">
                  We build for the long term through clear systems, hands-on leadership, and lessons from consulting, corporate, and startup experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <DollarSign className="h-12 w-12 text-opentee-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-opentee-heading mb-4">Flexible Financing</h3>
                <p className="text-opentee-body">
                  We create fair, creative deal terms that align incentives and preserve legacy. We're flexible on financing, using options like SBA or seller financing when they make sense.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Bring */}
      <section className="w-full py-12 md:py-16 bg-opentee-off-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-opentee-heading mb-6">What We Bring</h2>
              <ul className="space-y-4 text-opentee-body">
                <li className="flex items-start gap-3">
                  <span className="text-opentee-accent font-bold">•</span>
                  <span>Smooth transitions for owners and teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-opentee-accent font-bold">•</span>
                  <span>Operational lift and margin discipline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-opentee-accent font-bold">•</span>
                  <span>Long-term local ownership</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-opentee-heading mb-6">What We Look For</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-opentee-heading mb-3">Financials</h4>
                    <p className="text-sm text-opentee-body">Seller earnings (EBITDA) of $1-5 million with profit margins greater than 10%</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-opentee-heading mb-3">Track Record</h4>
                    <p className="text-sm text-opentee-body">Cash flows and revenue growth that is consistent year over year</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-opentee-heading mb-3">Service Businesses</h4>
                    <p className="text-sm text-opentee-body">Mission critical or discretionary services that have competitive advantages and clear value propositions</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-opentee-heading mb-3">Outstanding People</h4>
                    <p className="text-sm text-opentee-body">Motivated sellers, experienced team, loyal customer base</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300 md:col-span-2">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-opentee-heading mb-3">Geography</h4>
                    <p className="text-sm text-opentee-body">Southeast Michigan with emphasis on Metro Detroit</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 bg-opentee-black text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore a Sale?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for great Michigan businesses to acquire and grow.
          </p>
          <Link href="/contact">
            <Button className="bg-opentee-accent hover:bg-blue-600 px-8 py-4 text-lg font-medium">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
