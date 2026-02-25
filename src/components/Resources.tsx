import { BookOpen, Video, FileText, TrendingUp, Newspaper, PlayCircle, ArrowRight } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      icon: Video,
      category: 'Video Series',
      title: 'Remote Work Revolution',
      description: 'Expert insights on building successful remote teams and thriving in distributed work environments.',
      badge: 'New',
    },
    {
      icon: BookOpen,
      category: 'E-Books',
      title: 'The Remote Hiring Handbook',
      description: 'Complete guide to finding, vetting, and onboarding top global talent for your tech team.',
      badge: 'Popular',
    },
    {
      icon: FileText,
      category: 'Case Studies',
      title: 'Success Stories',
      description: 'Real companies sharing how they scaled their teams and reduced costs with remote talent.',
      badge: null,
    },
    {
      icon: TrendingUp,
      category: 'Reports',
      title: '2026 Remote Work Trends',
      description: 'Data-driven insights into the future of work, salary benchmarks, and industry predictions.',
      badge: 'Featured',
    },
    {
      icon: Newspaper,
      category: 'Blog',
      title: 'Latest Articles',
      description: 'Weekly updates on remote work best practices, tech trends, and career development tips.',
      badge: null,
    },
    {
      icon: PlayCircle,
      category: 'Webinars',
      title: 'Live Expert Sessions',
      description: 'Join live Q&A sessions with industry leaders, hiring managers, and successful remote professionals.',
      badge: 'Live',
    },
  ];

  const featuredArticles = [
    {
      title: 'How to Ace Remote Job Interviews',
      category: 'Career Tips',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Building High-Performance Distributed Teams',
      category: 'For Companies',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Top 10 In-Demand Tech Skills for 2026',
      category: 'Industry Trends',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="resources" className="relative py-20 md:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-500/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label justify-center">Resources</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Knowledge Center
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From the big picture to the tiny details, everything you need to supercharge
            your remote career or build your distributed team is right here.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.title}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-brand-200 transition-all duration-300 hover-lift overflow-hidden"
              >
                {resource.badge && (
                  <div className="absolute top-6 right-6 px-2.5 py-0.5 bg-brand-500 text-white text-xs font-bold rounded-md">
                    {resource.badge}
                  </div>
                )}
                <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-500 transition-colors">
                  <Icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs text-brand-600 font-semibold uppercase tracking-wider mb-2">{resource.category}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{resource.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{resource.description}</p>
                <span className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-extrabold text-slate-900">Featured Articles</h3>
            <a href="#" className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm hover:gap-2.5 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <div
                key={article.title}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-200 transition-all duration-300 hover-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-slate-900">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {article.title}
                  </h4>
                  <div className="text-xs text-slate-500">{article.readTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-navy-950 rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-brand-500/[0.06] rounded-full blur-[100px]" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-white mb-4">Join Our Community</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Subscribe to our newsletter and get weekly insights, job alerts, and exclusive
                resources delivered to your inbox. Join 50,000+ professionals already benefiting.
              </p>
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-brand-500 text-white rounded-xl font-semibold hover:bg-brand-400 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '500+', label: 'Articles Published' },
                { value: '50K+', label: 'Newsletter Subscribers' },
                { value: '100+', label: 'Video Tutorials' },
                { value: '24/7', label: 'Support Available' },
              ].map((s) => (
                <div key={s.label} className="bg-white/[0.04] backdrop-blur-sm rounded-xl p-5 border border-white/[0.08]">
                  <div className="text-2xl font-extrabold text-white mb-1">{s.value}</div>
                  <div className="text-slate-500 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
