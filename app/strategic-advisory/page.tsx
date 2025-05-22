import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function StrategicAdvisoryPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        Strategic Advisory
      </h1>

      <div className="prose prose-slate max-w-none">
        <p className="lead">
          For leaders who want clarity that drives action—and strategy that
          doesn’t stall.
        </p>

        <h2>What Makes This Different</h2>
        <p>
          Most consultants drop a framework and disappear. I stay in it with
          you—helping you translate insight into execution, and execution into
          outcomes.
        </p>
        <p>
          My work is designed to build momentum, not noise. That means fewer
          “big reveals” and more real-time progress. I pair strategic clarity
          with hands-on support—so your team can move faster, not just feel
          smarter.
        </p>
        <p>
          I also carve out time every week to stay sharp on what’s next—whether
          that’s AI-powered workflows, automation tools, or new ways to reduce
          friction. You’ll always get modern thinking and systems that scale.
        </p>
        <blockquote>
          <p>
            Strategy is about focus.
            <br />
            If your team can’t explain the plan in plain English—it’s not a
            strategy. It’s a delay.
          </p>
        </blockquote>

        <h2>Who I Work With</h2>
        <ul>
          <li>Founders moving from product-market fit to scalable growth</li>
          <li>
            Executives navigating career transitions or high-stakes negotiations
          </li>
          <li>Teams stuck between what to do and how to get it done</li>
          <li>
            Companies preparing for fundraising, partnerships, or expansion
          </li>
          <li>
            Leaders who want a trusted advisor—not just another consultant
          </li>
          <li>
            Individuals looking for clear, grounded 1:1 coaching during
            inflection points
          </li>
        </ul>

        <h2>How I Help</h2>
        <ul>
          <li>
            <strong>🧭 Go-to-Market Optimization</strong>
            <br />
            Go-to-market isn’t about doing more—it’s about doing what matters
            most. I help teams identify bottlenecks and leverage points that
            accelerate growth without burning out the team.
          </li>
          <li>
            <strong>⚙️ Operational Strategy</strong>
            <br />
            Most teams don’t fail from lack of effort—they fail from friction.
            Whether it’s org design, unclear ownership, or process debt—I help
            you build systems that scale with intention.
          </li>
          <li>
            <strong>🤝 Executive Transitions &amp; Negotiations</strong>
            <br />
            Career-defining moves are high-stakes—and often high-noise. I help
            leaders approach transitions with structure and clarity—from
            compensation to role fit to long-term growth.
          </li>
          <li>
            <strong>🧪 Product Strategy</strong>
            <br />
            Building product is easy. Building the right product is where it
            breaks. I help align roadmap, feedback, and business goals so you
            make smarter bets and avoid wasted cycles.
          </li>
        </ul>

        <h2>Engagement Styles</h2>
        <ul>
          <li>
            <strong>Strategic Sprints</strong>
            <br />
            30–60 day focused engagements to solve a high-leverage problem
          </li>
          <li>
            <strong>Ongoing Advisory</strong>
            <br />
            3–6 month partnerships with recurring sessions, async input, and
            embedded support
          </li>
          <li>
            <strong>Executive Coaching</strong>
            <br />
            1:1 guidance for professionals navigating transitions, negotiations,
            or inflection points
          </li>
          <li>
            <strong>Operational Audits</strong>
            <br />
            Deep dives to uncover inefficiencies and build a plan for scale
          </li>
          <li>
            <strong>Outcome-Based Projects</strong>
            <br />
            Engagements directly tied to measurable results—EBITDA, retention,
            ops improvements, or strategic clarity
          </li>
        </ul>

        <h2>Contract Formats at Open Tee</h2>
        <p>Flexible structures to fit your stage, team, and pace:</p>

        <h3>
          1. <strong>Retainer Engagements</strong>
        </h3>
        <p>For ongoing support and flexibility</p>
        <ul>
          <li>2–3 month commitments</li>
          <li>Set hours or days per month</li>
          <li>Ideal for multi-threaded initiatives or evolving priorities</li>
        </ul>

        <h3>
          2. <strong>Project-Based Engagements</strong>
        </h3>
        <p>For defined goals and outcomes</p>
        <ul>
          <li>Scope and timeline locked in upfront</li>
          <li>
            Great for product launches, ops improvements, or GTM refinement
          </li>
        </ul>

        <h3>
          3. <strong>Hourly Engagements (with Scope)</strong>
        </h3>
        <p>For short-term or quick-turn needs</p>
        <ul>
          <li>Billed hourly with a clear boundary and outcome</li>
          <li>Ideal for strategic sessions, prep, or second-opinion reviews</li>
        </ul>

        <h3>
          4. <strong>Custom Engagements</strong>
        </h3>
        <p>Let’s design the right fit</p>
        <ul>
          <li>
            Open to equity models, advisory boards, design sprints, or hybrid
            setups
          </li>
          <li>If you have something unique in mind—I’m listening</li>
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
  );
}
