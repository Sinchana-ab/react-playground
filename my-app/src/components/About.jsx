import React from 'react';
import { Heart } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFE5D9] px-4 py-2 rounded-full mb-4">
            <Heart size={16} className="text-[#E8A4B8]" />
            <span className="text-sm font-medium text-[#4A4A4A]">About Me</span>
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-[#4A4A4A] mb-4">
            Creating Authentic Beauty Content
          </h2>
        </div>

        <Card className="p-8 lg:p-12 bg-white border-[#F8E8E8] shadow-lg rounded-3xl">
          <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
            I'm passionate about creating <span className="font-semibold">real-life beauty and wellness content</span> that feels natural—not scripted ads. My focus is on clean visuals, clear messaging, and audience-first storytelling.
          </p>
          <p className="text-lg text-[#4A4A4A] leading-relaxed">
            I help brands showcase their products in a way that feels <span className="font-semibold">honest, engaging, and scroll-stopping</span>. Every piece of content is crafted to build trust and create genuine connections with your audience.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;