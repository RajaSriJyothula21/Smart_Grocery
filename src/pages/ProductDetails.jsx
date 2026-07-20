import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BadgeCheck, ShoppingCart, Zap } from "lucide-react";

import Navbar from "../components/Navbar";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="section-shell py-16 text-center">
          <div className="glass-panel mx-auto max-w-xl rounded-[1.75rem] px-6 py-14">
            <h1 className="text-3xl font-black text-slate-950">Product not found</h1>
            <p className="mt-3 text-slate-600">
              The item you selected is no longer available.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              <ArrowLeft size={16} />
              Return home
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="section-shell py-10 md:py-14">
        <div className="mb-6">
          <Link
            to={`/category/${product.category}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 transition hover:text-green-800"
          >
            <ArrowLeft size={16} />
            Back to {product.category}
          </Link>
        </div>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel overflow-hidden rounded-[2rem] p-4 md:p-6">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <span className="eyebrow capitalize">{product.category}</span>
              <h1 className="hero-title text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                {product.name}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 font-semibold text-amber-700">
                  <BadgeCheck size={15} />
                  Rating {product.rating}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 font-semibold text-emerald-700">
                  <Zap size={15} />
                  {product.stock}
                </span>
              </div>
            </div>

            <div className="glass-panel rounded-[1.75rem] p-5">
              <div className="flex flex-wrap items-end gap-3">
                <span className="text-4xl font-black tracking-tight text-green-700">
                  Rs {product.price}
                </span>
                <span className="pb-1 text-lg text-slate-400 line-through">
                  Rs {product.oldPrice}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-500">Weight: {product.weight}</p>
            </div>

            <div className="glass-panel rounded-[1.75rem] p-6">
              <h2 className="text-xl font-bold text-slate-950">Description</h2>
              <p className="mt-3 leading-8 text-slate-600">{product.description}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-lime-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-200 transition hover:-translate-y-0.5">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-6 py-3.5 font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-green-700">
                Buy Now
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
