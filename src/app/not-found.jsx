import Link from "next/link";
export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-36 text-center">
      <h1 className="text-6xl font-bold">Page not found</h1>
      <p className="mt-5 text-slate-500">
        That page isn't part of our learning journey yet.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-[#EB6664] px-7 py-3 text-white"
      >
        Back home
      </Link>
    </section>
  );
}
