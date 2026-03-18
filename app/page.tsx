import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-16">

      {/* HERO */}
      <section className="text-center space-y-6 py-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          Become a Pilot in India — Step by Step
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Everything you need to start your pilot career — roadmap, cost, airline preparation, and real recruitment tracking.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/pilot-career-roadmap" className="bg-black text-white px-6 py-3 rounded-xl">
            Start Here
          </Link>

          <Link href="/tools/cpl-cost-calculator" className="border px-6 py-3 rounded-xl">
            Calculate CPL Cost
          </Link>
        </div>
      </section>

      {/* PRIMARY ACTIONS */}
      <section className="grid md:grid-cols-3 gap-6">

        <Link href="/pilot-career-roadmap" className="border p-6 rounded-2xl hover:shadow">
          <h3 className="font-semibold text-lg">Pilot Roadmap</h3>
          <p className="text-sm text-gray-600 mt-2">
            Step-by-step path from 12th to airline job.
          </p>
        </Link>

        <Link href="/tools" className="border p-6 rounded-2xl hover:shadow">
          <h3 className="font-semibold text-lg">Tools</h3>
          <p className="text-sm text-gray-600 mt-2">
            Calculate cost, check eligibility, practice ADAPT.
          </p>
        </Link>

        <Link href="/recruitment-tracker" className="border p-6 rounded-2xl hover:shadow">
          <h3 className="font-semibold text-lg">
            Recruitment Tracker <span className="text-red-500">●</span>
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Track real airline hiring updates.
          </p>
        </Link>

      </section>

      {/* TOOLS SECTION */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Tools for Pilot Aspirants</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Link href="/tools/cpl-cost-calculator" className="border p-6 rounded-2xl hover:shadow">
            CPL Cost Calculator
          </Link>

          <Link href="/tools/airline-eligibility" className="border p-6 rounded-2xl hover:shadow">
            Airline Eligibility Checker
          </Link>

          <Link href="/tools/adapt-practice" className="border p-6 rounded-2xl hover:shadow">
            ADAPT Practice
          </Link>

        </div>
      </section>

      {/* ROADMAP PREVIEW */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Pilot Career Path</h2>

        <div className="border rounded-2xl p-6 text-center text-sm">
          12th → DGCA Medical → Ground School → CPL → Type Rating → Airline Job
        </div>

        <div className="text-center">
          <Link href="/pilot-career-roadmap" className="text-blue-600">
            View Full Roadmap →
          </Link>
        </div>
      </section>

      {/* AIRLINES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Airline Selection Guides</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Link href="/indigo-selection-process" className="border p-6 rounded-2xl hover:shadow">
            IndiGo Selection Process
          </Link>

          <Link href="/air-india-recruitment" className="border p-6 rounded-2xl hover:shadow">
            Air India Hiring Guide
          </Link>

          <Link href="/akasa-recruitment" className="border p-6 rounded-2xl hover:shadow">
            Akasa Air Recruitment
          </Link>

        </div>
      </section>

      {/* TRACKER HIGHLIGHT */}
      <section className="border rounded-2xl p-8 text-center space-y-4 bg-gray-50">
        <h2 className="text-2xl font-semibold">
          Live Recruitment Tracking
        </h2>

        <p className="text-gray-600">
          See when candidates receive ADAPT calls and predict your turn.
        </p>

        <Link href="/recruitment-tracker" className="bg-black text-white px-6 py-3 rounded-xl">
          Open Tracker
        </Link>
      </section>

      {/* SOCIAL PROOF */}
      <section className="grid md:grid-cols-3 gap-6 text-center">

        <div>
          <h3 className="text-2xl font-bold">400+</h3>
          <p className="text-gray-600 text-sm">Candidates Tracked</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Real Data</h3>
          <p className="text-gray-600 text-sm">From Pilot Aspirants</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Updated Daily</h3>
          <p className="text-gray-600 text-sm">Recruitment Insights</p>
        </div>

      </section>

      {/* FINAL CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">
          Start Your Pilot Journey Today
        </h2>

        <Link href="/pilot-career-roadmap" className="bg-black text-white px-6 py-3 rounded-xl">
          Get Started
        </Link>
      </section>

    </div>
  )
}