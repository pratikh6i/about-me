import { useState } from 'react';
import { motion } from 'framer-motion';
import { pythonProjects, cloudProjects, assetPath } from '../data/content';

function ProjectInventory() {
    const [activeTab, setActiveTab] = useState('python');

    const tabs = [
        { id: 'python', label: 'Python Projects', projects: pythonProjects, icons: [`${assetPath}/python-logo.svg`], color: '#fbbc04' },
        { id: 'cloud', label: 'Cloud Projects', projects: cloudProjects, icons: [`${assetPath}/gcp.svg`, `${assetPath}/aws-logo.svg`], color: '#4285f4' },
    ];

    const activeProjects = tabs.find(t => t.id === activeTab)?.projects || [];
    const activeIcons = tabs.find(t => t.id === activeTab)?.icons || [];
    const activeColor = tabs.find(t => t.id === activeTab)?.color || '#4285f4';

    return (
        <section className="py-14" id="projects">
            <div className="container">
                <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center gap-1.5 mb-4">
                        {['#4285f4', '#ea4335', '#fbbc04', '#34a853'].map((c) => (
                            <div key={c} className="w-2 h-2 rounded-full" style={{ backgroundColor: c }} />
                        ))}
                    </div>
                    <h2 className="section-heading mb-3">Project Inventory</h2>
                    <p className="section-subheading mx-auto">
                        A collection of personal and professional projects
                    </p>
                </motion.div>

                {/* Segmented Tab Control — Material 3 style */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex bg-gray-100 rounded-full p-1 gap-0.5">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${activeTab === tab.id
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                <div className="flex items-center gap-1">
                                    {tab.icons.map((icon, i) => (
                                        <img key={i} src={icon} alt="" className="w-4 h-4 object-contain" />
                                    ))}
                                </div>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    {activeProjects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-card-hover transition-all group relative overflow-hidden"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.04 }}
                            whileHover={{ y: -2 }}
                        >
                            {/* Colored dot indicator */}
                            <div
                                className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-60"
                                style={{ backgroundColor: activeColor }}
                            />

                            <div className="flex items-start gap-3">
                                <div className="flex gap-1 mt-0.5 shrink-0">
                                    {activeIcons.map((icon, i) => (
                                        <img key={i} src={icon} alt="" className="w-5 h-5 object-contain" />
                                    ))}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm text-gray-900 group-hover:text-google-blue transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{project.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    className="text-center text-sm text-gray-400 mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    More projects on{' '}
                    <a href="https://github.com/pratikh6i" target="_blank" rel="noopener noreferrer" className="text-google-blue hover:underline font-medium">
                        GitHub
                    </a>
                </motion.p>
            </div>
        </section>
    );
}

export default ProjectInventory;
