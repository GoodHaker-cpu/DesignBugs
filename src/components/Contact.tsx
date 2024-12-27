import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phoneNumber, message } = formData;

    try {
      const response = await fetch(
        `http://52.91.254.129:8080/api/v1/emails/send?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phoneNumber=${encodeURIComponent(phoneNumber)}&userQuestion=${encodeURIComponent(message)}`,
        {
          method: 'POST',
          headers: {
            'accept': '*/*'
          },
          body: ''
        }
      );

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', phoneNumber: '', message: '' });
      } else {
        alert('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300">Ready to take your business to the next level? Let's talk about your project.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <form onSubmit={handleSubmit} className="space-y-6 glass-card p-8 rounded-2xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-black">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  text-white placeholder-gray-400"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-black">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  text-white placeholder-gray-400"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2 text-black">
                Your Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  text-white placeholder-gray-400"
                placeholder="9876543210"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-black">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  text-white placeholder-gray-400"
                placeholder="Tell us about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 
                text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 
                transform hover:scale-105 transition-all duration-300
                flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                <p className="text-gray-300">info@design-bugs.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                <p className="text-gray-300">+91 8173883956, +91 9013435109</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                <p className="text-gray-300">428/D-22 60 Feet Road Chhatarpur Delhi 110074 India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
