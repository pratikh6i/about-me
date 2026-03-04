import { useState } from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/content';

const tagColors = {
    'Advanced': '#ea4335',
    'Intermediate': '#4285f4',
    'Fundamental': '#34a853',
};

function BlogsSection() {
    const [showAll, setShowAll] = useState(false);
    const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 4);

    return (
        <section className="py-14 bg-gray-50/50" id="blogs">
            <div className="container">
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center gap-1.5 mb-4">
                        {['#4285f4', '#ea4335', '#fbbc04', '#34a853'].map((c) => (
                            <div key={c} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                        ))}
                    </div>
                    <h2 className="section-heading mb-2">The Workshop</h2>
                    <p className="section-subheading mx-auto mb-2">
                        A 90-Day Security Odyssey — hands-on deep-dives into cloud networking, security, and automation.
                    </p>
                    <a
                        href="https://pratikh6i.github.io/the-workshop/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-google-blue hover:underline"
                    >
                        View Full Blog →
                    </a>
                </motion.div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {displayedPosts.map((post, index) => (
                        <motion.a
                            key={post.url}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-xl border border-gray-100 p-5 shadow-card hover:shadow-card-hover transition-all group relative overflow-hidden flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -3 }}
                        >
                            {/* Colored top bar based on difficulty */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[3px]"
                                style={{ backgroundColor: tagColors[post.tag] || '#4285f4' }}
                            />

                            {/* Tag & Day */}
                            <div className="flex items-center justify-between mb-3">
                                <span
                                    className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
                                    style={{
                                        backgroundColor: `${tagColors[post.tag] || '#4285f4'}10`,
                                        color: tagColors[post.tag] || '#4285f4',
                                    }}
                                >
                                    {post.tag}
                                </span>
                                <span className="text-xs text-gray-400 font-medium">{post.day}</span>
                            </div>

                            {/* Title */}
                            <h3 className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-google-blue transition-colors leading-snug flex-grow">
                                {post.title}
                            </h3>

                            {/* Description */}
                            <p className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">
                                {post.description}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
                                <span className="text-xs text-gray-400">{post.readTime} read</span>
                                <span className="text-xs font-medium text-google-blue group-hover:underline">
                                    Read →
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Show More / Less */}
                {blogPosts.length > 4 && (
                    <motion.div
                        className="text-center mt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-5 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:shadow-sm transition-all"
                        >
                            {showAll ? 'Show Less' : `Show All ${blogPosts.length} Posts`}
                        </button>
                    </motion.div>
                )}

                {/* Attribution */}
                <motion.p
                    className="text-center text-xs text-gray-400 mt-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    More posts coming as part of the 90-Day Security Odyssey 🚀
                </motion.p>
            </div>
        </section>
    );
}

export default BlogsSection;
