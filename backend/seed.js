import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Define schemas to match server.js
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  liveUrl: String,
  caseStudyUrl: String,
  imageUrl: String
});
const Project = mongoose.model('Project', projectSchema);

const skillSchema = new mongoose.Schema({
  category: String,
  tech: [String]
});
const Skill = mongoose.model('Skill', skillSchema);

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
  readTime: String
});
const Blog = mongoose.model('Blog', blogSchema);

const seedDB = async () => {
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB. Seeding data...');

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Blog.deleteMany({});

    // Seed Projects
    await Project.insertMany([
      {
        title: "E-Commerce Platform",
        description: "Problem: Local businesses struggle to sell online. Solution: A scalable, multi-tenant e-commerce platform.",
        techStack: ["React", "Node.js", "MongoDB", "Redux"],
        liveUrl: "https://example.com",
        caseStudyUrl: "#",
        imageUrl: "https://placehold.co/600x400/4f46e5/ffffff?text=E-Commerce+Platform"
      },
      {
        title: "Task Management App",
        description: "Problem: Teams lose track of tasks in chat apps. Solution: A Kanban-style board with real-time updates.",
        techStack: ["React", "Firebase", "Tailwind CSS"],
        liveUrl: "https://example.com",
        caseStudyUrl: "#",
        imageUrl: "https://placehold.co/600x400/ec4899/ffffff?text=Task+Management"
      },
      {
        title: "AI Image Generator",
        description: "Problem: High cost of stock photos. Solution: Integrated OpenAI API to generate images from prompts.",
        techStack: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
        liveUrl: "https://example.com",
        caseStudyUrl: "#",
        imageUrl: "https://placehold.co/600x400/8b5cf6/ffffff?text=AI+Image+Generator"
      }
    ]);

    // Seed Skills
    await Skill.insertMany([
      { category: "Frontend", tech: ["HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind CSS"] },
      { category: "Backend", tech: ["Node.js", "Express", "Python", "RESTful APIs"] },
      { category: "Database & Tools", tech: ["MongoDB", "PostgreSQL", "Git", "Docker", "AWS"] }
    ]);

    // Seed Blogs
    await Blog.insertMany([
      {
        title: "Understanding React Server Components",
        content: "React Server Components allow you to render components on the server, reducing bundle size...",
        readTime: "5 min read"
      },
      {
        title: "Mastering CSS Grid in 2026",
        content: "CSS Grid is an incredibly powerful layout system. In this article, we explore advanced techniques...",
        readTime: "8 min read"
      }
    ]);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDB();
