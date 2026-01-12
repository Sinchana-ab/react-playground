import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-white border-t border-[#F8E8E8]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-2xl font-bold text-[#4A4A4A] mb-2">
              Nainaa
            </h3>
            <p className="text-sm text-[#8B8B8B]">
              UGC Creator | Beauty & Wellness Content
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="#about"
              className="text-[#8B8B8B] hover:text-[#E8A4B8] transition-colors duration-300 text-sm font-medium"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-[#8B8B8B] hover:text-[#E8A4B8] transition-colors duration-300 text-sm font-medium"
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="text-[#8B8B8B] hover:text-[#E8A4B8] transition-colors duration-300 text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-[#8B8B8B] hover:text-[#E8A4B8] transition-colors duration-300 text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-[#8B8B8B] flex items-center gap-2 justify-center md:justify-end">
              Made with <Heart size={14} className="text-[#E8A4B8] fill-[#E8A4B8]" /> by Nainaa
            </p>
            <p className="text-xs text-[#8B8B8B] mt-1">
              © 2025 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;