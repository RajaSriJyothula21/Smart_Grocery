import { Sparkles } from "lucide-react";
import { offers } from "../data/offers";

export default function Offers() {
  return (
    <section id="offers" className="py-12 md:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Sparkles size={14} />
            Today&apos;s offers
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Save more with curated grocery deals.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Built-in value on the items people buy most often.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.id}
              className={`${offer.color} relative overflow-hidden rounded-[1.75rem] p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.16)] transition duration-300 hover:-translate-y-1`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_32%)]" />
              <div className="relative">
                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                  {offer.label}
                </div>
                <h3 className="mt-6 text-3xl font-black tracking-tight">{offer.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/90">{offer.subtitle}</p>
                <button className="mt-7 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  Shop now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
