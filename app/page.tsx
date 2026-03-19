import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-16">

      {/* HERO */}
      <section className="text-center space-y-6 py-12">

        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Become a Pilot in India — With a Clear Plan & Real Hiring Data
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Track real airline recruitment, predict your ADAPT call, and follow a
          proven roadmap used by 400+ pilot aspirants.
        </p>

    <div className="flex justify-center gap-4 flex-wrap">
        <Link href="/pilot-career-roadmap" className="bg-black text-white px-6 py-3 rounded-xl">
          Start Your Pilot Journey
        </Link>

        <Link href="/recruitment-tracker" className="border px-6 py-3 rounded-xl">
          Check Hiring Status
        </Link>
    </div>

  {/* TRUST STRIP */}
  <div className="flex justify-center gap-6 text-sm text-gray-500 pt-4">
    <span>400+ Candidates Tracked</span>
    <span>Real Recruitment Data</span>
    <span>Updated Daily</span>
  </div>

</section>

      {/* PRIMARY ACTIONS */}
      <section className="grid md:grid-cols-3 gap-6">

  <Link href="/pilot-career-roadmap" className="border p-6 rounded-2xl hover:shadow">
    <h3 className="font-semibold text-lg">Start from Zero</h3>
    <p className="text-sm text-gray-600 mt-2">
      Step-by-step roadmap from 12th to airline job.
    </p>
  </Link>

  <Link href="/tools/cpl-cost-calculator" className="border p-6 rounded-2xl hover:shadow">
    <h3 className="font-semibold text-lg">Know Your Investment</h3>
    <p className="text-sm text-gray-600 mt-2">
      Calculate exact CPL cost based on your plan.
    </p>
  </Link>

  <Link href="/recruitment-tracker" className="border p-6 rounded-2xl hover:shadow">
    <h3 className="font-semibold text-lg">
      Track Your Selection <span className="text-red-500">●</span>
    </h3>
    <p className="text-sm text-gray-600 mt-2">
      See who is getting ADAPT calls right now.
    </p>
  </Link>

</section>

<section className="border rounded-2xl p-8 bg-gray-50 space-y-4">

  <h2 className="text-2xl font-semibold text-center">
    Live Airline Recruitment Activity
  </h2>

  <p className="text-center text-gray-600">
    Real-time insights from candidates across India
  </p>

  <div className="grid md:grid-cols-3 gap-4 text-center text-sm">

    <div className="border rounded-xl p-4">
      <p className="font-semibold">Latest ADAPT Call</p>
      <p className="text-gray-600">Today, 2:14 PM</p>
    </div>

    <div className="border rounded-xl p-4">
      <p className="font-semibold">Latest Batch Called</p>
      <p className="text-gray-600">10:32 AM Result Time</p>
    </div>

    <div className="border rounded-xl p-4">
      <p className="font-semibold">Total Candidates</p>
      <p className="text-gray-600">400+</p>
    </div>

  </div>

  <div className="text-center">
    <Link href="/recruitment-tracker" className="text-blue-600">
      View Full Tracker →
    </Link>
  </div>

</section>

     <section className="space-y-6">

  <h2 className="text-2xl font-semibold">
    Tools Built for Pilot Selection
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <Link href="/tools/adapt-practice" className="border p-6 rounded-2xl hover:shadow">
      <h3 className="font-semibold">ADAPT Practice</h3>
      <p className="text-sm text-gray-600 mt-2">
        Prepare for airline aptitude tests.
      </p>
    </Link>

    <Link href="/tools/cpl-cost-calculator" className="border p-6 rounded-2xl hover:shadow">
      <h3 className="font-semibold">CPL Cost Calculator</h3>
      <p className="text-sm text-gray-600 mt-2">
        Estimate total training investment.
      </p>
    </Link>

    <Link href="/tools/airline-eligibility" className="border p-6 rounded-2xl hover:shadow">
      <h3 className="font-semibold">Eligibility Checker</h3>
      <p className="text-sm text-gray-600 mt-2">
        Check if you qualify for airlines.
      </p>
    </Link>

  </div>

</section>

<section className="text-center space-y-6">

  <h2 className="text-2xl font-semibold">
    Your Pilot Journey Simplified
  </h2>

  <div className="border rounded-2xl p-6 text-sm">
    12th → DGCA Medical → Ground School → CPL → Type Rating → Airline Job
  </div>

  <Link href="/pilot-career-roadmap" className="text-blue-600">
    View Detailed Roadmap →
  </Link>

</section>

    <section className="text-center space-y-4 py-10">

  <h2 className="text-2xl font-semibold">
    Don’t Guess Your Pilot Career — Track It
  </h2>

  <p className="text-gray-600">
    Use real data to plan, prepare, and predict your airline selection.
  </p>

  <Link href="/recruitment-tracker" className="bg-black text-white px-6 py-3 rounded-xl">
    Open Recruitment Tracker
  </Link>

</section>