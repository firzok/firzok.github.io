export const profile = {
  name: "Firzok Nadeem",
  role: "Senior Frontend Engineer",
  location: "Berlin, Germany / Remote",
  email: "firzok.nadeem@gmail.com",
  github: "https://github.com/firzok",
  linkedin: "https://www.linkedin.com/in/firzok-nadeem/",
  resumeUrl: "https://drive.google.com/file/d/1IePWunCqZFWe93KdxZrPAZewCOJ7tLrL/view?usp=sharing",
  summary:
    "Senior Frontend Engineer with 7+ years of experience building high-performance, user-critical web applications in distributed environments. Led large-scale migrations and cross-service integrations at Amazon Web Services, focusing on latency reduction, reliability, accessibility, and real-time state synchronization. Strong interest in blockchain-based systems, multi-chain UX, and security-sensitive financial interfaces.",
  metrics: [
    { value: "7+", label: "Years Experience" },
    { value: "100%", label: "E2E Pass Reliability" },
    { value: "20-80%", label: "Performance Gains Delivered" }
  ],
  focus: [
    "Scalable frontend architecture in distributed systems",
    "High-confidence testing and reliability engineering",
    "Accessibility, performance, and product UX quality"
  ]
} as const;

export type ExperienceEntry = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "Frontend Engineer II (Promoted)",
    org: "Amazon Web Services (AWS)",
    period: "Dec 2024 - Present",
    bullets: [
      "Led migration of Query Editor v2 to a cross-service API layer, reducing latency and scaling export capacity to 100MB while preserving backward compatibility.",
      "Architected resilient UI state flows for long-running query execution and real-time backend status synchronization.",
      "Re-architected end-to-end testing to sustained 100% pass rates, improving production deployment confidence.",
      "Partnered across frontend, backend, and product teams to deliver cross-service integrations between Query Editor v2 and SageMaker Unified Studio."
    ]
  },
  {
    title: "Frontend Engineer I",
    org: "Amazon Web Services (AWS)",
    period: "Aug 2022 - Dec 2024",
    bullets: [
      "Led full WCAG accessibility compliance effort and refactored core components for long-term standards.",
      "Reduced table creation time by 20% by optimizing schema inference and data loading workflows.",
      "Improved modular frontend architecture to support scalable SageMaker Unified Studio integrations."
    ]
  },
  {
    title: "Software Engineer - Working Student",
    org: "SAP",
    period: "Feb 2022 - May 2022",
    bullets: [
      "Worked in engineering delivery workflows in a cross-functional enterprise environment.",
      "Contributed to development tasks while pursuing transition to full-time product engineering roles."
    ]
  },
  {
    title: "Software Engineer",
    org: "Proto",
    period: "Sep 2020 - Sep 2021",
    bullets: [
      "Reduced key page load times by up to 80% by identifying and removing JavaScript bottlenecks.",
      "Built customer-facing frontend features end-to-end and backend Python APIs for asynchronous workflows.",
      "Maintained ~95% automated test coverage via Jest and end-to-end testing."
    ]
  },
  {
    title: "Software Engineer",
    org: "Automotive Artificial Intelligence (AAI)",
    period: "Jul 2019 - Sep 2020",
    bullets: [
      "Improved product performance by 20% and built scalable, reusable React and Vue components.",
      "Developed backend microservices with Python and C++ with strong unit/e2e test coverage."
    ]
  },
  {
    title: "Software Engineer Intern",
    org: "Automotive Artificial Intelligence (AAI)",
    period: "Jan 2019 - Jan 2019",
    bullets: [
      "Developed a traffic simulator and renderer for self-driving cars using Python and PyGame.",
      "Implemented client-server architecture and integrated a React-based web renderer."
    ]
  },
  {
    title: "Software Engineer Intern",
    org: "Bentley Systems",
    period: "Jun 2018 - Aug 2018",
    bullets: [
      "Integrated Microsoft Rush for automated Node.js dependency management across projects.",
      "Built Python automation scripts for analytics and cross-team test result visualization."
    ]
  }
];

