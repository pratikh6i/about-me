import { motion } from 'framer-motion';
import { assetPath } from '../data/content';

const aiProjects = [
    {
        title: 'SCC Finding Advisor — Gemini Gem',
        description: 'Custom Google Gemini Gem that provides easy-to-understand descriptions and remediation recommendations for any GCP Security Command Center finding, based on official Google documentation but explained for practical business use cases.',
        tech: ['Gemini', 'SCC', 'GCP'],
        color: '#4285f4',
        icon: 'gemini',
        type: 'AI Tool',
    },
    {
        title: 'Cloud Armor Dashboard',
        description: 'Built a Bash script to extract Cloud Armor data across all projects, exporting to CSV. Created a web dashboard that visualizes insights with filterable graphs — filter by Rule, Project ID, and more, similar to the SCC dashboard experience.',
        tech: ['Bash', 'React', 'Cloud Armor'],
        color: '#34a853',
        icon: 'chart',
        type: 'Dashboard',
    },
    {
        title: 'SCC Report Generator',
        description: 'Web-based tool deployed on Vercel with SSO. Team exports raw SCC data, uploads to the webapp — it auto-generates formatted Google Sheets reports and custom security reports for Google Cloud Partner submissions. Supports severity filtering and project-based splitting.',
        tech: ['Next.js', 'Google Drive API', 'Vercel'],
        color: '#ea4335',
        icon: 'report',
        type: 'Web App',
    },
    {
        title: 'AWS Controls Scraper',
        description: 'Rapidly built a custom web scraper with Gemini to extract 360+ AWS security controls with severity, description, and category data — saving a colleague hours of manual work. Delivered in minutes, for a cup of coffee.',
        tech: ['Python', 'Gemini', 'Web Scraping'],
        color: '#fbbc04',
        icon: 'scraper',
        type: 'Automation',
    },
    {
        title: 'Wholesale Store Tracker',
        description: 'Custom inventory management tool built in ~3 hours for a friend\'s wholesale shop. Tracks item inflow, remaining stock, sales, and pricing — deployed on Vercel with SSO authentication.',
        tech: ['React', 'Vercel', 'SSO'],
        color: '#4285f4',
        icon: 'store',
        type: 'Web App',
    },
];

const aiToolsExplored = [
    { name: 'Gemini 3+', category: 'Core AI' },
    { name: 'Claude', category: 'Core AI' },
    { name: 'Antigravity', category: 'Coding' },
    { name: 'Cursor AI', category: 'Coding' },
    { name: 'NotebookLM', category: 'Research' },
    { name: 'Google Veo', category: 'Creative' },
    { name: 'Google Lyria', category: 'Creative' },
    { name: 'Google Disco', category: 'Creative' },
    { name: 'Nano Banana', category: 'Creative' },
    { name: 'Workspace AI', category: 'Productivity' },
];

const iconMap = {
    gemini: (
        <img src={`${assetPath}/gemini-logo.svg`} alt="Gemini" className="w-7 h-7" />
    ),
    chart: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34a853" strokeWidth="2" strokeLinecap="round">
            <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
    ),
    report: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea4335" strokeWidth="2" strokeLinecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
    ),
    scraper: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fbbc04" strokeWidth="2" strokeLinecap="round">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
    ),
    store: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4285f4" strokeWidth="2" strokeLinecap="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    ),
};

const categoryColors = {
    'Core AI': '#4285f4',
    'Coding': '#ea4335',
    'Research': '#34a853',
    'Creative': '#9b72cb',
    'Productivity': '#fbbc04',
};

function AIInnovation() {
    return (
        <section className="py-14" id="ai-innovation">
            <div className="container">
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <img src={`${assetPath}/gemini-logo.svg`} alt="Gemini" className="w-5 h-5" />
                        <span className="text-sm font-semibold text-google-blue tracking-wide uppercase">
                            AI-Powered
                        </span>
                    </div>
                    <h2 className="section-heading mb-3">AI & Innovation Lab</h2>
                    <p className="section-subheading mx-auto">
                        Leveraging AI to build tools that save hours, automate grunt work, and help teammates ship faster.
                    </p>
                </motion.div>

                {/* Tools I've Built Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {aiProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="bg-white rounded-xl border border-gray-100 p-5 shadow-card hover:shadow-card-hover transition-all group relative overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06 }}
                            whileHover={{ y: -3 }}
                        >
                            {/* Accent bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[3px]"
                                style={{ backgroundColor: project.color }}
                            />

                            <div className="flex items-start justify-between mb-3">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                                    style={{ backgroundColor: `${project.color}10` }}
                                >
                                    {iconMap[project.icon]}
                                </div>
                                <span
                                    className="px-2.5 py-1 text-xs font-semibold rounded-full"
                                    style={{
                                        backgroundColor: `${project.color}10`,
                                        color: project.color,
                                    }}
                                >
                                    {project.type}
                                </span>
                            </div>

                            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-google-blue transition-colors text-sm leading-snug">
                                {project.title}
                            </h3>
                            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2 py-0.5 text-xs font-medium rounded-md"
                                        style={{
                                            backgroundColor: `${project.color}08`,
                                            color: project.color,
                                        }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* AI Explorer Section */}
                <motion.div
                    className="mt-8 bg-white rounded-xl border border-gray-100 p-6 shadow-card relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#ea4335]" />

                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                            <img src={`${assetPath}/gemini-logo.svg`} alt="" className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">AI Explorer & Advocate</h3>
                            <p className="text-xs text-gray-500">Using AI every day to improve life & work — every hour, every task</p>
                        </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        Constantly exploring and adopting the latest AI tools to push efficiency. From workspace AI workflows for summaries and automation,
                        to collaborating with colleagues to help them discover how they can use AI in their everyday work — saving hours of manual effort across the team.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {aiToolsExplored.map((tool) => (
                            <span
                                key={tool.name}
                                className="px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors hover:shadow-sm"
                                style={{
                                    backgroundColor: `${categoryColors[tool.category]}08`,
                                    borderColor: `${categoryColors[tool.category]}25`,
                                    color: categoryColors[tool.category],
                                }}
                            >
                                {tool.name}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Attribution */}
                <motion.div
                    className="mt-6 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-google-blue text-sm font-medium border border-blue-100">
                        <img src={`${assetPath}/gemini-logo.svg`} alt="" className="w-4 h-4" />
                        Helping teammates adopt AI for faster, smarter workflows
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default AIInnovation;
