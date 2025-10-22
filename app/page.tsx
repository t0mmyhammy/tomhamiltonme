import Link from "next/link"
import { ArrowRight, Building2, Wrench, Lightbulb, Heart, MapPin, Users } from "lucide-react"

export const metadata = {
  title: "Open Tee",
  description:
    "Building enduring Michigan businesses. Open Tee is an operator-led firm focused on long-term ownership and growth across Michigan's service economy.",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-opentee-off-white">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-opentee-heading mb-6 leading-tight font-gilroy">
                    Building enduring Michigan businesses
                  </h1>
                  <p className="text-lg md:text-xl text-opentee-body mb-8 max-w-3xl mx-auto leading-relaxed">
                    Open Tee is focused on long-term ownership and growth across Michigan's service economy.
                  </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button className="bg-opentee-black text-white hover:bg-opentee-slate px-8 py-4 text-lg font-medium">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-opentee-heading text-center mb-6 font-gilroy">Approach</h2>
          <p className="text-lg text-opentee-body text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Open Tee seeks to acquire, operate, and grow services businesses generating $1-5+ MM in annual discretionary earnings. We partner with business owners and operators to provide them with the capital and expertise to successfully transition their business and legacy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Buy Pillar */}
            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center flex flex-col h-full">
                <Building2 className="h-12 w-12 text-opentee-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-opentee-heading mb-4 font-gilroy">Buy</h3>
                <p className="text-opentee-body mb-6 leading-relaxed flex-grow">
                  We acquire Michigan service businesses where continuity, culture, and community matter most.
                </p>
                <Link href="/buy">
                  <Button variant="outline" className="w-full border-opentee-black text-opentee-black hover:bg-opentee-black hover:text-white">
                    What We Look For
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Build Pillar */}
            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center flex flex-col h-full">
                <Wrench className="h-12 w-12 text-opentee-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-opentee-heading mb-4 font-gilroy">Build</h3>
                <p className="text-opentee-body mb-6 leading-relaxed flex-grow">
                  We believe momentum starts with clarity and builds through speed, focus, and resilience.
                </p>
                <Link href="/build">
                  <Button variant="outline" className="w-full border-opentee-black text-opentee-black hover:bg-opentee-black hover:text-white">
                    How We Work
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Advise Pillar */}
            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center flex flex-col h-full">
                <Lightbulb className="h-12 w-12 text-opentee-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-opentee-heading mb-4 font-gilroy">Advise</h3>
                <p className="text-opentee-body mb-6 leading-relaxed flex-grow">
                  We help founders and owners move faster with clarity, confidence, and care for people.
                </p>
                <Link href="/advise">
                  <Button variant="outline" className="w-full border-opentee-black text-opentee-black hover:bg-opentee-black hover:text-white">
                    How We Help
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Operating Principles Section */}
      <section className="w-full py-16 md:py-24 bg-opentee-off-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-opentee-heading text-center mb-12 font-gilroy">Operating Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-opentee-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-opentee-heading mb-4 font-gilroy">Long-term Mindset</h3>
                <p className="text-opentee-body">
                  We invest time and capital with patience, building for the future.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 text-opentee-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-opentee-heading mb-4 font-gilroy">Local First</h3>
                <p className="text-opentee-body">
                  Michigan is home base, but lessons scale beyond it.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-opentee-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-opentee-heading mb-4 font-gilroy">People Matter</h3>
                <p className="text-opentee-body">
                  Employees, customers, and sellers come first in everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-opentee-off-white hover:border-opentee-accent transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Building2 className="h-12 w-12 text-opentee-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold text-opentee-heading mb-4 font-gilroy">Simple Businesses</h3>
                <p className="text-opentee-body">
                  We favor clarity over complexity, doing simple things well.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Our Founder Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-opentee-heading mb-6 font-gilroy">About Our Founder</h2>
              <p className="text-lg text-opentee-body mb-6 leading-relaxed">
                I'm Tom Hamilton. Husband, dad, and Michigan alum. I build and run companies through Open Tee, focused on community, craftsmanship, and lasting value.
              </p>
              <p className="text-opentee-body mb-6 leading-relaxed">
                I grew up in Metro Detroit, the son of a public school teacher and a longtime Hewlett-Packard engineer. From hockey rinks across the state to summers spent caddying, I was shaped by Michigan's work ethic, grit, and sense of community. After more than a decade away, I returned home with my wife and daughter to build a future rooted in the place that raised me.
              </p>
              <p className="text-opentee-body mb-6 leading-relaxed">
                Today, my goal is to give business owners a transition they can be proud of, pairing strong financial outcomes with continuity for their employees and customers. I bring both strategic and hands-on experience, with engineering degrees from the University of Michigan and an MBA from Northwestern's Kellogg School of Management. My career has spanned consulting at McKinsey, leadership roles at high-growth startups, and, most recently, advising local companies as I search for a business to own and grow.
              </p>
              <p className="text-opentee-body mb-6 leading-relaxed">
                Outside of work, I'm usually chasing my daughter around the park, helping friends with home projects, or watching Michigan football. Through business ownership, I'm driven to create opportunity and strengthen the community that gave me my start.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full h-[40rem] overflow-hidden rounded-lg">
                <img
                  src="/images/FamilyHHWalking2.jpg"
                  alt="Tom Hamilton with family"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}
