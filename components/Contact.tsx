import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Smartphone } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Format message for WhatsApp
    const whatsappMessage = `*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    const phoneNumber = '2349071762359'; // International format
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Simulate small delay for UI effect then open
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setFormState('success');
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-primary-50 dark:bg-slate-800/50 rounded-3xl p-8 md:p-12 shadow-sm border border-primary-100 dark:border-slate-700"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Get in Touch</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Have a project in mind or want to discuss a role? Send me a message directly to WhatsApp.
            </p>
          </div>

          {formState === 'success' ? (
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
            >
                <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Redirecting to WhatsApp...</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2">If WhatsApp doesn't open, please check your popup blocker.</p>
                <button 
                    onClick={() => setFormState('idle')} 
                    className="mt-6 text-primary-600 font-medium hover:underline"
                >
                    Send another message
                </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full py-4 px-6 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg shadow-green-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === 'submitting' ? (
                    'Opening WhatsApp...'
                ) : (
                    <>
                        Send via WhatsApp <Smartphone className="w-4 h-4" />
                    </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
