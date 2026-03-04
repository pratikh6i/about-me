import { profileData, assetPath } from '../data/content';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden" id="footer">
            {/* Google-colored accent bar at top */}
            <div className="flex h-[3px] relative z-10">
                <div className="flex-1" style={{ backgroundColor: '#4285f4' }} />
                <div className="flex-1" style={{ backgroundColor: '#ea4335' }} />
                <div className="flex-1" style={{ backgroundColor: '#fbbc04' }} />
                <div className="flex-1" style={{ backgroundColor: '#34a853' }} />
            </div>

            {/* Datacenter Background */}
            <div className="absolute inset-0 top-[3px]">
                <img
                    src={`${assetPath}/datacenter-bg.png`}
                    alt=""
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/80 to-gray-900/70" />
            </div>

            <div className="container relative z-10 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    {/* Left */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                            {/* Google 4-dot logo instead of PS */}
                            <div className="flex items-center gap-[3px]">
                                {['#4285f4', '#ea4335', '#fbbc04', '#34a853'].map((c) => (
                                    <div
                                        key={c}
                                        className="w-2 h-2 rounded-full"
                                        style={{ backgroundColor: c }}
                                    />
                                ))}
                            </div>
                            <span className="font-semibold text-white text-sm">{profileData.name}</span>
                        </div>
                        <p className="text-sm text-gray-300">{profileData.currentRole}</p>
                    </div>

                    {/* Center - Social Links */}
                    <div className="flex items-center gap-2.5">
                        <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer"
                            className="w-9 h-9 rounded-xl border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#0077b5] hover:border-transparent transition-all" title="LinkedIn">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href={profileData.links.github} target="_blank" rel="noopener noreferrer"
                            className="w-9 h-9 rounded-xl border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 hover:border-transparent transition-all" title="GitHub">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href={profileData.links.twitter} target="_blank" rel="noopener noreferrer"
                            className="w-9 h-9 rounded-xl border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1da1f2] hover:border-transparent transition-all" title="X (Twitter)">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href={profileData.links.resume} target="_blank" rel="noopener noreferrer"
                            className="ml-1 px-4 py-2 rounded-xl bg-google-blue text-white text-xs font-medium hover:bg-blue-500 transition-all shadow-sm hover:shadow-glow-blue inline-flex items-center gap-1.5">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                            </svg>
                            Resume
                        </a>
                    </div>

                    {/* Right - Copyright */}
                    <p className="text-xs text-gray-400 text-center md:text-right">
                        © {currentYear} {profileData.name}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
