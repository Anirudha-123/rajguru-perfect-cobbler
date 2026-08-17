import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BookingModal from "./components/BookingModal";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import AdminGalleryManager from "./components/AdminGalleryManager";
import Footer from "./components/Footer";
import {
  ShieldCheck,
  Award,
  Clock,
  Truck,
  Sparkles,
  Shield,
  Wrench,
  Layers,
} from "lucide-react";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [galleryItems, setGalleryItems] = useState([
    {
      _id: "default-1",
      title: "Luxury Sneaker Deep Clean",
      beforeImage:
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=600&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    },
    {
      _id: "default-2",
      title: "Leather Shoe Recoloring",
      beforeImage:
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
    },
    {
      _id: "default-3",
      title: "Sole Repair & Re-heeling",
      beforeImage:
        "https://images.unsplash.com/photo-1533867617858-e7d97e060837?auto=format&fit=crop&w=600&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80",
    },
  ]);

  const fetchDynamicGallery = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/gallery");
      const data = await res.json();
      if (data && data.length > 0) {
        setGalleryItems(data);
      }
    } catch (err) {
      console.error("Using default gallery items due to network error:", err);
    }
  };

  useEffect(() => {
    fetchDynamicGallery();
  }, []);

  const servicesList = [
    {
      id: "deep-clean",
      title: "Deep Clean & Refresh",
      icon: Sparkles,
      desc: "Complete upper, midsole & lace wash using pH-balanced organic solutions.",
    },
    {
      id: "leather-restoration",
      title: "Leather Restoration",
      icon: Shield,
      desc: "Deep conditioning, scratch removal, and professional recoloring.",
    },
    {
      id: "sole-repair",
      title: "Sole Repair & Re-heeling",
      icon: Wrench,
      desc: "Expert resoling, structural stitching, and heel reinforcement.",
    },
    {
      id: "suede-care",
      title: "Suede & Nubuck Care",
      icon: Layers,
      desc: "Specialized gentle brushing and nap revival treatments.",
    },
  ];

  return (
    <div className="bg-[#120c08] min-h-screen text-[#f4ebd0] flex flex-col font-sans selection:bg-[#a37c52] selection:text-[#1c1410]">
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#a37c52] font-semibold bg-[#2c221e] px-4 py-1.5 rounded-full border border-[#a37c52]/30">
            Est. Master Craftsmanship
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight text-[#f4ebd0]">
            The Ultimate Care for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a37c52] to-[#d4b08c]">
              Luxury Footwear & Leather
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            Experience premium restoration, deep cleaning, and expert soling
            delivered straight to your doorstep with our seamless free pickup
            service.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-[#a37c52] to-[#8c653e] text-[#1c1410] font-bold px-8 py-3.5 rounded shadow-lg hover:opacity-95 transition uppercase text-xs tracking-wider"
            >
              Schedule Free Pickup
            </button>
            <a
              href="#gallery"
              className="w-full sm:w-auto bg-[#2c221e] border border-[#a37c52]/40 text-[#f4ebd0] font-semibold px-8 py-3.5 rounded hover:bg-[#a37c52] hover:text-[#1c1410] transition uppercase text-xs tracking-wider"
            >
              View Gallery
            </a>
          </div>
        </section>

        {/* Services Showcase Section */}
        <section
          id="services"
          className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#a37c52]/20 space-y-10"
        >
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#a37c52]">
              What We Offer
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Our Professional Services
            </h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto">
              Tailored restoration packages designed to bring your favorite
              footwear and leather goods back to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((srv) => {
              const IconComponent = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="bg-[#1c1410] border border-[#a37c52]/30 rounded-xl p-6 space-y-4 hover:border-[#a37c52] transition shadow-xl flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#2c221e] border border-[#a37c52]/40 flex items-center justify-center text-[#a37c52]">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#f4ebd0]">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full mt-4 bg-[#2c221e] border border-[#a37c52]/40 text-[#f4ebd0] font-semibold py-2 rounded text-[11px] uppercase tracking-wider hover:bg-[#a37c52] hover:text-[#1c1410] transition"
                  >
                    Book Service
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Owner / Admin Panel Component Integration */}
        <AdminGalleryManager onUpdate={fetchDynamicGallery} />

        {/* Before & After Restoration Gallery Section */}
        <section
          id="gallery"
          className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 border-t border-[#a37c52]/20"
        >
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#a37c52]">
              Our Master Craftsmanship
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Before & After Restoration Gallery
            </h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto">
              Slide or drag left & right across each piece to discover the
              Rajguru & Co. revival difference.
            </p>
          </div>

          {/* Grid layout for comparison cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryItems.map((item) => (
              <BeforeAfterSlider
                key={item._id}
                title={item.title}
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
              />
            ))}
          </div>
        </section>

        {/* Heritage & Shoe Care History Section (Professional Touch) */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#a37c52]/20">
          <div className="bg-[#1c1410] border border-[#a37c52]/30 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
              <span className="font-serif text-9xl font-bold text-[#a37c52]">
                RC
              </span>
            </div>

            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#2c221e] px-3.5 py-1 rounded-full border border-[#a37c52]/40 text-[#a37c52] text-xs uppercase tracking-widest font-semibold">
                <Award size={14} />
                <span>The Art of Restoration</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#f4ebd0]">
                Preserving Heritage, One Sole at a Time
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                Proper shoe care is more than just cleaning—it is a meticulous
                science of fiber rejuvenation and leather conditioning. Since
                the days of traditional cobblers, premium footwear has been
                crafted to last decades, not seasons. Over time, dust particles,
                environmental moisture, and natural oils breakdown delicate
                leather grain and weaken structural adhesives.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="bg-[#2c221e] p-4 rounded-xl border border-[#a37c52]/20 space-y-2">
                  <ShieldCheck className="text-[#a37c52]" size={24} />
                  <h4 className="font-serif font-bold text-sm">
                    100% Safe Formulations
                  </h4>
                  <p className="text-xs text-gray-400">
                    pH-balanced organic cleaning solutions tailored specifically
                    for luxury hides and mesh.
                  </p>
                </div>

                <div className="bg-[#2c221e] p-4 rounded-xl border border-[#a37c52]/20 space-y-2">
                  <Clock className="text-[#a37c52]" size={24} />
                  <h4 className="font-serif font-bold text-sm">
                    Aged Conditioning
                  </h4>
                  <p className="text-xs text-gray-400">
                    Deep-penetrating mink oils and natural waxes restore
                    original suppleness and rich color.
                  </p>
                </div>

                <div className="bg-[#2c221e] p-4 rounded-xl border border-[#a37c52]/20 space-y-2">
                  <Truck className="text-[#a37c52]" size={24} />
                  <h4 className="font-serif font-bold text-sm">
                    White Glove Logistics
                  </h4>
                  <p className="text-xs text-gray-400">
                    Insured doorstep pickup and delivery right to your apartment
                    or corporate office.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Professional Footer Component */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Interactive Booking Modal Popup */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
