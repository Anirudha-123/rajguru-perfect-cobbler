import React from "react";
import { Phone } from "lucide-react";

export default function Navbar({ onOpenBooking }) {
  return (
    <header className="sticky top-0 z-50 bg-[#1c1410] text-[#e6d5c3] border-b border-[#a37c52]/30 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#a37c52] flex items-center justify-center bg-[#2c221e] overflow-hidden shadow-inner shrink-0">
            <span className="text-[#a37c52] font-serif font-bold text-sm sm:text-lg">
              RC
            </span>
          </div>
          <div>
            <h1 className="font-serif tracking-wide text-xs sm:text-lg font-bold text-[#f4ebd0] leading-tight">
              THE PERFECT COBBLER
            </h1>
            <p className="text-[9px] sm:text-xs uppercase tracking-widest text-[#a37c52]">
              Rajguru & Co.
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wider">
          <a href="#services" className="hover:text-[#a37c52] transition">
            SERVICES
          </a>
          <a href="#process" className="hover:text-[#a37c52] transition">
            CRAFT & CARE
          </a>
          <a href="#gallery" className="hover:text-[#a37c52] transition">
            GALLERY
          </a>
        </nav>

        {/* Action Buttons (Call & Book) */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a
            href="tel:+917741864763"
            aria-label="Call Owner"
            className="flex items-center space-x-1 text-[11px] sm:text-xs text-[#a37c52] bg-[#2c221e] p-2 sm:px-3 sm:py-2 rounded border border-[#a37c52]/40 hover:bg-[#a37c52] hover:text-[#1c1410] transition"
          >
            <Phone size={14} />
            <span className="hidden sm:inline">+91 77418 64763</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="bg-gradient-to-r from-[#a37c52] to-[#8c653e] text-[#1c1410] font-semibold px-3 sm:px-5 py-2 sm:py-2.5 rounded shadow hover:opacity-90 transition uppercase text-[10px] sm:text-xs tracking-wider shrink-0"
          >
            Book Pickup
          </button>
        </div>
      </div>
    </header>
  );
}
