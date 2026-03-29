import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      title: "Why AI-Powered Development is the Future",
      excerpt: "Discover how AI is revolutionizing web development and what it means for your business.",
      category: "Technology",
      readTime: "5 min read",
      date: "Dec 2024"
    },
    {
      title: "5 Signs Your Business Needs a Website Redesign",
      excerpt: "Is your website holding your business back? Here are the warning signs to look for.",
      category: "Business",
      readTime: "4 min read",
      date: "Dec 2024"
    },
    {
      title: "The Ultimate Guide to Fast Website Loading",
      excerpt: "Speed matters. Learn how to make your website lightning fast and improve user experience.",
      category: "Performance",
      readTime: "6 min read",
      date: "Nov 2024"
    }
  ];

  return (
    <section id="blog" data-testid="blog-section" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-mono text-[#FFD700] mb-4">
              Blog
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Latest Insights
            </h2>
          </div>
          <a 
            href="#blog" 
            className="text-[#FFD700] font-medium flex items-center gap-2 hover:gap-3 transition-all"
            data-testid="blog-view-all"
          >
            View All Articles
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="group p-6 bg-[#0a0a0a] border border-white/10 card-hover cursor-pointer"
              data-testid={`blog-post-${index}`}
            >
              {/* Category & Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#FFD700] px-2 py-1 bg-[#FFD700]/10 border border-[#FFD700]/20">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                  <Clock size={12} />
                  {post.readTime}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#FFD700] transition-colors">
                {post.title}
              </h3>
              
              {/* Excerpt */}
              <p className="text-sm text-[#A1A1AA] mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-[#A1A1AA]">{post.date}</span>
                <ArrowRight size={16} className="text-white/30 group-hover:text-[#FFD700] transition-colors" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
