import { Globe2, Linkedin, Twitter, Github, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Services: ['Software Development', 'Cloud Solutions', 'Mobile Apps', 'Data Engineering', 'Cybersecurity', 'IT Consulting'],
    Company: ['About Us', 'Careers', 'Our Team', 'Case Studies', 'Blog', 'Contact'],
    Resources: ['Documentation', 'Help Center', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    Industries: ['Fintech', 'Healthcare', 'E-commerce', 'Education', 'Manufacturing', 'Real Estate'],
  };

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 border-b border-white/[0.06]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-extrabold mb-2">Stay in the loop</h3>
              <p className="text-slate-400 text-sm">Get the latest remote work insights and job alerts delivered weekly.</p>
            </div>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all"
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-5 py-3 bg-brand-500 text-white rounded-xl font-semibold text-sm hover:bg-brand-400 transition-all whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <Globe2 className="w-7 h-7 text-brand-400" />
                <span className="text-xl font-bold tracking-tight">Devora Partners</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                Your trusted partner in building exceptional software solutions with world-class IT talent from 130+ countries.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Github, label: 'GitHub' },
                  { icon: Mail, label: 'Email' },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className="w-9 h-9 bg-white/[0.06] rounded-lg flex items-center justify-center hover:bg-brand-500 transition-colors border border-white/[0.06] hover:border-brand-500"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-sm mb-4 text-white">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-6 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">
              &copy; 2026 Devora Partners. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-400 transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
