// Core content data for the portfolio
// All text content is in English - Google Translate widget handles other languages

// Image base path - for GitHub Pages deployment from public folder
export const assetPath = '/about-me/assets';

export const profileData = {
    name: "Pratik Shetti",
    tagline: "Cloud Security Engineer | Automation Specialist | Vibe Coder",
    subtext: "Securing 500+ GCP Projects & Automating Operations with Python, Shell & Gemini",
    location: "Pune, Maharashtra, India",
    currentRole: "Cloud Security Engineer @ Searce INC",
    since: "May 2024",

    // Social Links
    links: {
        linkedin: "https://www.linkedin.com/in/pratikshetti/",
        github: "https://github.com/pratikh6i",
        twitter: "https://x.com/pratik_h6i",
        skillBoost: "https://www.skills.google/public_profiles/14a39d36-3d88-4a0c-85ec-9533ba770ac1",
        resume: "https://drive.google.com/file/d/1YEy9BSAtQxvmhxCIYss-64vPK8DPKr9U/view?usp=sharing",
    },

    // Stats
    stats: {
        yearsExp: "1.5+",
        yearsLabel: "Years in Security Ops",
        clients: "8+",
        clientsLabel: "Enterprise Clients",
        scripts: "20+",
        scriptsLabel: "Automation Scripts",
        sops: "25+",
        sopsLabel: "SOPs Created",
    },
};

