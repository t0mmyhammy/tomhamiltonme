import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function WhatIDoPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">What I Do</h1>

      <div className="prose prose-slate max-w-none">
        <h2>What Makes This Different</h2>
        <p>
          Most consultants hand you a framework and walk away. I give you frameworks <strong>plus</strong> the operational
          support to bring them to life.
        </p>
        <p>Every engagement is built to create <strong>momentum</strong>, not just PowerPoints.</p>
        <blockquote>
          <p>
            Strategy is choice. It’s what you say <em>no</em> to.<br />If your team can’t explain the plan in plain English,
            it’s not a strategy—it’s just expensive planning.
          </p>
        </blockquote>
        <hr />

        <h2>Who I Work With</h2>
        <ul>
          <li>Founders scaling from product-market fit to growth</li>
          <li>Executives navigating role transitions and negotiations</li>
          <li>Teams stuck between strategy and execution</li>
          <li>Companies preparing for fundraising or major partnerships</li>
          <li>Leaders who want an advisor, not just a consultant</li>
          <li>Individuals seeking 1:1 coaching for career transitions</li>
        </ul>
        <hr />

        <h2>Engagement Styles</h2>
        <ul>
          <li>
            <strong>Strategic Sprints</strong>
            <br />30–60 day focused projects to solve a critical challenge or opportunity
          </li>
          <li>
            <strong>Ongoing Advisory</strong>
            <br />3–6 month strategic partnership, usually via retainer
          </li>
          <li>
            <strong>Executive Coaching</strong>
            <br />Support for career transitions, negotiations, or leveling up in-role
          </li>
          <li>
            <strong>Operational Audits</strong>
            <br />Deep dives to uncover inefficiencies and unlock scale
          </li>
          <li>
            <strong>Outcome-Based Projects</strong>
            <br />Aligning work directly to results—whether it's EBITDA gains or contract improvements
          </li>
        </ul>
        <hr />

        <h2>Typical Contract Formats</h2>
        <p>I offer flexible ways to collaborate depending on your needs:</p>

        <h3>
          1. <strong>Retainer Engagements</strong>
        </h3>
        <p>For ongoing support with flexibility built in</p>
        <ul>
          <li>2–3 month commitments</li>
          <li>Includes set hours or days per month</li>
          <li>Ideal for evolving priorities or multi-threaded support</li>
        </ul>

        <h3>
          2. <strong>Project-Based Engagements</strong>
        </h3>
        <p>For defined goals and measurable outcomes</p>
        <ul>
          <li>Clear scope and timeline</li>
          <li>Great for launching, scaling, or diagnosing key initiatives</li>
          <li>Pricing reflects value and complexity</li>
        </ul>

        <h3>
          3. <strong>Hourly Engagements (With Scope)</strong>
        </h3>
        <p>For targeted, short-term needs</p>
        <ul>
          <li>Billed hourly with a clearly defined scope</li>
          <li>Ideal for quick-turn deliverables or advisory sessions</li>
          <li>Fast, transparent, and frictionless</li>
        </ul>

        <h3>
          4. <strong>Custom Engagements</strong>
        </h3>
        <p>Let’s get creative</p>
        <ul>
          <li>Open to sprints, equity models, hybrid setups, or advisory boards</li>
          <li>If you have something different in mind, I’m all ears</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/contact">
          <Button className="bg-slate-900 hover:bg-slate-800">
            Start the Conversation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
