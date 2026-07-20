import { Link, useParams } from "react-router-dom";
import { ArrowLeft, PackageSearch } from "lucide-react";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import { products } from "../data/products";

export default function CategoryPage() {
  const { category } = useParams();

  const filteredProducts = products.filter((product) => product.category === category);
  const title = category ? category.replace(/-/g, " ") : "Category";

  return (
    <>
      <Navbar />

      <main className="section-shell py-10 md:py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 transition hover:text-green-800"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>

            <h1 className="mt-4 text-3xl font-black capitalize tracking-tight text-slate-950 md:text-5xl">
              {title} products
            </h1>
            <p className="mt-3 text-slate-600">
              {filteredProducts.length} products available in this collection.
            </p>
          </div>

          <div className="glass-panel rounded-2xl px-4 py-3 text-sm text-slate-600">
            Browse the freshest picks curated for this category.
          </div>
        </div>

        {filteredProducts.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="glass-panel rounded-[1.75rem] px-6 py-16 text-center">
            <PackageSearch className="mx-auto text-green-700" size={44} />
            <h2 className="mt-5 text-2xl font-bold text-slate-950">Nothing here yet</h2>
            <p className="mx-auto mt-3 max-w-md text-slate-600">
              We do not have products in this category yet. Try another section to keep
              shopping.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Explore categories
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
