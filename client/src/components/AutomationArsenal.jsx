import { motion } from 'framer-motion';
import { assetPath } from '../data/content';
import { useState } from 'react';
import { automationArsenal } from '../data/content';

// Icon components for each tech type
const TechIcons = {
    sheets: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="#0F9D58" />
            <path d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z" fill="white" />
        </svg>
    ),
    python: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#3776AB">
            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05z" />
        </svg>
    ),
    bash: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#4EAA25">
            <path d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM10 18H6v-2h4v2zm8-4H6v-2h12v2zm0-4H6V8h12v2z" />
        </svg>
    ),
    terraform: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#7B42BC">
            <path d="M1 8.5v7l6 3.5v-7l-6-3.5zM8.5 5v7l6 3.5v-7l-6-3.5zM8.5 16.5v7l6-3.5v-7l-6 3.5zM16 9v7l6-3.5v-7l-6 3.5z" />
        </svg>
    ),
    gemini: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z" fill="url(#gemini_grad)" />
            <defs>
                <linearGradient id="gemini_grad" x1="2" y1="12" x2="22" y2="12">
                    <stop stopColor="#4285F4" />
                    <stop offset="0.5" stopColor="#EA4335" />
                    <stop offset="1" stopColor="#FBBC05" />
                </linearGradient>
            </defs>
        </svg>
    ),
    default: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#6b7280">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
    ),
};

function AutomationArsenal() {
    return (
        <section className="py-16 bg-[var(--bg-tertiary)]" id="automation">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="relative inline-block">
                        <motion.img
                            src={`${assetPath}/santa-hat.svg`}
                            className="absolute -top-7 -left-4 w-10 h-10 pointer-events-none z-20"
                            initial={{ rotate: -20, y: 5, opacity: 0 }}
                            whileInView={{ rotate: -15, y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                        />
                        < h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3" >
                            The Automation Arsenal
                        </h2 >
                    </div >
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Most security engineers just monitor. <span className="font-semibold text-[var(--accent-primary)]">I build.</span> Here are custom tools I've created to automate the boring stuff.
                    </p>
                </motion.div >

                {/* Tools Grid */}
                < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
                    {
                        automationArsenal.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                className="bg-white rounded-2xl border border-[var(--border-subtle)] p-6 hover:shadow-lg hover:border-[var(--accent-primary)] transition-all group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -4 }}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="h-10 rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center group-hover:bg-blue-50 transition-colors p-2 gap-2">
                                        {tool.icons && tool.icons.length > 0 ? (
                                            tool.icons.map((icon, idx) => (
                                                <img key={idx} src={icon} alt={tool.tech} className="h-full w-auto object-contain" />
                                            ))
                                        ) : (
                                            TechIcons[tool.iconType] || TechIcons.default
                                        )}
                                    </div>
                                    <span className="px-2 py-1 text-xs font-medium rounded-md bg-[var(--bg-tertiary)] text-[var(--text-secondary)] group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                                        {tool.tech}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                                    {tool.name}
                                </h3>
                                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                                    {tool.description}
                                </p>

                                {/* GitHub Link */}
                                {tool.githubLink !== "#" ? (
                                    <a
                                        href={tool.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-primary)] hover:underline"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        View on GitHub
                                    </a>
                                ) : (
                                    <span className="text-xs text-[var(--text-tertiary)] italic">
                                        Private/Internal Tool
                                    </span>
                                )}
                            </motion.div>
                        ))
                    }
                </div >

                {/* Bottom CTA */}
                < motion.div
                    className="mt-10 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm text-[var(--text-secondary)] mb-4">
                        These tools have saved hundreds of hours of manual work across multiple clients.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                        Built with Python, Bash, Terraform & Gemini
                    </div>
                </motion.div >
            </div >
        </section >
    );
}

export default AutomationArsenal;
