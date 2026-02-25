import { Code2, Database, Cloud, Shield, Smartphone, Cog } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Build scalable, robust applications with our expert development teams specializing in modern frameworks and technologies.',
      accent: 'bg-brand-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate, deploy, and manage your infrastructure with our certified cloud architects and DevOps specialists.',
      accent: 'bg-blue-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Create stunning native and cross-platform mobile applications that deliver exceptional user experiences.',
      accent: 'bg-emerald-500',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Transform your data into actionable insights with advanced analytics, ETL pipelines, and data warehousing.',
      accent: 'bg-amber-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Services',
      description: 'Protect your digital assets with comprehensive security audits, penetration testing, and compliance solutions.',
      accent: 'bg-rose-500',
    },
    {
      icon: Cog,
      title: 'IT Consulting',
      description: 'Strategic technology guidance to optimize operations, reduce costs, and accelerate digital transformation.',
      accent: 'bg-slate-600',
    },
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-500/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label justify-center">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            End-to-end technology services tailored to your business needs, delivered by world-class professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover-lift overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className={`inline-flex p-3.5 rounded-xl ${service.accent}/10 mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${service.accent.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