export type ProjectEntry = {
  name: string;
  tagline: string;
  bullets: string[];
  stack: string[];
  link?: string;
};

export const projects: ProjectEntry[] = [
  {
    name: "ApplyX",
    tagline: "Founder — AI-powered job application platform",
    bullets: [
      "Generates tailored resumes per job description, links each version to its application, and tracks stages and follow-ups.",
      "Full-stack product with authentication, application management, and persistent data storage.",
      "Deployed on Vercel; integrated Polar for subscription billing and paid feature access control.",
      "Built a Chrome extension that detects job listings and saves applications directly for tailoring and tracking."
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel", "Figma"]
  },
  {
    name: "Lnkdly",
    tagline: "Founder — AI-powered LinkedIn content platform",
    bullets: [
      "Generates, schedules, organizes, and repurposes posts while tracking engagement and audience growth.",
      "Implemented authentication, content workflows, analytics dashboards, and post history.",
      "Deployed on Vercel with integrations for payments, transactional emails, and AI content generation.",
      "Designed a Chrome extension for LinkedIn scheduling and analytics without relying on unofficial APIs."
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel", "Figma"]
  }
];

export type EducationEntry = {
  degree: string;
  org: string;
  period: string;
  bullets: string[];
};

export const education: EducationEntry[] = [
  {
    degree: "Master of Science (M.Sc.) in Computer Science (Dropout)",
    org: "RPTU Kaiserslautern-Landau",
    period: "2021 - 2021",
    bullets: ["Specialization in Software Engineering and Distributed Systems"]
  },
  {
    degree: "Bachelor of Computer Science",
    org: "National University of Computer and Emerging Sciences",
    period: "2015 - 2019",
    bullets: [
      "CGPA: 3.49/4.00",
      "4 Dean's List of Honour Awards",
      "Ranked 17 out of 150",
      "Won 2 speed programming competitions"
    ]
  }
];

export type SkillEntry = { name: string; icon: string; color: string };

export const skills: SkillEntry[] = [
  { name: "TypeScript", icon: "devicon-typescript-plain", color: "#3178c6" },
  { name: "JavaScript", icon: "devicon-javascript-plain", color: "#f7df1e" },
  { name: "React", icon: "devicon-react-original", color: "#61dafb" },
  { name: "Next.js", icon: "devicon-nextjs-plain", color: "#ffffff" },
  { name: "Redux", icon: "devicon-redux-original", color: "#764abc" },
  { name: "Vue.js", icon: "devicon-vuejs-plain", color: "#42b883" },
  { name: "Node.js", icon: "devicon-nodejs-plain", color: "#68a063" },
  { name: "Python", icon: "devicon-python-plain", color: "#3776ab" },
  { name: "C++", icon: "devicon-cplusplus-plain", color: "#00599c" },
  { name: "Go", icon: "devicon-go-plain", color: "#00add8" },
  { name: "GraphQL", icon: "devicon-graphql-plain", color: "#e10098" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark", color: "#ff9900" },
  { name: "Supabase", icon: "devicon-supabase-plain", color: "#3ecf8e" },
  { name: "Figma", icon: "devicon-figma-plain", color: "#f24e1e" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", color: "#38bdf8" },
  { name: "HTML5", icon: "devicon-html5-plain", color: "#e34f26" },
  { name: "CSS3", icon: "devicon-css3-plain", color: "#264de4" },
  { name: "Git", icon: "devicon-git-plain", color: "#f05032" },
  { name: "GitHub", icon: "devicon-github-original", color: "#ffffff" },
  { name: "Jest", icon: "devicon-jest-plain", color: "#c21325" },
  { name: "Selenium", icon: "devicon-selenium-original", color: "#43b02a" },
  { name: "Electron", icon: "devicon-electron-original", color: "#9feaf9" },
  { name: "NPM", icon: "devicon-npm-original-wordmark", color: "#cb3837" }
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Urdu", level: "Native" },
  { name: "German", level: "Basic" }
];
