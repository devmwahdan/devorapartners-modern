import { Search, UserCheck, Shield, Zap, BarChart3, Users2, ArrowRight } from 'lucide-react';

export default function ForCompanies() {
  const services = [
    {
      icon: Search,
      title: 'Hire on Devora Partners',
      description: 'Access the top 1% of global IT talent through our AI-powered smart filters. Say goodbye to average candidates.',
      features: ['Pre-vetted talent pool', 'Skills-based matching', '72-hour time-to-shortlist'],
    },
    {
      icon: UserCheck,
      title: 'How to Hire Global Talent',
      description: '10 years of perfecting a process that eliminates barriers and guarantees outstanding matches.',
      features: ['Rigorous assessment', 'Cultural fit evaluation', 'Zero bias recruitment'],
    },
    {
      icon: Shield,
      title: 'Manage Distributed Teams',
      description: 'Streamline everything from contracts and payroll to productivity management with our comprehensive tools.',
      features: ['Integrated payroll', 'Time tracking', 'Performance analytics'],
    },
    {
      icon: Zap,
      title: 'Remote Software Developers',
      description: 'Find world-class software engineers rigorously tested across 100+ skills and frameworks.',
      features: ['Full-stack developers', 'Specialized experts', 'Team augmentation'],
    },
  ];

  const advantages = [
    { stat: '60%', label: 'Cost Reduction', desc: 'Save on hiring costs while accessing premium talent' },
    { stat: '72hr', label: 'Time to Hire', desc: 'Get shortlisted candidates in just 3 days' },
    { stat: '98%', label: 'Client Satisfaction', desc: 'Consistently exceeding expectations' },
    { stat: '500+', label: 'Available Experts', desc: 'Ready to start on your projects immediately' },
  ];

  const hiringSteps = [
    { step: '01', title: 'Define Requirements', desc: 'Tell us about your ideal candidate and project needs' },
    { step: '02', title: 'AI Matching', desc: 'Our system finds the best matches from our talent pool' },
    { step: '03', title: 'Shortlist Review', desc: 'Review pre-vetted candidates with verified skills' },
    { step: '04', title: 'Interview & Hire', desc: 'Conduct final interviews and onboard your team' },
  ];

  return (
    <section id="for-companies" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-500/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 mb-20">
          <div className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start">
            <span className="section-label">For Companies</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Get World-Class
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">Experts</span> on Your Team
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Tap into a global network of pre-vetted IT professionals. Build your dream team
              without geographical limitations or lengthy recruitment cycles.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {advantages.map((item) => (
                <div key={item.label} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-2xl font-extrabold text-brand-600 mb-1">{item.stat}</div>
                  <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-200 transition-all duration-300 hover-lift"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 text-brand-700 rounded-lg text-xs font-medium"
                          >
                            <span className="w-1 h-1 rounded-full bg-brand-500" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-navy-950 rounded-3xl p-8 md:p-12 overflow-hidden relative mb-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/[0.06] rounded-full blur-[100px]" />
          <div className="relative">
            <h3 className="text-3xl font-extrabold text-white mb-3 text-center">Our Hiring Process</h3>
            <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
              From requirement to recruitment in 72 hours. Our streamlined process ensures you get the right talent, fast.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hiringSteps.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="bg-white/[0.04] backdrop-blur-sm rounded-xl p-6 border border-white/[0.08] hover:bg-white/[0.08] transition-all h-full">
                    <div className="text-brand-400/40 text-5xl font-extrabold mb-4">{item.step}</div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {index < hiringSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 text-brand-500/40">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-brand-500 text-white rounded-xl font-semibold hover:bg-brand-400 transition-all shadow-lg shadow-brand-500/25"
              >
                Start Hiring Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Users2,
              title: 'Team Augmentation',
              description: 'Scale your team up or down based on project needs. Flexible engagement models to match your requirements.',
              gradient: 'from-brand-500 to-brand-700',
              textColor: 'text-brand-100',
            },
            {
              icon: BarChart3,
              title: 'Dedicated Teams',
              description: 'Build a complete remote team that works exclusively for you. Full control with our management support.',
              gradient: 'from-blue-600 to-blue-800',
              textColor: 'text-blue-100',
            },
            {
              icon: Shield,
              title: 'Risk-Free Trial',
              description: 'Try before you commit. 2-week trial period to ensure the perfect fit for your team and project.',
              gradient: 'from-slate-700 to-slate-900',
              textColor: 'text-slate-300',
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-8 text-white`}>
                <Icon className="w-10 h-10 mb-5 opacity-80" />
                <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                <p className={`${card.textColor} leading-relaxed text-sm`}>{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
