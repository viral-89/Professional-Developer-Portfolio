export const projectsData = [
  {
    id: "e-commerce",
    title: "E-Commerce Platform",
    description: "A scalable, multi-tenant e-commerce platform built for local businesses.",
    techStack: ["React", "Node.js", "MongoDB", "Redux"],
    liveUrl: "https://example.com",
    imageUrl: "/assets/projects/ecommerce.png",
    caseStudy: {
      problem: "Local businesses lacked a unified way to manage online sales and inventory, leading to missed opportunities and manual errors.",
      solution: "Developed a multi-tenant platform that allows businesses to create their own digital storefronts with integrated inventory management and secure payment processing.",
      process: "Conducted user research with 10 local shop owners, drafted wireframes in Figma, and implemented the backend using Express and MongoDB with JWT authentication."
    }
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "A Kanban-style board with real-time updates for teams.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    imageUrl: "/assets/projects/task_management.png",
    caseStudy: {
      problem: "Distributed teams struggled to keep track of project progress using static spreadsheets, causing delays and miscommunication.",
      solution: "Created a real-time Kanban board using Firebase's Realtime Database, enabling instant updates across all team members' screens.",
      process: "Focused on real-time sync performance and drag-and-drop UX using React-Beautiful-DnD."
    }
  },
  {
    id: "ai-generator",
    title: "AI Image Generator",
    description: "Integrated OpenAI API to generate high-quality images from text prompts.",
    techStack: ["Next.js", "OpenAI API", "Prisma"],
    liveUrl: "https://example.com",
    imageUrl: "/assets/projects/ai_generator.png",
    caseStudy: {
      problem: "Users needed unique, royalty-free images quickly for content creation without high subscription costs.",
      solution: "Built a wrapper around DALL-E 3 that allows users to generate, save, and download images based on descriptive prompts.",
      process: "Optimized prompt engineering templates and implemented an image caching system to reduce API costs."
    }
  }
];

export const skillsData = [
  { category: "Frontend", tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { category: "Backend", tech: ["Node.js", "Express", "RESTful APIs"] },
  { category: "Database & Tools", tech: ["MongoDB", "Git"] }
];

export const blogsData = [
  {
    id: "react-server-components",
    title: "Understanding React Server Components",
    content: "React Server Components allow you to render components on the server, reducing bundle size...",
    fullContent: "React Server Components (RSC) are a new type of component that render on the server and are streamed to the client. This approach significantly reduces the amount of JavaScript sent to the browser, leading to faster initial page loads and improved performance for complex applications. In this article, we dive deep into how RSCs differ from traditional SSR and how you can start using them in your Next.js projects today.",
    date: new Date().toISOString(),
    readTime: "5 min read"
  },
  {
    id: "css-grid-mastery",
    title: "Mastering CSS Grid in 2026",
    content: "CSS Grid is an incredibly powerful layout system. In this article, we explore advanced techniques...",
    fullContent: "CSS Grid has evolved significantly by 2026, with widespread support for subgrid, container queries, and new grid-template features. Mastering these tools allows you to create highly responsive and intricate layouts with minimal code. We will explore advanced patterns like masonry layouts, overlapping elements without positioning, and how to use CSS Grid alongside Flexbox for the ultimate layout control.",
    date: new Date().toISOString(),
    readTime: "8 min read"
  }
];