// 8 Client Case Studies - Sorted by Region (AMER/EMEA first, then APAC) and Coloring (EMEA/AMER=Purple/Pink, APAC=Blue)
export const clientCaseStudies = [
    // --- AMER / EMEA ---
    {
        id: "client-vitu",
        title: "Cloud NGFW Project",
        industry: "AMER",
        tagColor: "#854d0e", // Dark amber/brown for clear visibility
        tagBg: "#fef9c3",    // Solid light yellow
        duration: "Ongoing",
        metric: "Dev/Test/Prod Environments",
        role: "Cloud Security Engineer NGFW Analyst",
        mission: "Executing firewall strategies across multiple environments",
        responsibilities: [
            "Execute firewall policy strategies across Dev, Test, and Prod environments",
            "Daily infrastructure analysis, deep log monitoring, and threat hunting",
            "Run POCs in personal environment to validate configurations",
            "Available for critical maintenance windows and deployment calls",
            "Raised and resolved Google cases for complex issues",
        ],
        techStack: ["Cloud NGFW", "Firewall Policies", "Log Analysis"],
        stats: { "Environments": "3", "Type": "NGFW" },
    },
    {
        id: "client-cxapp",
        title: "Enterprise SaaS Platform",
        industry: "AMER & EMEA",
        tagColor: "#854d0e", // Dark yellow/brown for visibility
        tagBg: "#fef9c3",    // Light yellow background
        duration: "Completed (7 hours)",
        metric: "5,000+ Findings Processed",
        role: "GCP Security Analyst",
        mission: "Urgent security analysis with zero GCP access - just raw data exports",
        responsibilities: [
            "Took complete ownership of raw SCC data dump from infrastructure team",
            "Processed 5,000+ findings across 50+ finding categories",
            "Used previously built automation scripts for data transformation",
            "Sorted, aligned, and added security best practices for each category",
            "Delivered production-ready SCC report in just 5 hours",
            "Met urgent director-level deadline with zero environment access",
        ],
        techStack: ["Python", "Apps Script", "SCC CSV Processing"],
        stats: { "Findings": "5,000+", "Categories": "50+", "Delivery Time": "7 hours" },
    },
    {
        id: "client-awr",
        title: "Global Automotive & Lifestyle Group",
        industry: "EMEA",
        tagColor: "#854d0e",
        tagBg: "#fef9c3",
        duration: "14+ months (Ongoing)",
        metric: "130+ GCP Projects",
        role: "WAF & Security Operations and Automations Builder",
        mission: "End-to-end security operations for a massive 100+ project GCP organization",
        responsibilities: [
            "Daily organization-level SCC checks for High/Critical findings with immediate remediation",
            "Primary owner of Cloud Armor WAF implementation and maintenance",
            "Monthly security reporting with project-wise finding analysis for management",
            "Regular VM patching across the organization with complete SOP documentation",
            "Deep WAF log analysis for true/false positives, verbose log debugging, HAR file analysis",
            "Resolved 80 of 130 technical tickets and numerous Teams channel requests",
            "Built Python/gcloud scripts for Cloud Armor analysis, SSL policies, bucket audits",
            "Customer call participation (4x/week) with MoM documentation since Jan 2025",
        ],
        techStack: ["Cloud Armor", "SCC", "Python", "Bash", "gcloud CLI", "Workspace"],
        stats: { "Tickets Resolved": "80/130", "Projects": "100+", "Months": "14+" },
    },
    {
        id: "client-ism",
        title: "EU Gaming Platform",
        industry: "EU", // EMEA
        tagColor: "#854d0e",
        tagBg: "#fef9c3",
        duration: "Ongoing",
        metric: "IaC-First Approach",
        role: "CNAPP Tool Specialist",
        mission: "Implementing Prowler CNAPP tool with full Terraform automation",
        responsibilities: [
            "Self-learned Prowler CNAPP tool from scratch",
            "Completed working POC in personal dev environment",
            "Debugged and fixed .env configuration issues with Gemini assistance",
            "Created complete Terraform code for customer's IaC-first approach",
            "Reviewed every line of Gemini-generated code before deployment",
            "Created SOP documentation for internal Prowler deployment reference",
        ],
        techStack: ["Prowler", "Terraform", "Gemini", "GCP"],
        stats: { "Tool Deployed": "Prowler", "Approach": "IaC" },
    },

    // --- APAC (Blue) ---
    {
        id: "client-ael",
        title: "The Indian E-Commerce Giant",
        industry: "APAC",
        tagColor: "#1d4ed8", // Blue
        tagBg: "#dbeafe",
        duration: "Completed",
        metric: "80L+ requests/week",
        role: "The Security Analyst",
        mission: "Protecting one of India's largest retail platforms handling 80-120 Lakh requests weekly",
        responsibilities: [
            "Daily deep log analysis and threat hunting using Cloud Armor logs and Log Analytics",
            "Prepared daily IP Analysis reports covering 24-hour production traffic patterns",
            "Delivered 42+ weekly security reports analyzing SCC findings",
            "Stood firm during War Room scenarios during India-Pakistan tensions",
            "Supported critical Disaster Recovery drills during late-night windows",
            "Created 6 SOPs and demo documents for security operations",
        ],
        techStack: ["Cloud Armor", "SCC", "Tenable", "Log Analytics", "Google Workspace"],
        stats: { "Weekly Reports": "42+", "IP Reports": "130+", "SOPs": "6" },
    },
    {
        id: "client-pickme",
        title: "Ride-Hailing Superapp",
        industry: "APAC",
        tagColor: "#1d4ed8",
        tagBg: "#dbeafe",
        duration: "Completed",
        metric: "Zero-Tool Assessment",
        role: "Security Analyst & The Scripting Specialist",
        mission: "Security assessment for a client with no existing security tools",
        responsibilities: [
            "Created 7 custom Bash scripts to scan infrastructure from security perspective",
            "Scripts covered: Service account security, public IP exposure, Shielded VM status",
            "Audited Secure Boot, vTPM, Integrity Monitoring, OS Config, serial ports",
            "Generated 18 of 23 security reports single-handedly",
            "Conducted multiple POCs for security scenarios requested by client",
            "Attended weekly/monthly meetings with MoM documentation",
        ],
        techStack: ["Bash", "gcloud CLI", "Custom Scripts", "Shielded VM"],
        stats: { "Custom Scripts": "7", "Reports Created": "18/23" },
    },
    {
        id: "client-ntuc",
        title: "Leading Insurance Provider",
        industry: "APAC",
        tagColor: "#1d4ed8",
        tagBg: "#dbeafe",
        duration: "Completed",
        metric: "120+ GCP Projects",
        role: "Security Analyst and Automation Builder",
        mission: "Scaling security operations across 120+ GCP projects with intelligent automation",
        responsibilities: [
            "Built Cloud Run + Pub/Sub automation for intelligent SCC alert routing",
            "Wrote Terraform code for the complete alerting infrastructure",
            "Created Google Chat webhook integration for team-specific notifications",
            "Developed IAM recommendation reports for least-privilege access across 100s of users",
            "Built Gemini-powered automation saving 30 mins per SCC report sheet",
            "Created escalation matrix with SOP and flowchart documentation",
            "Authored SCC user guide with screenshots for client teams",
        ],
        techStack: ["Cloud Run", "Pub/Sub", "Terraform", "Gemini", "Apps Script"],
        stats: { "Projects Analyzed": "120+", "Reports Created": "130+ Security Reports", "SOPs": "6" },
    },
    {
        id: "client-redcliff",
        title: "HealthTech Platform",
        industry: "APAC",
        tagColor: "#1d4ed8",
        tagBg: "#dbeafe",
        duration: "Completed",
        metric: "Deep Security Assessment",
        role: "Security Analyst & Tool Evaluator",
        mission: "One-time comprehensive security assessment with best practice recommendations",
        responsibilities: [
            "Conducted deep security assessment of entire GCP infrastructure",
            "Prepared executive-level security reports with affected resources",
            "Provided best practice recommendations for each finding category",
            "Led extensive POC of ThreatMapper security tool",
            "Created complete SOP for ThreatMapper installation with screenshots",
        ],
        techStack: ["SCC", "ThreatMapper", "Security Best Practices"],
        stats: { "Assessment Type": "Deep Dive", "Tool POC": "ThreatMapper" },
    },
];

