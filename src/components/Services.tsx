import React from 'react';
import { Code, Layout, Share2, Camera, Target, Search, BarChart } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Build robust and scalable web applications tailored to your needs.',
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Web Designing',
    description: 'Create stunning and user-friendly designs for your website.',
    icon: Layout,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage and grow your audience across all social platforms.',
    icon: Share2,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Photography',
    description: 'Capture stunning visuals to elevate your brand and campaigns.',
    icon: Camera,
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'PPC Campaigns',
    description: 'Maximize ROI with targeted pay-per-click advertising.',
    icon: Target,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'SEO Optimization & Analytics',
    description: 'Boost your search rankings and make data-driven decisions with comprehensive analytics.',
    icon: Search,
    gradient: 'from-indigo-500 to-purple-500'
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
