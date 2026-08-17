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
    <div className="bg-[#F9F8F6] min-h-screen text-[#0D0B0A] flex flex-col font-sans selection:bg-[#5A1E11] selection:text-[#F9F8F6]">
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#5A1E11] font-bold bg-[#F0ECE1] px-4 py-1.5 rounded-full border border-[#5A1E11]/20">
            Exquisite Leather & Footwear Hospital
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0D0B0A]">
            The Art of Restoring <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A1E11] to-[#3D2314]">
              Luxury Shoes & Handbags
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-700 font-light leading-relaxed">
            From bespoke sneaker deep cleaning to executive leather recoloring
            and structural sole repair. Handled with master craftsmanship and
            free pan-city doorstep pickup.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto bg-[#5A1E11] text-[#F9F8F6] font-bold px-8 py-3.5 rounded shadow-xl hover:bg-[#3D2314] transition uppercase text-xs tracking-wider"
            >
              Schedule Free Pickup
            </button>
            <a
              href="#gallery"
              className="w-full sm:w-auto bg-[#F0ECE1] border border-[#0D0B0A]/20 text-[#0D0B0A] font-semibold px-8 py-3.5 rounded hover:bg-[#0D0B0A] hover:text-[#F9F8F6] transition uppercase text-xs tracking-wider"
            >
              Explore Transformations
            </a>
          </div>
        </section>

        {/* Services Showcase Section */}
        <section
          id="services"
          className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#5A1E11]/20 space-y-10"
        >
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#5A1E11] font-semibold">
              What We Offer
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D0B0A]">
              Our Professional Services
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
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
                  className="bg-[#F0ECE1] border border-[#5A1E11]/20 rounded-xl p-6 space-y-4 hover:border-[#5A1E11] transition shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0D0B0A] text-[#C5A059] flex items-center justify-center">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#0D0B0A]">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full mt-4 bg-[#0D0B0A] text-[#F9F8F6] font-semibold py-2 rounded text-[11px] uppercase tracking-wider hover:bg-[#5A1E11] transition"
                  >
                    Book Treatment
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
          className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 border-t border-[#5A1E11]/20"
        >
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#5A1E11] font-semibold">
              Our Master Craftsmanship
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D0B0A]">
              Before & After Restoration Gallery
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#5A1E11]/20">
          <div className="bg-[#0D0B0A] text-[#F9F8F6] border border-[#5A1E11]/40 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
              <span className="font-serif text-9xl font-bold text-[#C5A059]">
                RC
              </span>
            </div>

            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#5A1E11]/40 px-3.5 py-1 rounded-full border border-[#C5A059]/40 text-[#C5A059] text-xs uppercase tracking-widest font-semibold">
                <Award size={14} />
                <span>The Art of Restoration</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#F9F8F6]">
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
                <div className="bg-[#1C1410] p-4 rounded-xl border border-[#5A1E11]/40 space-y-2">
                  <ShieldCheck className="text-[#C5A059]" size={24} />
                  <h4 className="font-serif font-bold text-sm text-[#F9F8F6]">
                    100% Safe Formulations
                  </h4>
                  <p className="text-xs text-gray-400">
                    pH-balanced organic cleaning solutions tailored specifically
                    for luxury hides and mesh.
                  </p>
                </div>

                <div className="bg-[#1C1410] p-4 rounded-xl border border-[#5A1E11]/40 space-y-2">
                  <Clock className="text-[#C5A059]" size={24} />
                  <h4 className="font-serif font-bold text-sm text-[#F9F8F6]">
                    Aged Conditioning
                  </h4>
                  <p className="text-xs text-gray-400">
                    Deep-penetrating mink oils and natural waxes restore
                    original suppleness and rich color.
                  </p>
                </div>

                <div className="bg-[#1C1410] p-4 rounded-xl border border-[#5A1E11]/40 space-y-2">
                  <Truck className="text-[#C5A059]" size={24} />
                  <h4 className="font-serif font-bold text-sm text-[#F9F8F6]">
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