// Automation Arsenal - Tools Built (with Google Sheets icon for SCC Cleaner)
export const automationArsenal = [
    {
        name: "GCP SCC Cleaner",
        description: "Auto-formatting complex JSON to clean CSV for executive reporting",
        tech: "Apps Script",
        icons: [`${assetPath}/sheets-logo.svg`, `${assetPath}/google-apps-script.svg`],
        githubLink: "#",
    },
    {
        name: "Cloud Armor Log Batcher",
        description: "Exported logs to bigquery and designed custom specific quieries to help with requiremetns at the time",
        tech: "BigQuery",
        icons: [`${assetPath}/bash-logo.svg`],
        githubLink: "#",
    },
    {
        name: "Infrastructure Auditor",
        description: "Scanning 500+ projects for public IP exposure and firewall gaps",
        tech: "Asset Inventory",
        icons: [`${assetPath}/bash-logo.svg`, `${assetPath}/sheets-logo.svg`],
        githubLink: "#",
    },
    {
        name: "Prowler Deployer",
        description: "Automated Prowler deployment across organizations via Cloud Build",
        tech: "Cloud Build",
        icons: [`${assetPath}/bash-logo.svg`, `${assetPath}/terraform-logo.svg`],
        githubLink: "https://prowler.com",
    },
    {
        name: "IP Blacklist Checker",
        description: "Validating 1000s of IPs against abuse databases automatically",
        tech: "Threat Intel",
        icons: [`${assetPath}/sheets-logo.svg`, `${assetPath}/google-apps-script.svg`],
        githubLink: "#",
    },
    {
        name: "Cloud Armor Bulk Updater",
        description: "Updating thousands of security policies in seconds via API",
        tech: "GCP API",
        icons: [`${assetPath}/bash-logo.svg`],
        githubLink: "#",
    },
    {
        name: "SSL Policy Manager",
        description: "Forcing TLS 1.2+ across all load balancers in the organization",
        tech: "Security",
        icons: [`${assetPath}/bash-logo.svg`, `${assetPath}/python-logo.svg`],
        githubLink: "#",
    },
    {
        name: "SCC Alert Router",
        description: "Routing critical alerts to Jira/Slack based on severity & project",
        tech: "Pub/Sub",
        icons: [`${assetPath}/bash-logo.svg`, `${assetPath}/terraform-logo.svg`, `${assetPath}/python-logo.svg`],
        githubLink: "#",
    },
    {
        name: "IAM Recommender Parser",
        description: "Parsing IAM recommendations to identify over-privileged accounts",
        tech: "IAM",
        icons: [`${assetPath}/python-logo.svg`],
        githubLink: "#",
    },
    {
        name: "Gemini Report Generator",
        description: "Using GenAI to summarize weekly security incidents for C-suite",
        tech: "GenAI",
        icons: [`${assetPath}/gemini-logo.svg`, `${assetPath}/sheets-logo.svg`, `${assetPath}/google-apps-script.svg`],
        githubLink: "#",
    },
];

