import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  userQuestion: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    userQuestion: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.userQuestion) {
      setStatusMessage('All fields are required!');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('');

    const myHeaders = new Headers();
    myHeaders.append("accept", "*/*");

    const queryParams = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      userQuestion: formData.userQuestion
    }).toString();

    try {
      const response = await fetch(
        `https://designbugs-backend-production.up.railway.app/api/v1/emails/send?${queryParams}`,
        {
          method: "POST",
          headers: myHeaders,
          redirect: "follow"
        }
      );

      const result = await response.text();
      console.log(result);
      
      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', phoneNumber: '', userQuestion: '' });
      } else {
        setStatusMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatusMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300">Ready to take your business to the next level? Let's talk about your project.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
            {[
              { id: 'name', label: 'Your Name', type: 'text' },
              { id: 'email', label: 'Your Email', type: 'email' },
              { id: 'phoneNumber', label: 'Your Phone Number', type: 'text' },
              { id: 'userQuestion', label: 'Your Message', type: 'textarea' }
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-medium mb-2 text-white">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    rows={5}
                    value={formData[field.id as keyof FormData]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-gray-400"
                    placeholder={`Enter ${field.label.toLowerCase()}...`}
                    required
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    value={formData[field.id as keyof FormData]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-gray-400"
                    placeholder={field.id === 'phoneNumber' ? '9876543210' : `Enter ${field.label.toLowerCase()}...`}
                    required
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send className="w-4 h-4" />
            </button>
            {statusMessage && (
              <p className={`text-center mt-4 ${statusMessage.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                {statusMessage}
              </p>
            )}
          </form>

          <div className="space-y-8">
            {[
              { icon: Mail, title: 'Email Us', content: 'info@design-bugs.com' },
              { icon: Phone, title: 'Call Us', content: '+91 8173883956, +91 9013435109' },
              { icon: MapPin, title: 'Visit Us', content: '428/D-22 60 Feet Road Chhatarpur Delhi 110074 India' }
            ].map((item, index) => (
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