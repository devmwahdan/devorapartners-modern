import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <span className="section-label">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Let's Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">Great Together</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Ready to scale your business with world-class IT talent? Get in touch with us today
              and discover how we can help you achieve your goals.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email Us', value: 'contact@techsource.com', href: 'mailto:contact@techsource.com' },
                { icon: Phone, label: 'Call Us', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
                { icon: MapPin, label: 'Visit Us', value: '123 Tech Street, Silicon Valley, CA 94000', href: null },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-brand-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-slate-600 text-sm hover:text-brand-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-600 text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50">
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-900 mb-2">Service Needed</label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm text-slate-600"
                    >
                      <option value="">Select a service</option>
                      <option value="hire">Hire Talent</option>
                      <option value="team">Dedicated Team</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="development">Software Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none text-sm"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-brand-500 text-white rounded-xl font-semibold hover:bg-brand-400 transition-all shadow-lg shadow-brand-500/20"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