// Certifications with verification (added Digital Marketing)
export const certifications = [
    {
        name: "Associate Cloud Engineer",
        provider: "Google Cloud",
        badge: `${assetPath}/ace-badge.png`,
        color: "#4285f4",
        verifyUrl: "https://www.credly.com/badges/fad5ab70-4178-45e9-90f3-aa0050f1ec42",
    },
    {
        name: "Cloud Digital Leader",
        provider: "Google Cloud",
        badge: `${assetPath}/cdl-badge.png`,
        color: "#34a853",
        verifyUrl: "https://www.credly.com/badges/7ea201f9-eed7-45a2-8358-b5269184a4ad",
    },
    {
        name: "AWS Cloud Practitioner",
        provider: "AWS",
        badge: `${assetPath}/aws-ccp-badge.png`,
        color: "#ff9900",
        verifyUrl: "https://www.credly.com/badges/e0fdc077-9ae3-43e5-a19e-8f74210c401d",
    },
    {
        name: "Fundamentals of Digital Marketing",
        provider: "Google",
        badge: null, // No badge image
        color: "#4285f4",
        verifyUrl: "https://drive.google.com/file/d/1E5fxD9VSt9rYhm2Aw0ifGcDN4AAOoUCg/view",
    },
];

// Tech Arsenal - Reorganized
export const techArsenal = {
    cloudSecurity: {
        title: "Cloud Security (GCP)",
        color: "#ea4335",
        bgColor: "#fef2f2",
        skills: [
            "Security Command Center",
            "Cloud Armor WAF",
            "IAM & Policies",
            "VPC & Firewall",
            "Cloud NGFW",
            "Cloud Logging",
            "Audit Logs",
            "Network Security", // Moved here
        ],
    },
    infrastructure: {
        title: "Infrastructure",
        color: "#ea580c",
        bgColor: "#fff7ed",
        skills: ["Terraform", "Linux", "GCP", "AWS"], // Added Terraform, Removed Network Security
    },
    automation: {
        title: "Scripting & Automation",
        color: "#2563eb",
        bgColor: "#eff6ff",
        skills: ["Python", "Bash", "Apps Script", "gcloud CLI"],
    },
    cnapp: {
        title: "CNAPP Tools",
        color: "#9333ea",
        bgColor: "#faf5ff",
        skills: ["Prowler", "ThreatMapper", "Tenable"],
    },
    workspace: {
        title: "Google Workspace",
        color: "#16a34a",
        bgColor: "#f0fdf4",
        skills: ["Sheets", "Docs", "Apps Script"],
    },
};

// Python Projects Inventory
export const pythonProjects = [
    { name: "Password Manager", desc: "Secure password generator and encrypted storage application" },
    { name: "Interactive Quiz (API)", desc: "Trivia quiz application using external API integration" },
    { name: "Snake Game (GUI)", desc: "Classic arcade Snake game with Tkinter GUI" },
    { name: "US States Game", desc: "Educational geography game for identifying US states" },
    { name: "Birthday Wisher (API)", desc: "Automated birthday email system using SMTP" },
    { name: "Weather Email Updates", desc: "Script fetching weather data and sending email updates" },
    { name: "GCP SCC Processor", desc: "JSON to CSV transformation for security reports" },
    { name: "IP Blacklist Checker", desc: "IP analysis tool with 3rd party API integration" },
    { name: "Cloud Armor Analyzer", desc: "Bulk log link generator for security analysis" },
];

