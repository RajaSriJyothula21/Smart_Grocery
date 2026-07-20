import { ArrowRight } from "lucide-react";
import heroImage from "../assets/banners/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-green-50 to-green-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-green-200 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            🌱 Fresh Grocery Delivered
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
            Fresh Food for a
            <span className="text-green-600"> Healthy Life</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Buy fresh vegetables, leafy greens, root vegetables,
            stem vegetables and premium non-veg products at
            affordable prices.
          </p>

          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-lg flex items-center gap-2 transition">
            Shop Now
            <ArrowRight size={20} />
          </button>

          {/* Statistics */}
          <div className="flex gap-10 mt-10">
            <div>
              <h2 className="text-3xl font-bold text-green-700">50+</h2>
              <p className="text-gray-500">Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-700">100%</h2>
              <p className="text-gray-500">Fresh</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-700">24/7</h2>
              <p className="text-gray-500">Support</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={heroImage}
            alt="Fresh Grocery"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
}