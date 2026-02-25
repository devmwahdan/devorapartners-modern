import { Target, Users, Globe, Award } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Target,
      title: 'The Olympics of Work',
      description: 'We maintain extreme quality standards. Every team member goes through rigorous assessments to ensure they are at the top of their game.',
    },
    {
      icon: Award,
      title: 'Premium Pay for Premium Talent',
      description: 'Over 50% of our professionals double or triple their previous compensation. The best person in the world deserves to be paid accordingly.',
    },
    {
      icon: Users,
      title: 'Skills Over Bias',
      description: 'We don\'t care about credentials or location. Just prove your skills. Our assessment system shortlists based purely on demonstrated abilities.',
    },
    {
      icon: Globe,
      title: 'Global Talent Network',
      description: 'Access to 500+ highly skilled professionals across 130+ countries. Connect with expertise from anywhere, working seamlessly across time zones.',
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <span className="section-label">Our Vision</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Recruitment
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">Reimagined</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Traditional hiring is broken. We're fixing it by connecting world-class companies
              with the top 1% of global IT talent through rigorous skill-based assessments.
            </p>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                    <span className="text-2xl font-extrabold text-slate-900">130+</span>
                    <span className="text-sm text-slate-600 ml-1.5">Countries</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                    <span className="text-2xl font-extrabold text-slate-900">500+</span>
                    <span className="text-sm text-slate-600 ml-1.5">Professionals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:pt-12">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="group flex gap-5 p-6 rounded-2xl border border-slate-200 hover:border-brand-200 bg-white hover:bg-brand-50/30 transition-all duration-300 hover-lift"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5">{pillar.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-brand-600 to-brand-800 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.05] rounded-full blur-[80px]" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-white mb-4">
                The World's Largest Database of Skilled Remote Talent
              </h3>
              <p className="text-brand-100 text-lg leading-relaxed mb-6">
                We've built a comprehensive ecosystem connecting exceptional IT professionals
                with innovative companies. Our platform eliminates geographical barriers and
                focuses purely on skills and proven abilities.
              </p>
              <ul className="space-y-3">
                {[
                  'Find highly skilled professionals around the world (500+ and counting)',
                  'Empower them to prove world-class aptitude and job skills',
                  'Enable top tech companies to recruit the best 1% for elite full-time jobs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-brand-100">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '500+', label: 'Elite Professionals' },
                { value: '130+', label: 'Countries' },
                { value: '150+', label: 'Happy Clients' },
                { value: '98%', label: 'Success Rate' },
              ].map((s) => (
                <div key={s.label} className="bg-white/[0.08] backdrop-blur-sm rounded-xl p-6 border border-white/[0.1]">
                  <div className="text-3xl font-extrabold text-white mb-1">{s.value}</div>
                  <div className="text-brand-200 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
