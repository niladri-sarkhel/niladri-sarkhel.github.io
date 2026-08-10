export const portfolioData = {
  profile: {
    name: "Akash Ghosh",
    role: "Full-Stack & Systems Developer",
    status: "Available for Opportunities",
    location: "West Bengal, India",
    bio: "Focusing on resilient backend microservices, real-time messaging, and high-concurrency systems. Daily Fedora Linux & Neovim user passionate about clean APIs, defensive schema validation, and structured logging.",
    stats: [
      { label: "Primary Stack", value: "MERN / Node.js" },
      { label: "Core Database", value: "MongoDB & SQL" },
      { label: "Daily OS", value: "Fedora Linux" },
      { label: "Editor", value: "Neovim (Lua)" },
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "akashghosh.dev@example.com",
    },
  },

  skills: {
    "Backend & APIs": [
      "Node.js",
      "Express.js",
      "Socket.io",
      "REST APIs",
      "JWT / Auth",
    ],
    "Databases & Storage": ["MongoDB", "Mongoose", "PostgreSQL", "Redis"],
    "Frontend & UI": [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS v4",
      "Material UI",
      "HTML/CSS",
    ],
    "DevOps & Systems": [
      "Fedora Linux",
      "Bash Scripting",
      "Docker",
      "Git / GitHub",
      "Neovim",
    ],
    "Engineering Quality": [
      "Zod / Joi Validation",
      "Pino Logging",
      "Jest / Supertest",
      "Postman / Bruno",
    ],
  },

  projects: [
    {
      id: "realtime-chat",
      title: "Real-Time Messaging Engine",
      category: "Backend & Systems",
      description:
        "High-concurrency chat server built with Socket.io supporting private 1-to-1 rooms, group broadcasts, state persistence, and connection recovery.",
      architecture: [
        "Socket.io event loops with custom acknowledgment handlers",
        "JWT-based handshake authorization layer",
        "MongoDB message persistence with indexed query routing",
      ],
      tech: ["Node.js", "Express", "Socket.io", "MongoDB", "JWT"],
      github: "https://github.com",
      live: null,
    },
    {
      id: "dating-app-backend",
      title: "Scalable Dating Platform API",
      category: "Backend & Systems",
      description:
        "RESTful API backend supporting user matching, swipe logic, geolocation filtering, and defensive schema validation.",
      architecture: [
        "Joi schema middleware for strict request validation",
        "Pino structured JSON logging for observability",
        "Modular MVC design with centralized async error handling",
      ],
      tech: ["Node.js", "Express", "MongoDB", "Joi", "Pino"],
      github: "https://github.com",
      live: null,
    },
    {
      id: "interactive-cv",
      title: "Print-Optimized CV Engine",
      category: "Full Stack",
      description:
        "Custom React application engineered for precise PDF/print rendering, semantic layout density, and zero runtime dependency bloat.",
      architecture: [
        "Custom print CSS media queries for pixel-perfect page breaks",
        "Configurable data-driven template renderer",
      ],
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ],

  education: {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "Supreme Knowledge Foundation",
    period: "2021 – 2025",
    location: "West Bengal, India",
    focus: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
    ],
  },
};
