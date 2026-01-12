import React from 'react';
import { FileVideo, Pen, Wand2, FileArchive, MessageCircle } from 'lucide-react';
import { Card } from './ui/card';

const Services = () => {
  const services = [
    {
      icon: FileVideo,
      title: 'Short-Form UGC Videos',
      description: 'Reels, Shorts & TikTok content optimized for engagement',
    },
    {
      icon: Wand2,
      title: 'Product Demonstrations',
      description: 'Clear, aesthetic showcases of your products in action',
    },
    {
      icon: Pen,
      title: 'Script + Content Creation',
      description: 'Complete content strategy from concept to delivery',
    },
    {
      icon: FileArchive,
      title: 'Raw Video Footage',
      description: 'High-quality footage for your ad campaigns',
    },
    {
      icon: MessageCircle,
      title: 'Brand-Focused Storytelling',
      description: 'Authentic narratives that connect with your audience',
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-[#4A4A4A] mb-4">
            Services Offered
          </h2>
          <p className="text-lg text-[#8B8B8B] max-w-2xl mx-auto">
            Comprehensive UGC solutions for your brand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-white border-[#F8E8E8] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#F8E8E8] to-[#FFE5D9] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-[#E8A4B8]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-[#4A4A4A] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#8B8B8B]">{service.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;