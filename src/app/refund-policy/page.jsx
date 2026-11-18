import Link from "next/link";
export const metadata = { title: "Refund Policy" };
export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-24">
      <div className="max-w-3xl rounded-3xl border border-[#EB6664]/15 bg-white p-8 shadow-xl sm:p-12">
        <p className="text-sm font-bold uppercase tracking-widest text-[#EB6664]">
          Esperly policies
        </p>
        <h1 className="mt-4 text-4xl font-extrabold">Refund Policy</h1>
        <p className="mt-6 leading-8 text-slate-600">
          Refund eligibility, cancellation timelines, and payment terms depend
          on the service agreement provided at enrollment. Please request the
          applicable written policy before making a payment.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          For questions about an existing enrollment, contact our support team
          with your enrollment details. This page is informational and is not a
          substitute for the official policy.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-[#EB6664] px-6 py-3 font-semibold text-white"
        >
          Contact Esperly
        </Link>
      </div>
    </main>
  );
}
