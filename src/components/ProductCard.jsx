import { ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(`/product/${product.id}`)}
      className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85 text-left shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow">
          {product.category}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-xl font-bold text-slate-950">{product.name}</h2>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
              {product.stock}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-semibold text-slate-700">{product.rating}</span>
          </div>
        </div>

        <div className="flex items-end gap-3">
          <span className="text-2xl font-black tracking-tight text-green-700">Rs {product.price}</span>
          <span className="pb-0.5 text-sm text-slate-400 line-through">Rs {product.oldPrice}</span>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
          <span>{product.weight}</span>
          <span className="inline-flex items-center gap-2 font-semibold text-green-700">
            View details
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </button>
  );
}
