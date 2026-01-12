import React from 'react';
import { Sparkles, Target, Camera, Shield } from 'lucide-react';
import { Card } from './ui/card';

const WhyMe = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Beauty & Wellness Niche Expertise',
      description: 'Deep understanding of the beauty and wellness industry with targeted content strategies',
    },
    {
      icon: Target,
      title: 'Authentic, Relatable Content Style',
      description: 'Real, unscripted content that resonates with audiences and builds genuine trust',
    },
    {
      icon: Camera,
      title: 'High-Quality Visuals',
      description: 'Professional-grade content shot on mobile with excellent lighting and composition',
    },
    {
      icon: Shield,
      title: 'Brand-Safe & Conversion-Focused',
      description: 'Content designed to protect your brand image while driving real results',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#F8E8E8] to-[#FFE5D9]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-[#4A4A4A] mb-4">
            Why Work With Me?
          </h2>
          <p className="text-lg text-[#8B8B8B] max-w-2xl mx-auto">
            Expertise, authenticity, and results-driven content creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-white/80 backdrop-blur-sm border-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#E8A4B8] to-[#E8D5F2] rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon size={22} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-[#4A4A4A] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[#8B8B8B] text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;