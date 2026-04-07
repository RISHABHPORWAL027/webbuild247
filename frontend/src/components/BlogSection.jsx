import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      title: "5 Signs Your Business Needs a New Website",
      excerpt: "Is your website holding your business back? Here are the warning signs to look for.",
      category: "Business",
      readTime: "4 min read",
      date: "Dec 2024"
    },
    {
      title: "How to Choose the Right Web Development Partner",
      excerpt: "Key factors to consider when selecting a web development agency for your project.",
      category: "Guide",
      readTime: "5 min read",
      date: "Dec 2024"
    },
    {
      title: "Why Website Speed Matters for Your Business",
      excerpt: "Learn how page load time affects user experience, conversions, and SEO rankings.",
      category: "Performance",
      readTime: "6 min read",
      date: "Nov 2024"
    }
  ];

  return (
    <section id="blog" data-testid="blog-section" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-semibold text-[#0A346C] uppercase tracking-wider mb-3">
              Blog
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Latest Insights & Tips
            </h2>
          </div>
          <a 
            href="#blog" 
            className="text-[#0A346C] font-medium flex items-center gap-2 hover:gap-3 transition-all"
            data-testid="blog-view-all"
          >
            View All Articles
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="group bg-[#F6F6F6] rounded-xl overflow-hidden hover:shadow-lg transition-all border border-gray-100"
              data-testid={`blog-post-${index}`}
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#0A346C] to-[#3A5A85] flex items-center justify-center">
                <span className="text-white/30 text-6xl font-bold">{index + 1}</span>
              </div>
              
              <div className="p-6">
                {/* Category & Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#0A346C]/10 text-[#0A346C] text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-[#718096]">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-[#1A1A2E] mb-3 group-hover:text-[#0A346C] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-sm text-[#4A5568] mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-xs text-[#718096]">{post.date}</span>
                  <span className="text-[#0A346C] font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
