import { ArrowRight } from "lucide-react";
import { categories } from "../data/categories";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();

  return (
    <section id="categories" className="py-12 md:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Shop by category</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Find the right produce faster.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Explore fresh picks across our most popular grocery categories.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <button
              key={category.id}
              type="button"
              onClick={() => navigate(`/category/${category.slug}`)}
              className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85 text-left shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow">
                  0{index + 1}
                </div>
              </div>

              <div className="space-y-4 p-5">
                <div>
                  <h3 className="text-2xl font-bold text-slate-950">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
                </div>

                <div className="inline-flex items-center gap-2 text-sm font-semibold text-green-700">
                  View products
                  <ArrowRight size={16} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
