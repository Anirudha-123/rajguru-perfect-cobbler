import React from 'react';

const SHOE_SERVICES = [
  {
    title: "Deep Clean & Refresh",
    description: "Complete upper foam cleaning, midsole whitening, odor neutralization, and conditioned sanitization for luxury sneakers & casuals.",
    price: "₹699 onwards",
    tag: "MOST POPULAR"
  },
  {
    title: "Leather Restoration & Recoloring",
    description: "Restore scuffed, faded, or dry leather shoes. Includes deep nourishment oils, professional color matching, and mirror shine gloss finish.",
    price: "₹1,299 onwards",
    tag: "EXPERT CARE"
  },
  {
    title: "Sole Repair & Re-heeling",
    description: "Expert cobbler craftsmanship for worn-out soles, heel replacements, stitching repairs, and sole pasting using industrial-grade adhesives.",
    price: "₹499 onwards",
    tag: "COBBLER SPECIAL"
  },
  {
    title: "Suede & Nubuck Rejuvenation",
    description: "Delicate dry cleaning, nap restoration, waterproof protective coating, and color revival designed exclusively for suede and nubuck leather.",
    price: "₹999 onwards",
    tag: "DELICATE CARE"
  }
];

export default function Services({ onOpenBooking }) {
  return (
    <section id="services" className="py-20 px-4 bg-[#fcfbf9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#a37c52] uppercase">Exclusively Footwear Services</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1c1410]">Specialized Shoe Treatments</h2>
          <p className="text-gray-600 text-sm">Every pair of shoes is inspected and treated by certified master artisans with high-grade organic compounds.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SHOE_SERVICES.map((s, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-[#a37c52]/20 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold bg-[#1c1410] text-[#a37c52] px-2.5 py-1 rounded tracking-wider">{s.tag}</span>
                  <span className="text-sm font-semibold text-[#a37c52]">{s.price}</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-[#1c1410] mb-2">{s.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-6">{s.description}</p>
              </div>
              <button 
                onClick={onOpenBooking}
                className="w-full bg-[#1c1410] text-[#f4ebd0] text-xs font-semibold uppercase tracking-wider py-2.5 rounded hover:bg-[#a37c52] hover:text-[#1c1410] transition">
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}