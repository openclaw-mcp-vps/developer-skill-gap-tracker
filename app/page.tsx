export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          For Junior Devs &amp; Career Switchers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Your Path to{" "}
          <span className="text-[#58a6ff]">Your Dream Dev Job</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste any job posting. Our AI compares it against your skills, builds a
          personalized learning roadmap, and tracks your progress — so you always
          know exactly what to learn next.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Closing the Gap — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "AI Job Parsing",
            "Skill Gap Analysis",
            "Learning Roadmaps",
            "Progress Tracking",
            "Multiple Job Targets"
          ].map((f) => (
            <span
              key={f}
              className="px-4 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm font-semibold text-[#58a6ff] uppercase tracking-wide mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited job posting analyses",
              "AI-generated learning roadmaps",
              "Skill progress dashboard",
              "Track multiple job targets",
              "Weekly progress reminders"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the skill gap analysis work?",
              a: "Paste a job posting and list your current skills. Our AI extracts the required technologies and experience from the posting, then compares them against what you know to show exactly where the gaps are."
            },
            {
              q: "What kind of learning roadmaps do I get?",
              a: "You get a prioritized, step-by-step plan with recommended resources (courses, docs, projects) tailored to close your specific gaps for each job target — not a generic curriculum."
            },
            {
              q: "Can I track multiple job targets at once?",
              a: "Yes. Add as many job postings as you like. Each gets its own gap analysis and roadmap, and your progress on shared skills updates across all targets automatically."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} SkillGap Tracker. All rights reserved.
      </footer>
    </main>
  );
}
