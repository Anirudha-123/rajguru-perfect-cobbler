import React from 'react';
import { Sparkles, ShieldCheck, Truck } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative bg-[#1c1410] text-[#f4ebd0] py-24 px-4 overflow-hidden border-b border-[#a37c52]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#2c221e] border border-[#a37c52]/40 px-3 py-1 rounded-full text-xs text-[#a37c52] tracking-widest uppercase">
            <Sparkles size={12} />
            <span>A Clean Step Everytime</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight leading-tight">
            Ultimate Luxury <span className="text-[#a37c52]">Shoe Restoration</span> & Care.
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg max-w-xl font-light leading-relaxed">
            Specialized deep cleaning, restoration, leather nourishment, and master cobbler repairs for your high-end sneakers, formals, and luxury footwear.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <button 
              onClick={onOpenBooking}
              className="bg-[#a37c52] text-[#1c1410] font-bold px-8 py-4 rounded shadow-lg hover:bg-[#b88d60] transition tracking-wider uppercase text-sm text-center">
              Schedule Doorstep Pickup
            </button>
            <a href="tel:+917741864763" className="border border-[#a37c52]/60 text-[#f4ebd0] px-6 py-4 rounded hover:bg-[#2c221e] transition text-center text-sm font-medium tracking-wider">
              Call Expert: +91 77418 64763
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#a37c52]/20 text-xs text-gray-400">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="text-[#a37c52]" size={18} />
              <span>100% Handcrafted Care</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="text-[#a37c52]" size={18} />
              <span>Pan-City Pickup & Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="text-[#a37c52]" size={18} />
              <span>Premium Organic Solvents</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full border-4 border-dashed border-[#a37c52]/40 flex items-center justify-center p-4 bg-[#2c221e] shadow-2xl">
            <div className="absolute inset-4 rounded-full border border-[#a37c52]/60 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-[#2c221e] to-[#1c1410]">
              <span className="text-xs uppercase tracking-widest text-[#a37c52] mb-1">Master Artisans</span>
              <h3 className="font-serif text-2xl font-bold text-[#f4ebd0] mb-2">THE PERFECT COBBLER</h3>
              <p className="text-xs text-gray-300 italic mb-4">"Rajguru & Co."</p>
              <div className="grid grid-cols-4 gap-2 text-[10px] uppercase tracking-wider text-[#a37c52] border-t border-[#a37c52]/30 pt-3 w-full">
                <span>Clean</span>
                <span>Repair</span>
                <span>Polish</span>
                <span>Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}