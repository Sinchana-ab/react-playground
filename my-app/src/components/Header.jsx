import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#F8E8E8]">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-playfair font-bold text-[#4A4A4A]">
            Nainaa
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#4A4A4A] hover:text-[#E8A4B8] transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button
              className="bg-[#F8E8E8] hover:bg-[#E8A4B8] text-[#4A4A4A] rounded-full px-6 transition-all duration-300"
              onClick={() => window.location.href = '#contact'}
            >
              Let's Collaborate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#4A4A4A]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[#4A4A4A] hover:text-[#E8A4B8] transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="w-full bg-[#F8E8E8] hover:bg-[#E8A4B8] text-[#4A4A4A] rounded-full transition-all duration-300"
              onClick={() => {
                setIsMenuOpen(false);
                window.location.href = '#contact';
              }}
            >
              Let's Collaborate
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;