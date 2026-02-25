import { Briefcase, TrendingUp, DollarSign, MapPin, Clock, Award, ArrowRight } from 'lucide-react';

export default function ForJobSeekers() {
  const benefits = [
    { icon: MapPin, text: 'Work from anywhere in the world' },
    { icon: DollarSign, text: 'Earn Silicon Valley salaries in USD' },
    { icon: Clock, text: 'Full-time positions with stability' },
    { icon: Award, text: 'Join the top 1% of global talent' },
  ];

  const opportunities = [
    {
      icon: Briefcase,
      title: 'Current Job Openings',
      description: 'Access remote positions with top tech companies. Work with Silicon Valley firms from anywhere in the world.',
      cta: 'Browse Jobs',
    },
    {
      icon: TrendingUp,
      title: 'Selection Process',
      description: 'Transparent, skills-based assessment system. Prove your abilities through practical tests and real-world challenges.',
      cta: 'Learn More',
    },
    {
      icon: DollarSign,
      title: 'High-Paying Remote Jobs',
      description: 'Earn what you\'re worth. Browse 70+ fully remote roles with competitive USD salaries that match your expertise.',
      cta: 'View Salaries',
    },
    {
      icon: Award,
      title: 'Specialized Roles',
      description: 'From AI/ML engineers to cybersecurity experts. Find niche positions in cutting-edge technologies.',
      cta: 'Explore Roles',
    },
  ];

  const jobCategories = [
    { title: 'Software Engineering', count: '120+ jobs', salary: '$80k - $150k' },
    { title: 'Data Science & AI', count: '45+ jobs', salary: '$90k - $160k' },
    { title: 'DevOps & Cloud', count: '65+ jobs', salary: '$85k - $145k' },
    { title: 'Mobile Development', count: '38+ jobs', salary: '$75k - $140k' },
    { title: 'Cybersecurity', count: '28+ jobs', salary: '$95k - $170k' },
    { title: 'Product Management', count: '32+ jobs', salary: '$100k - $180k' },
  ];

  return (
    <section id="job-seekers" className="relative py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-500/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label justify-center">For Job Seekers</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            The World's Best
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">Remote Jobs</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who have transformed their careers through our platform.
            Access opportunities with innovative tech companies that value skills over location.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.text}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200"
              >
                <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-600" />
                </div>
                <span className="font-medium text-slate-700 text-sm">{benefit.text}</span>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {opportunities.map((opp) => {
            const Icon = opp.icon;
            return (
              <div
                key={opp.title}
                className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-200 transition-all duration-300 hover-lift"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{opp.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-5">{opp.description}</p>
                <span className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                  {opp.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            );
          })}
        </div>

        <div className="bg-navy-950 rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/[0.08] rounded-full blur-[100px]" />
          <div className="relative">
            <h3 className="text-3xl font-extrabold text-white mb-3 text-center">
              Explore Job Categories
            </h3>
            <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">
              Find your next career move across our most in-demand disciplines
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {jobCategories.map((category) => (
                <div
                  key={category.title}
                  className="group bg-white/[0.04] backdrop-blur-sm rounded-xl p-6 border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all cursor-pointer"
                >
                  <h4 className="text-lg font-bold text-white mb-3">{category.title}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-400 font-medium text-sm">{category.count}</span>
                    <span className="text-slate-500 text-sm">{category.salary}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-brand-500 text-white rounded-xl font-semibold hover:bg-brand-400 transition-all shadow-lg shadow-brand-500/25"
              >
                View All Job Openings
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
