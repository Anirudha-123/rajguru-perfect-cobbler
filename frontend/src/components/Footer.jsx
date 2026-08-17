import React from 'react';
import { Phone, MapPin, Mail, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#150f0c] text-gray-400 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-[#a37c52]/30 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-bold tracking-wider text-[#f4ebd0]">THE PERFECT COBBLER</h3>
            <p className="text-[#a37c52] font-serif italic text-[11px]">Rajguru & Co. • A Clean Step Every Time</p>
          </div>
          <p className="text-gray-400 leading-relaxed text-[11px]">
            A specialized luxury shoe hospital dedicated entirely to sneaker deep cleaning, premium leather restoration, and master cobbler craftsmanship.
          </p>
          <div className="inline-flex items-center space-x-1.5 text-[10px] text-[#a37c52] bg-[#2c221e] border border-[#a37c52]/30 px-2.5 py-1 rounded-full">
            <ShieldCheck size={12} />
            <span>100% Specialist Care (No General Laundry)</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-3">
          <h4 className="font-bold text-[#f4ebd0] uppercase tracking-widest text-[11px]">Navigation</h4>
          <ul className="space-y-2 text-[11px]">
            <li>
              <a href="#services" className="hover:text-[#a37c52] transition flex items-center space-x-1">
                <span>Our Services</span>
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-[#a37c52] transition flex items-center space-x-1">
                <span>Before & After Gallery</span>
              </a>
            </li>
            <li>
              <button onClick={onOpenBooking} className="hover:text-[#a37c52] transition text-left flex items-center space-x-1">
                <span>Schedule Doorstep Pickup</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Hotline Column */}
        <div className="space-y-3">
          <h4 className="font-bold text-[#f4ebd0] uppercase tracking-widest text-[11px]">Client Concierge</h4>
          <ul className="space-y-2.5 text-[11px]">
            <li className="flex items-center space-x-2 text-[#a37c52]">
              <Phone size={14} className="flex-shrink-0" />
              <a href="tel:+917741864763" className="hover:underline font-bold text-[#f4ebd0]">+91 77418 64763</a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={14} className="flex-shrink-0" />
              <span className="text-gray-300">support@theperfectcobbler.com</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#a37c52]" />
              <span className="text-gray-400">Pan-City Doorstep Pickup & White-Glove Delivery Available</span>
            </li>
          </ul>
        </div>

        {/* Call to Action Column */}
        <div className="space-y-3 bg-[#1c1410] border border-[#a37c52]/30 p-5 rounded-xl shadow-xl flex flex-col justify-between">
          <div className="space-y-2">
            <h4 className="font-bold text-[#f4ebd0] uppercase tracking-widest text-[11px]">Restore Your Footwear</h4>
            <p className="text-[11px] text-gray-400">Give your luxury sneakers and leather shoes a second lease on life.</p>
          </div>
          <button 
            onClick={onOpenBooking}
            className="w-full mt-3 bg-gradient-to-r from-[#a37c52] to-[#8c653e] text-[#1c1410] font-bold py-2.5 px-4 rounded text-[11px] uppercase tracking-wider hover:opacity-95 transition flex items-center justify-center space-x-1 shadow-md"
          >
            <span>Book Free Pickup</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto border-t border-[#a37c52]/20 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500">
        <p>&copy; {new Date().getFullYear()} The Perfect Cobbler (Rajguru & Co.). All Rights Reserved.</p>
        <div className="flex space-x-6 mt-3 sm:mt-0 text-[10px]">
          <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
          <span className="hover:text-gray-400 cursor-pointer">Logistics & Coverage</span>
        </div>
      </div>
    </footer>
  );
}