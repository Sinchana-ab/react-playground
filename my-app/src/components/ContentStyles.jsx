import React from 'react';
import { Video, Mic, MessageSquare, Image, TrendingUp, Palette } from 'lucide-react';
import { Card } from './ui/card';

const ContentStyles = () => {
  const styles = [
    {
      icon: Video,
      title: 'Product Demos',
      description: 'Clear, engaging product demonstrations',
    },
    {
      icon: Mic,
      title: 'Voiceover Ads',
      description: 'Professional voiceover content',
    },
    {
      icon: MessageSquare,
      title: 'Talking-Head Reviews',
      description: 'Authentic, relatable reviews',
    },
    {
      icon: Image,
      title: 'Aesthetic B-Roll',
      description: 'Beautiful, cinematic footage',
    },
    {
      icon: TrendingUp,
      title: 'Before/After Results',
      description: 'Transformation showcases',
    },
    {
      icon: Palette,
      title: 'Lifestyle Integration',
      description: 'Natural product integration',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white/50 to-[#FFFBF7]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-[#4A4A4A] mb-4">
            Content Styles I Create
          </h2>
          <p className="text-lg text-[#8B8B8B] max-w-2xl mx-auto">
            Versatile content formats tailored to your brand needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style, index) => {
            const Icon = style.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-white border-[#F8E8E8] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F8E8E8] to-[#FFE5D9] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-[#E8A4B8]" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#4A4A4A] mb-2">
                  {style.title}
                </h3>
                <p className="text-[#8B8B8B]">{style.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentStyles;