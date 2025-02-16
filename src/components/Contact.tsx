import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phoneNumber, message } = formData;

    if (!name || !email || !phoneNumber || !message) {
      setStatusMessage('All fields are required!');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const response = await axios.post('http://localhost:5173/send-email', formData);
      
      if (response.status === 200) {
        setStatusMessage('Form submitted successfully!');
        setFormData({ name: '', email: '', phoneNumber: '', message: '' });
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setStatusMessage(error.response.data.error || 'Error submitting form. Please try again later.');
        } else if (error.request) {
          setStatusMessage('No response from server. Please try again later.');
        } else {
          setStatusMessage('Unexpected error occurred. Please try again later.');
        }
      } else if (error instanceof Error) {
        setStatusMessage(`Unexpected error: ${error.message}`);
      } else {
        setStatusMessage('An unknown error occurred. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
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
            {['name', 'email', 'phoneNumber', 'message'].map((field, index) => (
              <div key={index}>
                <label htmlFor={field} className="block text-sm font-medium mb-2 text-white">
                  {field === 'phoneNumber' ? 'Your Phone Number' : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                </label>
                {field === 'message' ? (
                  <textarea
                    id={field}
                    rows={5}
                    value={formData[field as keyof FormData]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black placeholder-gray-700"
                    placeholder={`Enter your ${field}...`}
                    required
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    value={formData[field as keyof FormData]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black placeholder-gray-700"
                    placeholder={field === 'phoneNumber' ? '9876543210' : `Enter your ${field}...`}
                    required
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send className="w-4 h-4" />
            </button>
            {statusMessage && <p className="text-center mt-4 text-white">{statusMessage}</p>}
          </form>

          <div className="space-y-8">
            {[{ icon: Mail, title: 'Email Us', content: 'info@design-bugs.com' },
              { icon: Phone, title: 'Call Us', content: '+91 8173883956, +91 9013435109' },
              { icon: MapPin, title: 'Visit Us', content: '428/D-22 60 Feet Road Chhatarpur Delhi 110074 India' }]
              .map((item, index) => (
                <div className="flex items-start space-x-4" key={index}>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-300">{item.content}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
