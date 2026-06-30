'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] pt-32 pb-16 px-4 flex items-center bg-gradient-to-br from-walltrust-primary/5 to-walltrust-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We&apos;re here to help. Reach out with any questions or concerns.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card-premium p-8 text-center">
              <Phone className="w-12 h-12 text-walltrust-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Phone Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Available Monday to Friday, 9 AM to 6 PM EST
              </p>
              <p className="font-bold text-walltrust-primary">1-800-WALLTRUST</p>
            </div>

            <div className="card-premium p-8 text-center">
              <Mail className="w-12 h-12 text-walltrust-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Email Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We&apos;ll respond within 24 hours
              </p>
              <p className="font-bold text-walltrust-primary">support@walltrust.com</p>
            </div>

            <div className="card-premium p-8 text-center">
              <MapPin className="w-12 h-12 text-walltrust-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Headquarters</h3>
              <p className="text-gray-600 dark:text-gray-400">
                123 Finance Street<br/>
                New York, NY 10001
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <SectionTitle title="Send us a Message" centered={false} />

            <form onSubmit={handleSubmit} className="card-premium p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-walltrust-border dark:border-walltrust-border-dark bg-transparent focus:outline-none focus:ring-2 focus:ring-walltrust-primary transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-walltrust-border dark:border-walltrust-border-dark bg-transparent focus:outline-none focus:ring-2 focus:ring-walltrust-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-walltrust-border dark:border-walltrust-border-dark bg-transparent focus:outline-none focus:ring-2 focus:ring-walltrust-primary transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-semibold mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-walltrust-border dark:border-walltrust-border-dark bg-walltrust-background dark:bg-walltrust-background-dark focus:outline-none focus:ring-2 focus:ring-walltrust-primary transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="support">Support</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="security">Security Concern</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-walltrust-border dark:border-walltrust-border-dark bg-transparent focus:outline-none focus:ring-2 focus:ring-walltrust-primary transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {submitted && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-green-800 dark:text-green-200">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}

              <button type="submit" className="btn-primary w-full flex items-center justify-center">
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
