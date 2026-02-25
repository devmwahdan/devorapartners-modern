import { Users, Building2, Award, TrendingUp } from 'lucide-react';

export default function Statistics() {
  const stats = [
    { icon: Users, value: '500+', label: 'Elite IT Professionals', color: 'text-brand-400' },
    { icon: Building2, value: '150+', label: 'Global Clients', color: 'text-blue-400' },
    { icon: Award, value: '98%', label: 'Client Satisfaction', color: 'text-emerald-400' },
    { icon: TrendingUp, value: '60%', label: 'Average Cost Savings', color: 'text-amber-400' },
  ];

  return (
    <div className="relative bg-navy-900 border-y border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-500/[0.03] via-transparent to-brand-500/[0.03]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/[0.08]">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center md:px-8 text-center">
                <Icon className={`w-5 h-5 ${stat.color} mb-3`} />
                <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
