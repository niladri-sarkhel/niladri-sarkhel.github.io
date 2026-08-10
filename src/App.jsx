import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    CardActions,
    Chip,
    IconButton,
    Grid,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemButton
} from '@mui/material';
import {
    GitHub,
    LinkedIn,
    Email,
    Launch,
    Code,
    Storage,
    Build,
    Menu as MenuIcon,
    School,
    Terminal
} from '@mui/icons-material';

const portfolioData = {
    name: "Niladri Sarkhel",
    title: "Full-Stack Web Developer",
    location: "West Bengal, India",
    email: "niladri.sarkhel.dev@gmail.com",
    github: "https://github.com/niladri-sarkhel",
    linkedin: "https://linkedin.com/in/niladri-sarkhel",
    website: "https://niladri-sarkhel.github.io",
    summary: "Full-Stack Web Developer with hands-on experience building backend-focused applications, emphasizing reliability, maintainability, and practical problem solving. Proficient in designing REST APIs, managing relational and NoSQL databases, containerization with Docker, and automated testing.",
    skills: {
        Languages: ["JavaScript (ES6+)", "TypeScript", "SQL", "C++", "C", "Python", "Lua"],
        Frontend: ["React.js", "HTML5", "CSS3", "Vite", "Tailwind CSS", "Material UI"],
        Backend: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth", "API Design", "AuthN & AuthZ"],
        Databases: ["PostgreSQL", "MongoDB", "Mongoose", "Redis", "Data Modeling"],
        DevOps: ["Docker", "GitHub Actions", "CI/CD", "Linux", "Bash", "Render", "Vercel"],
        Tools: ["Git", "GitHub", "Postman", "Bruno", "Neovim", "VSCode"]
    },
    projects: [
        {
            title: "E-Commerce Backend",
            stack: ["Node.js", "Express.js", "PostgreSQL", "Redis", "Stripe", "Docker", "AWS", "CI/CD"],
            github: "https://github.com/niladri-sarkhel",
            demo: "https://niladri-sarkhel.github.io",
            bullets: [
                "Designed production-oriented REST APIs for products, inventory, orders, users, and RBAC.",
                "Implemented PostgreSQL data models, transactional workflows, and Redis-based caching.",
                "Integrated Stripe payment workflows with webhook handling and reliable state management.",
                "Containerized application with Docker and established automated testing and CI/CD pipelines."
            ]
        },
        {
            title: "Distributed Job Queue Service",
            stack: ["Node.js", "BullMQ", "Redis", "Docker"],
            github: "https://github.com/niladri-sarkhel",
            demo: "https://niladri-sarkhel.github.io",
            bullets: [
                "Built background job processing service using BullMQ, Redis, and concurrent workers.",
                "Implemented retries, exponential backoff strategies, job lifecycle handling, and dead-letter queues.",
                "Developed operational dashboard for monitoring queue depth, worker activity, retries, and failures.",
                "Containerized service to support reproducible local development and multi-worker deployment."
            ]
        },
        {
            title: "Multi-Tenant Inventory / HRMS SaaS",
            stack: ["Node.js", "React.js", "PostgreSQL", "Redis"],
            github: "https://github.com/niladri-sarkhel",
            demo: "https://niladri-sarkhel.github.io",
            bullets: [
                "Designed multi-tenant SaaS architecture supporting organization isolation and granular RBAC.",
                "Implemented inventory and employee management workflows with transactional PostgreSQL operations.",
                "Added audit logging and activity tracking to provide traceability across organization operations.",
                "Developed a React-based interface for managing users, roles, inventory, and organizations."
            ]
        },
        {
            title: "Document Storage Service",
            stack: ["Node.js", "AWS S3", "CloudFront", "Docker"],
            github: "https://github.com/niladri-sarkhel",
            demo: "https://niladri-sarkhel.github.io",
            bullets: [
                "Built secure document storage API using private AWS S3 buckets and pre-signed URLs.",
                "Integrated CloudFront for efficient content delivery while maintaining underlying storage privacy.",
                "Designed background processing for asynchronous file operations and metadata handling.",
                "Containerized service with Docker and implemented API-level access control."
            ]
        },
        {
            title: "Real-Time Messaging Service",
            stack: ["Node.js", "WebSockets", "PostgreSQL", "Redis", "Docker"],
            github: "https://github.com/niladri-sarkhel",
            demo: "https://niladri-sarkhel.github.io",
            bullets: [
                "Engineered real-time messaging engine with WebSocket communication and persistent history.",
                "Implemented users, channels, message pagination, and role-based access control.",
                "Used PostgreSQL for persistent storage and Redis for presence tracking and pub/sub coordination.",
                "Handled socket connection states, message state tracking, and unread notification queues."
            ]
        }
    ],
    education: {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "Supreme Knowledge Foundation (MAKAUT)",
        period: "2021 – 2025",
        location: "West Bengal, India"
    }
};

