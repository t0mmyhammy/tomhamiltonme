"use client";

import React from "react";
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function ServicesContent() {
  const [activeSection, setActiveSection] = useState("approach")
  const sections = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    Object.values(sections.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Sub-Navigation */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex justify-end space-x-8 py-4">
            <a
              href="#approach"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === "approach" ? "text-primary underline decoration-2 underline-offset-4" : "text-muted-foreground"
              }`}
            >
              Approach
            </a>
            <a
              href="#who-i-work-with"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === "who-i-work-with" ? "text-primary underline decoration-2 underline-offset-4" : "text-muted-foreground"
              }`}
            >
              Who I Work With
            </a>
            <a
              href="#engagement-styles"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === "engagement-styles" ? "text-primary underline decoration-2 underline-offset-4" : "text-muted-foreground"
              }`}
            >
              Engagement Styles
            </a>
            <a
              href="#contract-formats"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === "contract-formats" ? "text-primary underline decoration-2 underline-offset-4" : "text-muted-foreground"
              }`}
            >
              Contract Formats
            </a>
            <a
              href="#exemplary-work"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === "exemplary-work" ? "text-primary underline decoration-2 underline-offset-4" : "text-muted-foreground"
              }`}
            >
              Exemplary Work
            </a>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Approach Section */}
        <section
          id="approach"
          ref={(el: HTMLDivElement | null) => { sections.current["approach"] = el; }}
          className="mb-24 scroll-mt-32"
        >
          <h2 className="text-4xl font-bold mb-8">My Approach</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I help technology leaders and organizations navigate complex challenges and drive meaningful change. My approach combines strategic thinking with practical execution, focusing on sustainable solutions that deliver real results.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're looking to transform your organization, optimize your operations, or develop your leadership capabilities, I provide tailored guidance and support to help you achieve your goals.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Strategic Advisory</h3>
                  <p className="text-muted-foreground">
                    Expert guidance on technology strategy, digital transformation, and organizational change.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Leadership Development</h3>
                  <p className="text-muted-foreground">
                    Personalized coaching and mentoring for technology leaders at all levels.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Operational Excellence</h3>
                  <p className="text-muted-foreground">
                    Practical solutions for improving processes, efficiency, and performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who I Work With Section */}
        <section
          id="who-i-work-with"
          ref={(el: HTMLDivElement | null) => { sections.current["who-i-work-with"] = el; }}
          className="mb-24 scroll-mt-32"
        >
          <h2 className="text-4xl font-bold mb-8">Who I Work With</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Technology Leaders</h3>
                  <p className="text-muted-foreground">
                    CTOs, CIOs, and technology executives looking to drive innovation and transformation.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Organizations</h3>
                  <p className="text-muted-foreground">
                    Companies and institutions seeking to optimize their technology operations and strategy.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Startups</h3>
                  <p className="text-muted-foreground">
                    Early-stage companies looking to build strong technology foundations and scale effectively.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Engagement Styles Section */}
        <section
          id="engagement-styles"
          ref={(el: HTMLDivElement | null) => { sections.current["engagement-styles"] = el; }}
          className="mb-24 scroll-mt-32"
        >
          <h2 className="text-4xl font-bold mb-8">Engagement Styles</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Strategic Advisory</h3>
                <p className="text-muted-foreground mb-4">
                  Long-term partnerships focused on strategic guidance and organizational development.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Regular strategy sessions</li>
                  <li>• Ongoing mentorship</li>
                  <li>• Organizational transformation</li>
                  <li>• Leadership development</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Project-Based</h3>
                <p className="text-muted-foreground mb-4">
                  Focused engagements for specific challenges or initiatives.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Technology strategy development</li>
                  <li>• Process optimization</li>
                  <li>• Digital transformation</li>
                  <li>• Performance improvement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contract Formats Section */}
        <section
          id="contract-formats"
          ref={(el: HTMLDivElement | null) => { sections.current["contract-formats"] = el; }}
          className="mb-24 scroll-mt-32"
        >
          <h2 className="text-4xl font-bold mb-8">Contract Formats</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Retainer</h3>
                <p className="text-muted-foreground">
                  Monthly agreements for ongoing support and guidance, with flexible hours and regular check-ins.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Project-Based</h3>
                <p className="text-muted-foreground">
                  Fixed-scope engagements with clear deliverables and timelines.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Custom</h3>
                <p className="text-muted-foreground">
                  Tailored arrangements to meet your specific needs and requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Exemplary Work Section */}
        <section
          id="exemplary-work"
          ref={(el: HTMLDivElement | null) => { sections.current["exemplary-work"] = el; }}
          className="mb-24 scroll-mt-32"
        >
          <h2 className="text-4xl font-bold mb-8">Exemplary Work</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="case-study-1">
              <AccordionTrigger className="text-xl">
                Digital Transformation for Financial Services
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Led a comprehensive digital transformation initiative for a leading financial services company, resulting in:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>40% reduction in operational costs</li>
                    <li>60% improvement in customer satisfaction</li>
                    <li>Successful migration to cloud infrastructure</li>
                  </ul>
                  <div className="mt-4">
                    <p className="font-semibold">Client Testimonial:</p>
                    <p className="text-muted-foreground italic">
                      "Tom's strategic guidance was instrumental in our digital transformation journey. His expertise and leadership helped us achieve results beyond our expectations."
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      - <span className="font-semibold">CTO, Financial Services Company</span>
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="case-study-2">
              <AccordionTrigger className="text-xl">
                Technology Strategy for Healthcare Startup
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Developed and implemented a technology strategy for a healthcare startup, leading to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Successful Series A funding</li>
                    <li>50% faster time to market</li>
                    <li>Scalable infrastructure for growth</li>
                  </ul>
                  <div className="mt-4">
                    <p className="font-semibold">Client Testimonial:</p>
                    <p className="text-muted-foreground italic">
                      "Tom's strategic vision and technical expertise were crucial in helping us build a solid foundation for growth. His guidance was invaluable."
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      - <span className="font-semibold">CEO, Healthcare Startup</span>
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="case-study-3">
              <AccordionTrigger className="text-xl">
                Leadership Development Program
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Designed and delivered a leadership development program for a technology company, resulting in:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>30% increase in team productivity</li>
                    <li>Improved employee retention</li>
                    <li>Enhanced leadership capabilities</li>
                  </ul>
                  <div className="mt-4">
                    <p className="font-semibold">Client Testimonial:</p>
                    <p className="text-muted-foreground italic">
                      "Tom's leadership development program transformed our management team. His insights and coaching have had a lasting impact on our organization."
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      - <span className="font-semibold">VP of Engineering, Technology Company</span>
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve your goals. Schedule a no-pressure diagnostic call to explore your needs and see if we're a good fit.
          </p>
          <Button asChild size="lg">
            <a href="/contact">Schedule a Call</a>
          </Button>
        </section>
      </main>
    </div>
  )
} 