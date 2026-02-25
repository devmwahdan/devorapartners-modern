import { useState, useEffect } from 'react';
import { Globe2, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const menus = [
    { title: 'About', items: [
      { name: 'About Devora Partners', desc: 'Elite IT talent partner across 130+ countries', link: '#about' },
      { name: 'Client Reviews', desc: 'Testimonials from 150+ satisfied companies', link: '#clients' },
    ]},
    { title: 'For Job Seekers', items: [
      { name: 'Current Openings', desc: 'Remote positions with top tech companies', link: '#job-seekers' },
      { name: 'Selection Process', desc: 'Our rigorous 6-step assessment system', link: '#process' },
      { name: 'High-Paying Roles', desc: '70+ roles with competitive USD salaries', link: '#job-seekers' },
    ]},
    { title: 'For Companies', items: [
      { name: 'Hire Top Talent', desc: 'Access the top 1% of global IT professionals', link: '#for-companies' },
      { name: 'Global Hiring Guide', desc: 'Proven process for exceptional matches', link: '#for-companies' },
      { name: 'Manage Teams', desc: 'Contracts, payroll & productivity tools', link: '#for-companies' },
    ]},
    { title: 'Resources', link: '#resources' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-2xl border-b border-slate-200/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          <a href="#" className="flex items-center gap-2.5">
            <Globe2 className={`w-7 h-7 transition-colors duration-300 ${scrolled ? 'text-brand-500' : 'text-brand-400'}`} />
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>Devora Partners</span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {menus.map((m) => (
              <div key={m.title} className="relative" onMouseEnter={() => setActive(m.title)} onMouseLeave={() => setActive(null)}>
                {m.items ? (
                  <>
                    <button className={`px-4 py-2 font-medium text-sm flex items-center gap-1 rounded-lg transition-colors ${scrolled ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
                      {m.title} <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${active === m.title ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${active === m.title ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                      <div className="w-[320px] bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-2">
                        {m.items.map((item) => (
                          <a key={item.name} href={item.link} className="flex flex-col px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group">
                            <span className="font-medium text-slate-900 text-sm group-hover:text-brand-600 transition-colors">{item.name}</span>
                            <span className="text-xs text-slate-500 mt-0.5">{item.desc}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a href={m.link} className={`px-4 py-2 font-medium text-sm rounded-lg transition-colors ${scrolled ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>{m.title}</a>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className={`px-4 py-2 font-medium text-sm transition-colors ${scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'}`}>Log In</a>
            <a href="#contact" className="group inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500 text-white rounded-xl font-semibold text-sm hover:bg-brand-400 transition-all shadow-md shadow-brand-500/20">
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-slate-700' : 'text-white'}`}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[80vh] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 mt-2">
            {menus.map((m) => (
              <div key={m.title} className="mb-3">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-1">{m.title}</div>
                {m.items ? m.items.map((item) => (
                  <a key={item.name} href={item.link} className="block px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 rounded-lg" onClick={() => setIsOpen(false)}>{item.name}</a>
                )) : (
                  <a href={m.link} className="block px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 rounded-lg" onClick={() => setIsOpen(false)}>{m.title}</a>
                )}
              </div>
            ))}
            <div className="border-t border-slate-100 pt-3 mt-2 px-3">
              <a href="#contact" className="block text-center py-2.5 bg-brand-500 text-white rounded-xl font-semibold text-sm" onClick={() => setIsOpen(false)}>Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
