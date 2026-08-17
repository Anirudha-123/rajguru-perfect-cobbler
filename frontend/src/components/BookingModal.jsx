import React, { useState } from "react";
import {
  X,
  CheckCircle,
  MessageSquare,
  Sparkles,
  Shield,
  Wrench,
  Layers,
} from "lucide-react";

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "+91 77418 64763",
    serviceType: "Deep Clean & Refresh",
    shoeBrand: "",
    pickupAddress: "",
    pickupDate: new Date().toISOString().split("T")[0],
    specialInstructions: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  if (!isOpen) return null;

  const servicesList = [
    {
      id: "deep-clean",
      title: "Deep Clean & Refresh",
      icon: Sparkles,
      desc: "Complete upper, midsole & lace wash",
    },
    {
      id: "leather-restoration",
      title: "Leather Restoration",
      icon: Shield,
      desc: "Conditioning, scratch removal & recolor",
    },
    {
      id: "sole-repair",
      title: "Sole Repair & Re-heeling",
      icon: Wrench,
      desc: "Resoling, stitching & heel reinforcement",
    },
    {
      id: "suede-care",
      title: "Suede & Nubuck Care",
      icon: Layers,
      desc: "Specialized brushing & nap revival",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        const ownerPhone = "917499996869";

        const textMessage =
          `*New Shoe Pickup Order!*\n\n` +
          `*Name:* ${formData.customerName}\n` +
          `*Phone:* ${formData.phone}\n` +
          `*Service:* ${formData.serviceType}\n` +
          `*Shoe Brand:* ${formData.shoeBrand}\n` +
          `*Pickup Date:* ${formData.pickupDate}\n` +
          `*Address:* ${formData.pickupAddress}`;

        const waUrl = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(textMessage)}`;
        setWhatsappLink(waUrl);
      }
    } catch (err) {
      console.error("Error saving order:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-4 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#1c1410] text-[#f4ebd0] w-full max-w-xl rounded-xl border border-[#a37c52]/40 p-5 sm:p-8 relative shadow-2xl my-auto max-h-[90vh] flex flex-col">
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-[#2c221e] border border-[#a37c52]/30 text-gray-300 hover:text-white p-1.5 rounded-full hover:bg-[#a37c52] transition"
        >
          <X size={18} />
        </button>

        <div className="overflow-y-auto pr-1">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle className="mx-auto text-[#a37c52]" size={48} />
              <h3 className="font-serif text-2xl font-bold">
                Pickup Scheduled Successfully!
              </h3>
              <p className="text-xs text-gray-300">
                Your order has been saved successfully in the database. Click
                below to instantly notify the owner on WhatsApp with your
                complete order details.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 w-full bg-green-600 text-white font-bold py-3 rounded uppercase tracking-wider text-xs hover:bg-green-700 transition"
              >
                <MessageSquare size={16} />
                <span>Send Order Details to WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full bg-[#2c221e] border border-[#a37c52]/40 text-[#f4ebd0] py-2 rounded text-xs uppercase hover:bg-[#a37c52] hover:text-[#1c1410] transition"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6 pr-8">
                <span className="text-[10px] uppercase tracking-widest text-[#a37c52]">
                  Rajguru & Co. Logistics
                </span>
                <h2 className="font-serif text-2xl font-bold">
                  Schedule Shoe Pickup
                </h2>
                <p className="text-xs text-gray-400">
                  Call us directly at{" "}
                  <a
                    href="tel:+917741864763"
                    className="text-[#a37c52] underline"
                  >
                    +91 77418 64763
                  </a>{" "}
                  for urgent assistance.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block mb-1 text-gray-300">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-[#2c221e] border border-[#a37c52]/40 rounded p-2.5 text-[#f4ebd0] focus:outline-none focus:border-[#a37c52]"
                    placeholder="Enter your name"
                    value={formData.customerName}
                    onChange={(e) =>
                      setFormData({ ...formData, customerName: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-gray-300">
                      Phone Number
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-[#2c221e] border border-[#a37c52]/40 rounded p-2.5 text-[#f4ebd0] focus:outline-none focus:border-[#a37c52]"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 7499996869"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-gray-300">
                      Shoe Brand / Type
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-[#2c221e] border border-[#a37c52]/40 rounded p-2.5 text-[#f4ebd0] focus:outline-none focus:border-[#a37c52]"
                      placeholder="e.g., Nike Air Jordan"
                      value={formData.shoeBrand}
                      onChange={(e) =>
                        setFormData({ ...formData, shoeBrand: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Service Selection Boxes */}
                <div>
                  <label className="block mb-2 text-gray-300 font-semibold uppercase tracking-wider text-[11px]">
                    Select Service Required
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {servicesList.map((srv) => {
                      const IconComponent = srv.icon;
                      const isSelected = formData.serviceType === srv.title;
                      return (
                        <div
                          key={srv.id}
                          onClick={() =>
                            setFormData({ ...formData, serviceType: srv.title })
                          }
                          className={`cursor-pointer border rounded-lg p-2.5 transition flex flex-col justify-between ${
                            isSelected
                              ? "bg-[#a37c52]/20 border-[#a37c52] text-[#f4ebd0] shadow-md"
                              : "bg-[#2c221e] border-[#a37c52]/20 text-gray-400 hover:border-[#a37c52]/60"
                          }`}
                        >
                          <div className="flex items-center space-x-2 mb-1">
                            <IconComponent
                              size={14}
                              className={
                                isSelected ? "text-[#a37c52]" : "text-gray-500"
                              }
                            />
                            <span
                              className={`font-bold ${isSelected ? "text-[#f4ebd0]" : "text-gray-300"}`}
                            >
                              {srv.title}
                            </span>
                          </div>
                          <p className="text-[10px] text-gray-400 leading-tight">
                            {srv.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-gray-300">
                    Pickup Date
                  </label>
                  <input
                    required
                    type="date"
                    className="w-full bg-[#2c221e] border border-[#a37c52]/40 rounded p-2.5 text-[#f4ebd0] focus:outline-none focus:border-[#a37c52]"
                    value={formData.pickupDate}
                    onChange={(e) =>
                      setFormData({ ...formData, pickupDate: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block mb-1 text-gray-300">
                    Complete Pickup Address
                  </label>
                  <textarea
                    required
                    rows="2"
                    className="w-full bg-[#2c221e] border border-[#a37c52]/40 rounded p-2.5 text-[#f4ebd0] focus:outline-none focus:border-[#a37c52]"
                    placeholder="House/Flat No, Street, Landmark, Pincode"
                    value={formData.pickupAddress}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pickupAddress: e.target.value,
                      })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#a37c52] to-[#8c653e] text-[#1c1410] font-bold py-3 rounded uppercase tracking-wider text-xs hover:opacity-90 transition shadow-lg"
                >
                  {loading
                    ? "Booking Pickup..."
                    : "Confirm Free Doorstep Pickup"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
