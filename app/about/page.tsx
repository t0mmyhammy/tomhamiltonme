export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="col-span-1">
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <img src="/images/FamilyHHWalking2.jpg" alt="Hamilton family walking" className="object-cover w-full h-full grayscale" />
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-center">
          <p className="text-xl text-gray-600">
            Former McKinsey consultant, startup operator, and trusted advisor to founders and executives.
          </p>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>Professional Story</h2>
        <p>
          I've worn a lot of hats—former McKinsey consultant, operator at venture-backed startups, and now trusted
          advisor to founders, executives, and scaling teams.
        </p>
        <p>
          My sweet spot is helping businesses bridge strategy and execution. Whether that's refining a go-to-market
          plan, diagnosing operational inefficiencies, or structuring more effective org design, I'm not the advisor who
          sends a deck and disappears. I roll up my sleeves, work side-by-side, and build clarity through action.
        </p>
        <p>
          Clients often tell me I bring calm focus in messy environments and help them move faster without burning out
          their team. That's because I focus on finding leverage—where minimal effort creates outsize impact.
        </p>

        <h2>My Approach</h2>
        <p>
          Strategy is worthless without execution, and execution without strategy is just motion. I bring a
          framework-first mindset but gut-check everything through real-world constraints. I prioritize transparency,
          aligned incentives, and ruthless prioritization.
        </p>
        <p>
          Real leadership is about clarity, integrity, and accountability—delivered with humility. Titles don't build
          trust. Consistency does. And the best leaders are the ones who make their teams smarter, not just busier.
        </p>

        <h2>Background</h2>
        <ul>
          <li>Former McKinsey & Company consultant</li>
          <li>Operations leader at multiple venture-backed startups</li>
          <li>Advised 30+ companies from seed stage to growth</li>
          <li>Based in Michigan, working with teams globally</li>
        </ul>
      </div>
    </div>
  )
}
