import { Target, DollarSign, Users2, Clock, Shield, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Target,
      title: 'Top 1% Talent',
      description: 'Rigorous vetting process ensures you work with the best professionals in the industry.',
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Reduce operational costs by up to 60% without compromising on quality or expertise.',
    },
    {
      icon: Clock,
      title: 'Fast Scaling',
      description: 'Quickly ramp up or down your team based on project needs with flexible engagement models.',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security protocols and compliance with international standards.',
    },
    {
      icon: Users2,
      title: 'Dedicated Teams',
      description: 'Work with committed professionals who become an extension of your in-house team.',
    },
    {
      icon: Sparkles,
      title: 'Proven Track Record',
      description: 'Successfully delivered 1000+ projects across diverse industries and technologies.',
    },
  ];

  return (
    <section id="why-us" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-500/[0.03] rounded-full blur-[120px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <span className="section-label">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Your Success
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">Is Our Mission</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We don't just provide IT resources. We partner with you to understand your business goals
              and deliver solutions that drive real results.
            </p>
            <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xl font-extrabold">24/7</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Round-the-Clock Support</div>
                  <div className="text-brand-100 text-sm">Always available when you need us</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-200 transition-all duration-300 hover-lift"
                >
                  <div className="w-11 h-11 bg-brand-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-500 transition-colors">
                    <Icon className="w-5 h-5 text-brand-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
