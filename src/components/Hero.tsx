import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a365d 0%, #434190 100%)',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <div 
              className="h-24 w-24 rounded-full opacity-10 bg-white"
              style={{
                transform: `scale(${0.5 + Math.random()})`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative text-center space-y-8 px-4 animate-slide-in">
        <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
          Your Success, Our Mission
        </h1>
        <p className="text-xl md:text-2xl text-primary-100 max-w-2xl mx-auto">
          We provide cutting-edge digital marketing solutions tailored to elevate your business in the digital landscape.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact"
            className="px-8 py-4 text-lg bg-white text-primary-900 rounded-full
              hover:bg-primary-100 transform hover:scale-105 transition-all duration-300
              shadow-lg hover:shadow-xl"
          >
            Get Started
          </a>
          <a 
            href="#services"
            className="px-8 py-4 text-lg border-2 border-white rounded-full
              hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      <a 
        href="#services" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow"
      >
        <ArrowDown className="w-8 h-8" />
      </a>
    </div>
  );
}