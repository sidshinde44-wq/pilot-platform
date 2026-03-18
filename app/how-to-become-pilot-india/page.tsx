import Link from "next/link"

export const metadata = {
  title: "How to Become a Pilot in India After 12th (2026 Guide)",
  description:
    "Complete step-by-step guide to becoming a pilot in India. Learn eligibility, CPL training, costs, DGCA exams, and airline selection process.",
}

export default function Page() {
  return (
    <div className="space-y-10">

      {/* TITLE */}
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          How to Become a Pilot in India After 12th
        </h1>

        <p className="text-gray-600">
          Becoming a commercial pilot in India involves medical clearance,
          flight training, licensing, and airline selection. This guide explains
          every step clearly so you know exactly what to do.
        </p>
      </section>

      {/* ROADMAP */}
      <section className="border rounded-2xl p-6 text-center text-sm">
        12th → DGCA Medical → Ground School → CPL → Type Rating → Airline Job
      </section>

      {/* ELIGIBILITY */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Eligibility Requirements</h2>

        <ul className="list-disc pl-6 text-gray-700">
          <li>10+2 with Physics and Mathematics</li>
          <li>Minimum age: 17 years</li>
          <li>DGCA Class 2 Medical</li>
          <li>DGCA Class 1 Medical (before CPL)</li>
        </ul>
      </section>

      {/* MEDICAL */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 1 — DGCA Medical</h2>

        <p className="text-gray-700">
          You must pass Class 2 and then Class 1 medical examinations to ensure
          you meet aviation fitness standards.
        </p>
      </section>

      {/* GROUND SCHOOL */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 2 — Ground School</h2>

        <p className="text-gray-700">
          You will study subjects like Air Navigation, Meteorology, Air
          Regulations, and Technical General.
        </p>
      </section>

      {/* CPL */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 3 — CPL Training</h2>

        <p className="text-gray-700">
          To obtain a Commercial Pilot License, you must complete 200 flight
          hours including solo and cross-country flying.
        </p>
      </section>

      {/* COST */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cost of Becoming a Pilot</h2>

        <div className="border rounded-xl p-4 text-sm">
          India: ₹45–60 lakh <br />
          USA: ₹55–70 lakh <br />
          South Africa: ₹40–50 lakh
        </div>

        <Link
          href="/tools/cpl-cost-calculator"
          className="text-blue-600"
        >
          Calculate your exact cost →
        </Link>
      </section>

      {/* TYPE RATING */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step 4 — Type Rating</h2>

        <p className="text-gray-700">
          After CPL, you must train on a specific aircraft like Airbus A320
          before joining airlines such as IndiGo or Air India.
        </p>
      </section>

      {/* AIRLINE PROCESS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Step 5 — Airline Selection Process
        </h2>

        <p className="text-gray-700">
          Airlines conduct written tests, aptitude tests (ADAPT), interviews,
          and simulator assessments.
        </p>

        <div className="flex flex-col gap-2">
          <Link href="/adapt-explained" className="text-blue-600">
            Learn about ADAPT →
          </Link>

          <Link href="/tools/adapt-practice" className="text-blue-600">
            Practice ADAPT →
          </Link>
        </div>
      </section>

      {/* TIME */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          How Long Does It Take?
        </h2>

        <p className="text-gray-700">
          Training typically takes 18–24 months, with additional time for type
          rating and airline selection. Total timeline is around 2–3 years.
        </p>
      </section>

      {/* SALARY */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Pilot Salary in India
        </h2>

        <p className="text-gray-700">
          Entry-level First Officers earn approximately ₹1.5–3 lakh per month.
        </p>

        <Link href="/pilot-salary-india" className="text-blue-600">
          Full salary breakdown →
        </Link>
      </section>

      {/* MISTAKES */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Common Mistakes to Avoid
        </h2>

        <ul className="list-disc pl-6 text-gray-700">
          <li>Choosing the cheapest flight school blindly</li>
          <li>Ignoring medical requirements early</li>
          <li>Underestimating total cost</li>
          <li>Not preparing for airline selection</li>
        </ul>
      </section>

      {/* NEXT STEPS */}
      <section className="border rounded-2xl p-6 space-y-4 bg-gray-50">
        <h2 className="text-xl font-semibold">What to Do Next</h2>

        <div className="flex flex-col gap-2">

          <Link href="/pilot-career-roadmap" className="text-blue-600">
            Pilot Career Roadmap →
          </Link>

          <Link href="/tools/cpl-cost-calculator" className="text-blue-600">
            CPL Cost Calculator →
          </Link>

          <Link href="/indigo-selection-process" className="text-blue-600">
            IndiGo Selection Process →
          </Link>

          <Link href="/recruitment-tracker" className="text-blue-600">
            Recruitment Tracker →
          </Link>

        </div>
      </section>

    </div>
  )
}