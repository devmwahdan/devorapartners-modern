import { MessageSquare, Brain, Code, Video, CheckCircle, FileCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Chat-Style Screening',
      description: 'Start with a conversational AI-powered interview to understand your background, experience, and career goals.',
      duration: '15-20 min',
    },
    {
      icon: Brain,
      title: 'Cognitive Aptitude Test',
      description: 'Assess your problem-solving abilities, logical reasoning, and analytical skills through standardized testing.',
      duration: '30 min',
    },
    {
      icon: Code,
      title: 'Prove Real-World Skills',
      description: 'Complete practical assignments that mirror actual job tasks. Show us what you can do in real scenarios.',
      duration: '2-4 hours',
    },
    {
      icon: Video,
      title: 'Hiring Manager Interview',
      description: 'Discuss your experience, approach, and fit with the actual team you\'ll be working with.',
      duration: '45-60 min',
    },
    {
      icon: FileCheck,
      title: 'Pass Proctored Test',
      description: 'Final verification of your skills under supervised conditions to ensure authenticity and capability.',
      duration: '1-2 hours',
    },
    {
      icon: CheckCircle,
      title: 'Accept Job Offer',
      description: 'Receive your offer, review terms, and join your new team. Welcome to the top 1% of global talent.',
      duration: 'Same day',
    },
  ];

  const processStats = [
    { label: 'Pass Rate', value: '12%', width: 'w-[12%]' },
    { label: 'Avg. Time to Hire', value: '14 days', width: 'w-[60%]' },
    { label: 'Candidate Satisfaction', value: '95%', width: 'w-[95%]' },
    { label: '1-Year Retention', value: '92%', width: 'w-[92%]' },
  ];

  return (
    <section id="process" className="relative py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-500/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label justify-center">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Our Selection Process
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Applying for a role? Here's what to expect. Our skill assessment process combines
            innovative AI power with decades of research to find the best talent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-200 transition-all duration-300 hover-lift"
              >
                <div className="absolute top-6 right-6 w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-brand-500/20">
                  {index + 1}
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
                  Duration: {item.duration}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-brand-600 to-brand-800 rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.05] rounded-full blur-[80px]" />
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-3xl font-extrabold mb-6">Why Our Process Works</h3>
              <ul className="space-y-5">
                {[
                  { title: 'Bias-Free Assessment', desc: 'Skills matter, not credentials or connections' },
                  { title: 'Real-World Testing', desc: 'Practical challenges that mirror actual job requirements' },
                  { title: 'AI-Powered Matching', desc: 'Smart algorithms ensure the perfect fit for both parties' },
                  { title: 'Fast & Transparent', desc: 'Know exactly where you stand at every step' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-300" />
                    <div>
                      <div className="font-semibold mb-0.5">{item.title}</div>
                      <div className="text-brand-100 text-sm">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/[0.08] backdrop-blur-sm rounded-2xl p-8 border border-white/[0.1]">
              <h4 className="text-xl font-bold text-white mb-6">Success Statistics</h4>
              <div className="space-y-5">
                {processStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-sm text-white mb-2">
                      <span className="text-brand-100">{stat.label}</span>
                      <span className="font-bold">{stat.value}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className={`bg-brand-300 rounded-full h-1.5 ${stat.width} transition-all`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy-950 text-white rounded-xl font-semibold hover:bg-navy-900 transition-all shadow-lg"
          >
            Ready to Start? Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
