import {
  Leaf,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-green-500 to-lime-400 text-slate-950">
              <Leaf size={22} />
            </span>
            <h2 className="text-2xl font-black tracking-tight">Smart Grocery AI</h2>
          </div>

          <p className="max-w-sm leading-7 text-slate-300">
            Smart Grocery AI is your trusted online grocery destination for fresh
            vegetables, fruits, and premium non-veg products at affordable prices.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Categories</h3>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>Leafy Vegetables</li>
            <li>Root Vegetables</li>
            <li>Stem Vegetables</li>
            <li>Non-Veg</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Contact</h3>
          <div className="mt-4 space-y-3 text-slate-300">
            <p className="flex items-center gap-2">
              <Phone size={18} />
              +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} />
              smartgrocery@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={18} />
              Kakinada, Andhra Pradesh
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="mt-4 flex gap-3">
            <button type="button" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10">
              <FaFacebookF size={16} />
            </button>
            <button type="button" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10">
              <FaInstagram size={18} />
            </button>
            <button type="button" aria-label="Twitter" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10">
              <FaXTwitter size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        Copyright 2026 Smart Grocery AI. All rights reserved.
      </div>
    </footer>
  );
}
