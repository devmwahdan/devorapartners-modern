import { Star } from 'lucide-react';

export default function Clients() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CTO at TechVision Inc.',
      content: 'Working with Devora Partners transformed our development process. Their team delivered exceptional quality while reducing our costs significantly.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      name: 'Michael Chen',
      role: 'VP Engineering at DataFlow',
      content: 'The level of expertise and professionalism is outstanding. They quickly understood our needs and delivered beyond expectations.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder at CloudScale',
      content: 'Best decision we made was partnering with Devora Partners. Their dedicated team feels like an extension of our company.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
  ];

  const clientLogos = [
    'TechVision', 'DataFlow', 'CloudScale', 'InnovateCo',
    'NextGen', 'Digital+', 'SmartSys', 'FutureWeb',
  ];

  return (
    <section id="clients" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-brand-500/[0.03] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label justify-center">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-200 transition-all duration-300 hover-lift"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-center text-sm text-slate-400 font-medium uppercase tracking-wider mb-8">
            Trusted by companies worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="bg-slate-50 rounded-xl p-5 flex items-center justify-center border border-slate-200 hover:border-slate-300 transition-all group"
              >
                <span className="text-lg font-bold text-slate-300 group-hover:text-slate-500 transition-colors tracking-tight">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
