import { Link } from "react-router-dom";
import { Menu, ShoppingCart, Search, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/75 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Modern Logo Area */}
        <Link to="/" className="group flex items-center gap-3 focus:outline-none">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 to-green-400 text-2xl shadow-md shadow-emerald-100 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            {/* Using a fresh, clean vegetable asset */}
            <span role="img" aria-label="Vegetable Logo" className="drop-shadow-sm">
             <img src="https://i.pinimg.com/736x/d1/48/65/d148659c9ae4fb8ef33d1cc945c8a76e.jpg" alt="" />
            </span>
            {/* Decorative dot indicator */}
            <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-amber-400 ring-2 ring-white animate-pulse" />
          </div>
          <div>
            <h1 className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 bg-clip-text text-xl font-black tracking-tight text-transparent">
              Smart Grocery <span className="text-emerald-500">AI</span>
            </h1>
            <p className="flex items-center gap-1 text-[11px] font-medium tracking-wide text-slate-400 uppercase">
              <Sparkles size={10} className="text-emerald-500" />
              Fresh • Healthy • Fast
            </p>
          </div>
        </Link>

        {/* Minimalist Navigation Links */}
        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          {["Home", "Categories", "Offers", "Reviews"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative py-2 transition-colors duration-200 hover:text-emerald-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Search Button */}
          <button
            type="button"
            aria-label="Search products"
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/50 text-slate-600 transition-all duration-200 hover:border-emerald-200 hover:bg-emerald-50/50 hover:text-emerald-600 focus:outline-none"
          >
            <Search size={19} className="transition-transform group-hover:scale-110" />
          </button>

          {/* Cart Button */}
          <Link
            to="/cart"
            aria-label="Cart"
            className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/50 text-slate-600 transition-all duration-200 hover:border-emerald-200 hover:bg-emerald-50/50 hover:text-emerald-600 focus:outline-none"
          >
            <ShoppingCart size={19} className="transition-transform group-hover:scale-110" />
            <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-500 px-1 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
              0
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/50 text-slate-600 transition-all duration-200 hover:bg-slate-100 md:hidden focus:outline-none"
          >
            <Menu size={19} />
          </button>
        </div>
        
      </div>
    </nav>
  );
}