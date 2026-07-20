import { Star } from "lucide-react";
import { reviews } from "../data/reviews";

export default function Reviews() {
  return (
    <section id="reviews" className="py-12 md:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Customer love</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Trusted by happy shoppers every day.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Real feedback from people who care about freshness and convenience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="glass-panel rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-16 w-16 rounded-2xl object-cover ring-4 ring-white"
                />

                <div>
                  <h3 className="text-lg font-bold text-slate-950">{review.name}</h3>
                  <p className="text-sm text-slate-500">{review.location}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-1 text-amber-500">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">{review.review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
