import React from 'react';
import { Play } from 'lucide-react';
import { Card } from './ui/card';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      category: 'Skincare UGC',
      title: 'Product Demo',
      description: 'Clean, aesthetic setup showcasing product benefits',
      thumbnail: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=800&fit=crop',
    },
    {
      id: 2,
      category: 'Skincare UGC',
      title: 'Problem → Solution Reel',
      description: 'Story-driven skincare transformation',
      thumbnail: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=800&fit=crop',
    },
    {
      id: 3,
      category: 'Skincare UGC',
      title: 'Morning/Night Routine',
      description: 'Step-by-step skincare routine video',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop',
    },
    {
      id: 4,
      category: 'Haircare UGC',
      title: 'Haircare Routine Reel',
      description: 'Complete haircare routine demonstration',
      thumbnail: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=800&fit=crop',
    },
    {
      id: 5,
      category: 'Haircare UGC',
      title: 'Before & After Transformation',
      description: 'Dramatic hair transformation results',
      thumbnail: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=800&fit=crop',
    },
    {
      id: 6,
      category: 'Haircare UGC',
      title: 'Texture-Focused B-Roll',
      description: 'Aesthetic hair texture and shine shots',
      thumbnail: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop',
    },
    {
      id: 7,
      category: 'Beauty & Wellness',
      title: 'Voiceover Beauty Reel',
      description: 'Professional voiceover product review',
      thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=800&fit=crop',
    },
    {
      id: 8,
      category: 'Beauty & Wellness',
      title: 'Self-Care Aesthetic Content',
      description: 'Lifestyle wellness and self-care moments',
      thumbnail: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=800&fit=crop',
    },
    {
      id: 9,
      category: 'Beauty & Wellness',
      title: 'Talking-to-Camera Review',
      description: 'Authentic, relatable product review',
      thumbnail: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?w=600&h=800&fit=crop',
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E8D5F2] px-4 py-2 rounded-full mb-4">
            <Play size={16} className="text-[#E8A4B8]" />
            <span className="text-sm font-medium text-[#4A4A4A]">UGC Content Samples</span>
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-[#4A4A4A] mb-4">
            My Portfolio
          </h2>
          <p className="text-lg text-[#8B8B8B] max-w-2xl mx-auto">
            High-quality UGC content that drives engagement and conversions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden bg-white border-[#F8E8E8] rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Video Play Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play size={32} className="text-[#E8A4B8] fill-[#E8A4B8]" />
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-[#4A4A4A]">{item.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-[#4A4A4A] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#8B8B8B] text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#8B8B8B] italic">
            * Video samples will be updated with actual UGC content
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;