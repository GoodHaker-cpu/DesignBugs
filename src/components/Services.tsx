import React from 'react';
import { Search, Share2, Target, BarChart, Globe, Zap } from 'lucide-react';

const services = [
  {
    title: 'SEO Optimization',
    description: 'Boost your search rankings with our data-driven SEO strategies.',
    icon: Search,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Social Media Growth',
    description: 'Engage and grow your audience across all social platforms.',
    icon: Share2,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'PPC Campaigns',
    description: 'Maximize ROI with targeted pay-per-click advertising.',
    icon: Target,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Analytics & Insights',
    description: 'Make data-driven decisions with comprehensive analytics.',
    icon: BarChart,
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'Global Reach',
    description: 'Expand your business to international markets effectively.',
    icon: Globe,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Fast Results',
    description: 'Quick implementation and rapid growth strategies.',
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">Comprehensive digital solutions to help your business thrive in the digital age.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-all duration-300
                hover:shadow-2xl"
            >
              <div className="text-center space-y-4">
                <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${service.gradient}
                  transform group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}