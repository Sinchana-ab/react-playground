import React from 'react';
import { Sparkles, Instagram, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#F8E8E8] px-4 py-2 rounded-full">
              <Sparkles size={16} className="text-[#E8A4B8]" />
              <span className="text-sm font-medium text-[#4A4A4A]">UGC Creator</span>
            </div>
            
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-[#4A4A4A] leading-tight">
              Hi, I'm <span className="text-[#E8A4B8]">Nainaa</span>
            </h1>
            
            <p className="text-xl text-[#8B8B8B] leading-relaxed max-w-2xl">
              A UGC creator specializing in <span className="font-semibold text-[#4A4A4A]">beauty, skincare, haircare, and wellness</span> content. I create authentic, aesthetic, and relatable short-form videos that help brands build trust and convert viewers into customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                className="bg-[#E8A4B8] hover:bg-[#D89AAC] text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.location.href = '#portfolio'}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#F8E8E8] hover:bg-[#F8E8E8] text-[#4A4A4A] rounded-full px-8 py-6 text-lg transition-all duration-300"
                onClick={() => window.location.href = '#contact'}
              >
                Let's Collaborate
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-6">
              <a
                href="https://www.instagram.com/nainaa_with_ugc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8B8B8B] hover:text-[#E8A4B8] transition-colors duration-300"
              >
                <Instagram size={20} />
                <span className="text-sm font-medium">@nainaa_with_ugc</span>
              </a>
              <a
                href="mailto:abhinayana0@gmail.com"
                className="flex items-center gap-2 text-[#8B8B8B] hover:text-[#E8A4B8] transition-colors duration-300"
              >
                <Mail size={20} />
                <span className="text-sm font-medium">Email Me</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFE5D9] to-[#E8D5F2] rounded-[2rem] blur-3xl opacity-40"></div>
              <div className="relative bg-gradient-to-br from-[#F8E8E8] to-[#FFE5D9] rounded-[2rem] p-2">
                <img
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd9a69d98?w=600&h=800&fit=crop"
                  alt="Nainaa - UGC Creator"
                  className="w-full h-[500px] object-cover rounded-[1.7rem] shadow-2xl"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#E8D5F2] rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FFE5D9] rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;