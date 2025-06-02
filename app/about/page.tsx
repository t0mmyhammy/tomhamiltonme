export const metadata = {
  title: "About Tom Hamilton",
  description:
    "Learn about Tom Hamilton's background as a strategic advisor and operator helping founders and executives turn strategy into execution.",
}

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
            Proud dad. Relentless builder. Trusted advisor to founders and executives.
          </p>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>My Story</h2>
        <p>
          I've always been drawn to figuring things out—from cracking open computers at age 7 (without instructions) to
          leading operations at fast-scaling startups. Even back then, I didn't just want to understand how things
          worked—I wanted to make them better. That mindset's stuck with me through every chapter of my career.
        </p>
        <p>
          I grew up in Michigan, made stops in Chicago and Austin, and eventually made my way home. Along the way, I
          built a life with my incredible wife and daughter, and carved out a path that's let me stay curious, stay
          useful, and keep learning—especially through technology.
        </p>
        <p>
          At the University of Michigan, I was pushed to define and teach a leadership course, which forced me into deep
          introspection and helped me channel a quiet but growing passion: helping people grow into the best version of
          themselves.
        </p>
        <p>
          That passion carried me through McKinsey, where I learned how to break down complexity with precision—and
          eventually into startups, where I learned how to move fast, build trust, and get results when the stakes are
          high. Now, I get to bring those worlds together.
        </p>

        <h2>How I Work</h2>
        <p>
          I help founders and execs bridge the gap between strategy and execution. Whether it's rethinking a
          go-to-market plan, untangling operations, or building organizational clarity, I bring sleeves-up support, fast
          pattern recognition, and a bias toward action.
        </p>
        <p>
          Clients don't come to me for a slide deck. They come to me when they're stuck—when decisions feel murky,
          momentum's slowed, or the team's overloaded. I work side-by-side to get traction quickly and help teams build
          in ways that scale.
        </p>
        <p>
          I believe real leadership means clarity, humility, and extreme accountability. Titles don't build
          trust—consistency does. And the best leaders create leverage by making others smarter, more focused, and more
          confident.
        </p>

        <h2>My Background</h2>
        <ul>
          <li>Former McKinsey consultant</li>
          <li>Operator at multiple venture-backed startups</li>
          <li>Advisor to founders and companies across tech, services, and consumer</li>
          <li>Based in Michigan, partnering with teams globally</li>
          <li>Always learning—especially where tech meets people</li>
        </ul>

        <h2>Outside of Work</h2>
        <p>Life's not just work. I find joy in the details:</p>
        <ul>
          <li>
            Golf, in every form—watching it, playing it, and governing an (un)official "major" known as the Hammy
            Open
          </li>
          <li>University of Michigan football—I bleed maize and blue</li>
          <li>
            Health &amp; fitness—focused on clean eating, getting stronger, and challenging myself to try new things
          </li>
          <li>
            Time with my wife and daughter—drawing with chalk, dancing in the kitchen, and going on slow walks that
            turn into our favorite memories
          </li>
        </ul>
      </div>
    </div>
  )
}
