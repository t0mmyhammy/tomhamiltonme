import NewsletterSignup from "@/components/newsletter-signup"

export default function NewsletterPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Career Clarity Updates</h1>

      <div className="prose prose-slate max-w-none mb-8">
        <p className="lead">
          Join 2,000+ ambitious professionals getting weekly insights on career clarity, strategic decision-making, and
          lessons from the executive suite.
        </p>

        <h2>What You'll Get</h2>
        <ul>
          <li>Strategic decision-making frameworks for career transitions</li>
          <li>Behind-the-scenes lessons from advising scaling teams</li>
          <li>Compensation and equity negotiation strategies</li>
          <li>How to spot and seize inflection points</li>
          <li>Building advisory relationships that actually help</li>
          <li>Demystifying executive-level decision making</li>
        </ul>

        <h2>Recent Newsletter Examples</h2>
        <ul>
          <li>"The Three Questions Every Executive Negotiation Should Answer"</li>
          <li>"Why Most Strategy Sessions Fail (And How to Fix Yours)"</li>
          <li>"The Career Inflection Point Playbook"</li>
          <li>"Building Leverage in Your Next Role Transition"</li>
        </ul>
      </div>

      <div className="bg-slate-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Subscribe to Career Clarity Updates</h2>
        <div className="max-w-md">
          <NewsletterSignup />
        </div>
      </div>
    </div>
  )
}