// Cloud Projects Inventory
export const cloudProjects = [
    { name: "AWS Terraform Architecture", desc: "Secure cloud architecture with EC2, S3, RDS, and ELB using IaC" },
    { name: "AWS VPC Setup", desc: "Scalable network with subnets, IGW, route tables, and security groups" },
    { name: "Elastic Beanstalk Deployment", desc: "Web app with automated provisioning, load balancing, and scaling" },
    { name: "Serverless Blog", desc: "Cost-effective architecture using S3, Lambda, DynamoDB, API Gateway, Cognito" },
    { name: "S3 Static Hosting", desc: "Website deployment using HTML/CSS/JS on S3" },
    { name: "Serverless Image Processor", desc: "Lambda function for image B&W conversion with S3 triggers and email notifications" },
    { name: "CloudWatch Monitoring", desc: "Monitoring and notification setup for key AWS resource metrics" },
    { name: "SCC Alert Automation", desc: "Cloud Run + Pub/Sub for intelligent security alert routing" },
    { name: "Prowler IaC Deployment", desc: "Complete Terraform code for CNAPP tool deployment" },
];

// Achievements (added Best Engineer)
export const achievements = [
    {
        title: "Best Engineer of the Quarter",
        description: "Recognized for exceptional performance and contributions",
        venue: "Searce INC",
        year: "Oct 2025",
        prize: "Recognition Award",
    },
    {
        title: "Smart India Hackathon Winner",
        description: "Presented prototype solution for global water management system",
        venue: "IIT Roorkee",
        year: "2022",
        prize: "₹1 Lakh",
    },
    {
        title: "Problem to Prosperity - 2nd Runner Up",
        description: "LPG leakage detection and management solution",
        venue: "PCCOE",
        year: "2020",
        prize: "Sponsorship + ₹1 Lakh",
    },
];


// Personal Interests (updated title)
export const personalInterests = [
    { title: "Google Maps Contributor", desc: "9+ years, inspired 15+ to join" },
    { title: "Technology Educator", desc: "Teaching school teachers modern tech tools, Workspace, and Gemini for everyday efficiency" },
    { title: "Learning Spanish", desc: "Since 2022" },
    { title: "Astrophysics Enthusiast", desc: "Fascinated by the Universe" },
    { title: "Chess & Cricket Player", desc: "" },
];

// Vibe Coder Projects
export const vibeCoderProjects = [
    {
        title: "This Portfolio Website",
        description: "Built with Antigravity using advanced agentic coding workflows",
        url: "https://pratikh6i.github.io/about-me/",
    },
    {
        title: "Hardware Reseller Site",
        description: "Product showcase for local business, increasing customer engagement",
        url: "https://pratikh6i.github.io/RutvikPatilBussinesGroup/",
    },
    {
        title: "EdTech WebApp",
        description: "React-based web app with CI/CD pipelines via GitHub",
        url: "https://risinghelixx.com",
    },
];

// Hall of Fame Data (updated counts)
export const hallOfFame = {
    cloudHero: {
        title: "Cloud Hero Champion",
        subtitle: "Top 3 in APAC",
        description: "Ranked 3rd in Cloud Hero GenAI Infrastructure Implementation challenge",
        year: "Dec 2025",
        image: `${assetPath}/cloudhero.png`,
    },
    skillBoost: {
        title: "Google Cloud Skills",
        labs: "336+",
        points: "78,750+",
        courses: "59+",
        tier: "Tier 1: Expert",
        image: `${assetPath}/skillboost.png`,
        profileUrl: "https://www.skills.google/public_profiles/14a39d36-3d88-4a0c-85ec-9533ba770ac1",
    },
    arcade: {
        title: "Google Cloud Arcade Champion",
        description: "Champion tier finisher 4 times with hands-on cloud experience",
        // Dynamically listing 5 potential swags
        swags: [
            `${assetPath}/swag-1.jpg`,
            `${assetPath}/swag-2.jpg`,
            `${assetPath}/swag-3.jpg`
        ],
    },
};

// News updates
export const newsUpdates = [
    {
        date: "Oct 2025",
        title: "Best Engineer of the Quarter",
        description: "Recognized as the Best Engineer of the Quarter at Searce INC for exceptional contributions.",
    },
    {
        date: "Dec 2025",
        title: "Cloud Hero Top 3 in APAC",
        description: "Ranked 3rd in the Cloud Hero GenAI Infrastructure Implementation challenge across APAC region.",
    },
    {
        date: "Dec 2025",
        title: "Portfolio Website Launch",
        description: "Launched this personal portfolio website showcasing my journey as a Cloud Security Engineer.",
    },
];