export default function App() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Education", href: "#education" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
            {/* Navigation Bar */}
            <AppBar position="sticky" elevation={0} className="!bg-slate-900/90 !backdrop-blur-md border-b border-slate-800">
                <Container maxWidth="lg">
                    <Toolbar className="justify-between !px-0">
                        <Typography variant="h6" className="!font-bold !font-mono text-indigo-400 flex items-center gap-2">
                            <Terminal fontSize="small" />
                            <span>{portfolioData.name}</span>
                        </Typography>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex gap-6 items-center">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-slate-300 hover:text-indigo-400 font-medium text-sm transition-colors duration-200"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Button
                                variant="outlined"
                                color="primary"
                                href={portfolioData.github}
                                target="_blank"
                                startIcon={<GitHub />}
                                className="!border-indigo-500 !text-indigo-400 hover:!bg-indigo-500/10 !text-xs !py-1.5"
                            >
                                GitHub Profile
                            </Button>
                        </div>

                        {/* Mobile Navigation Toggle */}
                        <IconButton
                            className="md:!hidden !text-slate-300"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                slotProps={{
                    paper: {
                        className: "!bg-slate-900 !text-slate-200 w-64 p-4"
                    }
                }}
            >
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton
                                component="a"
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                            >
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* Hero / About Section */}
            <section id="about" className="py-20 md:py-28 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/50 to-transparent">
                <Container maxWidth="lg">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Available for Opportunities
                        </div>

                        <Typography variant="h2" className="!text-4xl md:!text-6xl !font-extrabold text-white tracking-tight mb-4">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">{portfolioData.name}</span>
                        </Typography>

                        <Typography variant="h5" className="!text-xl md:!text-2xl text-slate-400 font-mono mb-6">
                            {portfolioData.title} · {portfolioData.location}
                        </Typography>

                        <Typography className="!text-slate-300 !text-base md:!text-lg !leading-relaxed mb-8">
                            {portfolioData.summary}
                        </Typography>

                        <div className="flex flex-wrap gap-4 items-center">
                            <Button
                                variant="contained"
                                href={`mailto:${portfolioData.email}`}
                                startIcon={<Email />}
                                className="!bg-indigo-600 hover:!bg-indigo-500 !text-white !font-semibold !px-6 !py-2.5 !rounded-lg"
                            >
                                Get In Touch
                            </Button>

                            <div className="flex gap-2">
                                <IconButton href={portfolioData.github} target="_blank" className="!text-slate-400 hover:!text-white hover:!bg-slate-800">
                                    <GitHub />
                                </IconButton>
                                <IconButton href={portfolioData.linkedin} target="_blank" className="!text-slate-400 hover:!text-white hover:!bg-slate-800">
                                    <LinkedIn />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 border-b border-slate-800/80">
                <Container maxWidth="lg">
                    <div className="mb-12">
                        <Typography variant="h4" className="!font-bold text-white mb-2 flex items-center gap-2">
                            <Code className="text-indigo-400" /> Technical Skills
                        </Typography>
                        <Typography className="!text-slate-400">Core technologies and tools I work with daily</Typography>
                    </div>

                    {/* Replaced MUI Grid with Tailwind CSS Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {Object.entries(portfolioData.skills).map(([category, items]) => (
                            <Card key={category} className="!bg-slate-900/60 !border !border-slate-800 !rounded-xl hover:!border-slate-700 transition-all duration-200 h-full">
                                <CardContent>
                                    <Typography variant="h6" className="!text-indigo-400 !font-mono !text-sm !font-bold mb-4 uppercase tracking-wider">
                                        [{category}]
                                    </Typography>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((skill) => (
                                            <Chip
                                                key={skill}
                                                label={skill}
                                                size="small"
                                                className="!bg-slate-800 !text-slate-300 !border !border-slate-700/60 !font-mono !text-xs"
                                            />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 border-b border-slate-800/80 bg-slate-900/20">
                <Container maxWidth="lg">
                    <div className="mb-12">
                        <Typography variant="h4" className="!font-bold text-white mb-2 flex items-center gap-2">
                            <Storage className="text-indigo-400" /> Featured Projects
                        </Typography>
                        <Typography className="!text-slate-400">Production-ready systems, SaaS platforms, and backend architecture</Typography>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {portfolioData.projects.map((project, idx) => (
                            <Card key={idx} className="!bg-slate-900/80 !border !border-slate-800 !rounded-xl hover:!border-indigo-500/40 transition-all duration-300 flex flex-col">
                                <CardContent className="flex-grow">
                                    <div className="flex justify-between items-start mb-3">
                                        <Typography variant="h6" className="!font-bold !text-slate-100">
                                            {project.title}
                                        </Typography>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.stack.map((tech) => (
                                            <Chip
                                                key={tech}
                                                label={tech}
                                                size="small"
                                                className="!bg-indigo-500/10 !text-indigo-300 !border !border-indigo-500/20 !text-[11px] !font-mono"
                                            />
                                        ))}
                                    </div>

                                    <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
                                        {project.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="leading-relaxed">
                                                <span className="text-slate-300">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardActions className="!px-4 !pb-4 !pt-0 border-t border-slate-800/60 mt-auto flex justify-between">
                                    <Button
                                        size="small"
                                        href={project.github}
                                        target="_blank"
                                        startIcon={<GitHub fontSize="small" />}
                                        className="!text-slate-400 hover:!text-indigo-400 !text-xs !normal-case"
                                    >
                                        Source Code
                                    </Button>
                                    <Button
                                        size="small"
                                        href={project.demo}
                                        target="_blank"
                                        startIcon={<Launch fontSize="small" />}
                                        className="!text-slate-400 hover:!text-indigo-400 !text-xs !normal-case"
                                    >
                                        Live Demo
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Education & Workflow Section */}
            <section id="education" className="py-20 border-b border-slate-800/80">
                <Container maxWidth="lg">
                    {/* Replaced MUI Grid with Tailwind CSS Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <Typography variant="h4" className="!font-bold text-white mb-6 flex items-center gap-2">
                                <School className="text-indigo-400" /> Education
                            </Typography>

                            <Card className="!bg-slate-900/60 !border !border-slate-800 !rounded-xl p-2">
                                <CardContent>
                                    <Typography variant="h6" className="!font-bold text-slate-100">
                                        {portfolioData.education.degree}
                                    </Typography>
                                    <Typography className="!text-indigo-400 !font-mono !text-sm mb-2">
                                        {portfolioData.education.institution}
                                    </Typography>
                                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                                        <span>{portfolioData.education.period}</span>
                                        <span>{portfolioData.education.location}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div>
                            <Typography variant="h4" className="!font-bold text-white mb-6 flex items-center gap-2">
                                <Build className="text-indigo-400" /> Workflow & Engineering
                            </Typography>

                            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                                <p>
                                    <strong className="text-slate-100">Environment & Tools:</strong> Daily Linux user (Fedora/Bash) relying on terminal-first workflows with Neovim, Git, and custom automation scripts.
                                </p>
                                <p>
                                    <strong className="text-slate-100">Quality & Testing:</strong> Defensive API engineering using Zod/Joi schema validation, Pino structured logging, and thorough testing via Jest and Supertest.
                                </p>
                                <p>
                                    <strong className="text-slate-100">Team Integration:</strong> Clean semantic commit history, thorough API documentation (Postman/Bruno), and containerized local dev environments for zero-friction integration.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Footer / Contact */}
            <footer id="contact" className="py-12 bg-slate-900/60">
                <Container maxWidth="lg" className="text-center">
                    <Typography variant="h5" className="!font-bold text-white mb-2">
                        Let's Build Something Reliable Together
                    </Typography>
                    <Typography className="!text-slate-400 !text-sm mb-6">
                        Open for full-stack engineering roles and backend development opportunities.
                    </Typography>

                    <Button
                        variant="contained"
                        href={`mailto:${portfolioData.email}`}
                        startIcon={<Email />}
                        className="!bg-indigo-600 hover:!bg-indigo-500 !text-white !font-semibold !px-6 !py-2.5 !rounded-lg mb-8"
                    >
                        {portfolioData.email}
                    </Button>

                    <div className="flex justify-center gap-6 mb-8 text-slate-400">
                        <a href={portfolioData.github} target="_blank" className="hover:text-indigo-400 transition-colors">GitHub</a>
                        <a href={portfolioData.linkedin} target="_blank" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
                        <a href={portfolioData.website} target="_blank" className="hover:text-indigo-400 transition-colors">Portfolio</a>
                    </div>

                    <Typography className="!text-slate-500 !text-xs !font-mono">
                        © {new Date().getFullYear()} {portfolioData.name}. Designed with React, Material UI, and Tailwind CSS.
                    </Typography>
                </Container>
            </footer>
        </div>
    );
}
