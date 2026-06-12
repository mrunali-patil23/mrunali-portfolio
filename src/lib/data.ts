export const portfolio = {
  name: "Mrunali Patil",
  title: "Full-Stack Developer",
  tagline: "I build AI-integrated web products end to end.",
  subTagline:
    "From async data pipelines to responsive UIs. Currently focused on AI agent platforms and developer tools.",
  location: "Panvel, Maharashtra, India",
  email: "mrunalip2305@gmail.com",
  github: "https://github.com/mrunali-patil23",
  linkedin: "https://www.linkedin.com/in/mrunali-patil-39bb3730a/",

  about: `I'm a 2026 B.Sc. IT graduate who has spent the past two years building full-stack products rather than just studying them. My focus is on shipping AI-integrated web applications, the kind that wire together real APIs, handle async state across distributed services, and stay maintainable when complexity grows.

I work across the full stack: React and Next.js on the frontend, Python FastAPI and Node.js on the backend, Supabase/PostgreSQL for persistence. What I find most interesting is the design space where user experience meets backend data flow, which is where most AI-powered products live right now.

I've contributed to open-source projects through structured PR workflows, and I care about code review, clean commit history, and building things that other engineers can read.`,

  skills: {
    "Languages": ["TypeScript", "JavaScript", "Python"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "Three.js", "HTML5 / CSS3"],
    "Backend": ["Node.js", "FastAPI", "REST APIs"],
    "Databases": ["PostgreSQL", "Supabase", "MongoDB"],
    "AI / APIs": ["OpenAI API", "Gemini AI", "AI Agent Architecture"],
    "Tooling": ["Git", "GitHub", "VS Code", "Vercel"],
  },

  experience: [
    {
      role: "Web Developer",
      org: "Nexus Spring of Code (NSoC)",
      type: "Open Source Contributor",
      period: "Apr 2026 – Present",
      location: "Remote",
      bullets: [
        "Triaged and resolved frontend/backend issues across the codebase — issue assignment → branch → PR → review → merge.",
        "Worked asynchronously with a distributed contributor team in a structured Agile open-source workflow.",
        "Responded to mentor code review feedback iteratively, improving code quality and PR velocity.",
      ],
    },
    {
      role: "Web Developer",
      org: "Social Winter of Code (SWoC)",
      type: "Open Source Contributor",
      period: "Jan 2026 – Mar 2026",
      location: "Remote",
      bullets: [
        "Delivered UI responsiveness and accessibility fixes across multiple components via iterative GitHub PRs.",
        "Identified styling inconsistencies and component behaviour bugs; submitted documented fixes for mentor review.",
      ],
    },
    {
      role: "Web Development Intern",
      org: "ShadowFox",
      type: "Internship",
      period: "Jun 2024 – Jul 2024",
      location: "Remote",
      bullets: [
        "Applied responsive design principles and validated cross-browser compatibility across client projects.",
        "Maintained clean commit history and branch hygiene in shared Git repositories.",
      ],
    },
    {
      role: "Web Development Intern",
      org: "Prodigy InfoTech",
      type: "Internship",
      period: "Jun 2024",
      location: "Remote",
      bullets: [
        "Built web applications with HTML, CSS, and JavaScript; debugged compatibility issues across browsers.",
      ],
    },
  ],

  projects: [
    {
      name: "Meet AI",
      subtitle: "SaaS AI Agent Platform",
      image: "/projects/meet-ai.png",
      description:
        "A multi-tenant SaaS platform where users create custom AI agents, schedule live meetings with them, and automatically get post-meeting summaries, call recordings, and speaker-separated transcripts. Built a per-meeting AI chatbot grounded in each session's transcript for contextual Q&A.",
      highlights: [
        "Engineered the full async pipeline: live session → real-time transcript extraction → summary generation → structured retrieval",
        "Coordinated context management across multiple AI API calls for per-meeting chatbot grounding",
        "Multi-tenant architecture with isolated user data and agent configurations",
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API"],
      github: "https://github.com/mrunali-patil23/meetai",
      featured: true,
    },
    {
      name: "RoamFlow",
      subtitle: "AI Trip Planner",
      image: "/projects/roamflow.png",
      description:
        "Full-stack travel itinerary application with a React frontend backed by a Python FastAPI service. Gemini AI generates personalised itineraries; Supabase handles authentication and multi-user data isolation with PostgreSQL.",
      highlights: [
        "Decoupled React frontend from Python FastAPI backend via RESTful APIs — two independent deployable services",
        "Implemented Supabase auth + row-level security for isolated multi-user data management",
        "Modular FastAPI service structure enabling clean separation of concerns",
      ],
      stack: ["React", "Python", "FastAPI", "Supabase", "PostgreSQL", "Gemini AI"],
      github: "https://github.com/mrunali-patil23/RoamFlow",
      featured: true,
    },
    {
      name: "Finance Dashboard",
      subtitle: "Interactive Analytics Dashboard",
      image: "/projects/finance-dashboard.png",
      description:
        "A full-featured finance dashboard with summary cards, area/donut/bar charts, transaction management, and a monthly insights view. RBAC system with Viewer and Admin roles, dark mode, and Indian Rupee formatting.",
      highlights: [
        "RBAC system with Viewer and Admin roles — Admins can add, edit, and delete transactions",
        "Recharts-powered visualisations: area chart, donut chart (category breakdown), bar chart (monthly comparison)",
        "Fully responsive with mobile sidebar, dark mode toggle, and graceful empty states",
      ],
      stack: ["React", "Vite", "Tailwind CSS", "Recharts", "Lucide React"],
      github: "https://github.com/mrunali-patil23/finance-dashboard",
      live: "https://finance-dashboard-ivory-psi.vercel.app/",
      featured: true,
    },
    {
      name: "3D Solar System",
      subtitle: "Interactive WebGL Simulation",
      image: "/projects/solar-system.png",
      description:
        "Interactive 3D simulation of the solar system built with Three.js and WebGL. Real-time orbital animations with adjustable speed controls and informational tooltips for each planet.",
      highlights: [
        "Real-time orbital animations using Three.js scene graph and animation loop",
        "Adjustable speed controls and interactive planet tooltip system",
        "Demonstrates WebGL/Three.js proficiency for 3D engineering visualisations",
      ],
      stack: ["JavaScript", "Three.js", "HTML5", "WebGL"],
      github: "https://github.com/mrunali-patil23/3DsolarSystem",
      featured: true,
      live: null,
    },
  ],

  education: {
    degree: "B.Sc. Information Technology",
    institution: "Pillai HOC College of Arts, Science and Commerce",
    period: "2023 – 2026",
    sgpa: "8.42 / 10",
  },

  certifications: [
    { name: "Full Stack Developer Bootcamp", issuer: "GeeksforGeeks", date: "Dec 2025" },
    { name: "Gemini Certified Student", issuer: "Google for Education", date: "Oct 2025" },
    { name: "AWS Solutions Architecture Job Simulation", issuer: "Forage", date: "Jun 2025" },
    { name: "GenAI – LLMs & Hugging Face Workshop", issuer: "Cuvette", date: "May 2025" },
    { name: "Accenture Software Engineering Simulation", issuer: "Forage", date: "May 2025" },
    { name: "Electronic Arts Software Engineering Simulation", issuer: "Forage", date: "Apr 2025" },
    { name: "Get Started with React", issuer: "Microsoft Learn", date: "Dec 2024" },
    { name: "Python for Beginners", issuer: "Simplilearn", date: "Aug 2024" },
  ],

  achievements: [
    "Participated in NIRMAN Hackathon 2026 — 48-hour innovation challenge, Amity University Mumbai",
    "Selected for Enterprising Technopreneur Fellowship by HCDS Technologies",
    "Attended AWS Summit India — cloud computing industry exposure",
    "Competed in ESTIC 2025 Quiz (DST, Government of India) and TATA Crucible Campus Quiz",
    "Member, Google Women Techmakers & Google Developer Group (GDG)",
  ],
};
