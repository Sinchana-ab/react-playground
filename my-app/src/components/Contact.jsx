import React from 'react';
import { Instagram, Mail, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-12 lg:p-16 bg-gradient-to-br from-white to-[#F8E8E8] border-[#F8E8E8] rounded-3xl shadow-2xl text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-[#E8D5F2] px-4 py-2 rounded-full mb-6">
              <Send size={16} className="text-[#E8A4B8]" />
              <span className="text-sm font-medium text-[#4A4A4A]">Let's Collaborate</span>
            </div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-[#4A4A4A] mb-4">
              Ready to Create Together?
            </h2>
            <p className="text-lg text-[#8B8B8B] max-w-xl mx-auto">
              I'm available for paid UGC collaborations. Let's discuss how I can help bring your brand to life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="mailto:abhinayana0@gmail.com"
              className="flex items-center gap-3 bg-[#E8A4B8] hover:bg-[#D89AAC] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              <Mail size={20} />
              <span>abhinayana0@gmail.com</span>
            </a>
            <a
              href="https://www.instagram.com/nainaa_with_ugc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-[#E8D5F2] to-[#FFE5D9] hover:from-[#D5BFE8] hover:to-[#FFD5C5] text-[#4A4A4A] px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              <Instagram size={20} />
              <span>@nainaa_with_ugc</span>
            </a>
          </div>

          <p className="text-sm text-[#8B8B8B] italic">
            Available for paid UGC collaborations
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Contact;