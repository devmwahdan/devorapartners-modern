import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const highlights = [
    'Top 1% Global IT Talent',
    'Pre-Vetted Professionals',
    '130+ Countries Coverage',
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-500/[0.07] rounded-full blur-[120px] animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-400/[0.05] rounded-full blur-[100px] animate-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32">
        <div className="max-w-4xl">
          <div className="animate-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              Now Hiring Across 70+ Roles
            </span>
          </div>

          <h1 className="animate-in animate-in-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
            The World's Best
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500">
              Remote IT Talent
            </span>
            <br />
            On Demand
          </h1>

          <p className="animate-in animate-in-delay-2 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
            Access rigorously vetted software engineers, data scientists, and IT leaders from 130+ countries.
            Cut hiring costs by 60% while building elite distributed teams.
          </p>

          <div className="animate-in animate-in-delay-3 flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-brand-500 text-white rounded-xl font-semibold text-base hover:bg-brand-400 transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40"
            >
              Start Hiring
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#process"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/[0.06] text-white rounded-xl font-semibold text-base border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.15] transition-all backdrop-blur-sm"
            >
              <Play className="w-4 h-4 text-brand-400" />
              How It Works
            </a>
          </div>

          <div className="animate-in animate-in-delay-4 flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 w-[380px]">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-b from-brand-500/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-white/[0.08] p-6 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold text-sm">Live Openings</span>
                <span className="text-brand-400 text-xs font-medium px-2 py-0.5 bg-brand-500/10 rounded-full">328 roles</span>
              </div>
              {[
                { role: 'Senior React Engineer', salary: '$120k-$150k', tag: 'Remote' },
                { role: 'ML/AI Specialist', salary: '$140k-$180k', tag: 'Remote' },
                { role: 'DevOps Architect', salary: '$130k-$160k', tag: 'Remote' },
                { role: 'Full-Stack Developer', salary: '$100k-$140k', tag: 'Remote' },
              ].map((job) => (
                <div key={job.role} className="flex items-center justify-between py-3 border-t border-white/[0.06]">
                  <div>
                    <div className="text-white text-sm font-medium">{job.role}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{job.salary}</div>
                  </div>
                  <span className="text-xs text-brand-400 font-medium px-2 py-1 bg-brand-500/10 rounded-md">{job.tag}</span>
                </div>
              ))}
              <div className="pt-2">
                <a href="#job-seekers" className="text-brand-400 text-sm font-medium hover:text-brand-300 transition-colors flex items-center gap-1">
                  View all openings <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80',
                'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=80',
                'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80',
                'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=80',
              ].map((src, i) => (
                <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-navy-950 object-cover" />
              ))}
            </div>
            <span className="text-slate-500 text-xs">
              <span className="text-white font-medium">500+</span> professionals placed this year
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
    </div>
  );
}
