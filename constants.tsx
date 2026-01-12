import { Project, Experience, SkillCategory, Education, Certification, NavItem } from './types';
import { Layout, Code, Server, Smartphone, Database, PenTool } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/in/',
  email: 'mailto:ahmad@example.com',
  cv: '/resume.pdf' // Placeholder path
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 / CSS3", level: 98 },
      { name: "Redux / Zustand", level: 85 },
      { name: "Framer Motion", level: 80 },
    ]
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Git / GitHub", level: 90 },
      { name: "GraphQL / REST API", level: 85 },
      { name: "Jest / Testing Library", level: 80 },
      { name: "PostgreSQL / Firebase", level: 70 },
      { name: "Docker", level: 60 },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'vdm',
    title: 'VDM Initiative Management',
    role: 'Lead Frontend Engineer',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    description: 'A comprehensive management dashboard for a social impact initiative.',
    problem: 'The initiative relied on spreadsheets, leading to data redundancy and slow response times for beneficiary tracking.',
    solution: 'Built a centralized dashboard with role-based access control, real-time data visualization using Recharts, and automated reporting.',
    impact: 'Reduced administrative workload by 40% and improved beneficiary tracking accuracy by 95%.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: 'webcrunch',
    title: 'WebCrunch App',
    role: 'Frontend Developer',
    stack: ['Next.js', 'Tailwind', 'Supabase', 'Stripe'],
    description: 'An enterprise-grade SaaS platform for data analytics.',
    problem: 'Enterprise clients needed a way to visualize complex datasets without technical expertise.',
    solution: 'Developed an intuitive drag-and-drop interface for custom report generation and implemented high-performance data grids.',
    impact: 'Onboarded 5 enterprise clients within the first month, handling over 1M+ data points seamlessly.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
  },
  {
    id: 'phaton',
    title: 'Phaton E-Commerce',
    role: 'Full Stack Developer',
    stack: ['MERN Stack', 'Redux Toolkit', 'Stripe API'],
    description: 'A modern e-commerce platform with real-time inventory.',
    problem: 'The client wanted a custom shopping experience that outperformed standard Shopify templates in speed.',
    solution: 'Implemented a headless architecture with aggressive caching and optimized image loading strategies.',
    impact: 'Achieved a Lighthouse performance score of 98/100, resulting in a 25% conversion rate increase.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
  },
  {
    id: 'aes',
    title: 'AES Luxury Apartments',
    role: 'Lead Developer',
    stack: ['Gatsby', 'Contentful', 'Framer Motion'],
    description: 'A premium booking and showcase website for a luxury hotel chain.',
    problem: 'The brand needed a digital presence that matched the elegance of their physical locations.',
    solution: 'Designed a motion-heavy, visually stunning interface with seamless page transitions and an integrated booking engine.',
    impact: 'Direct bookings increased by 30% in the first quarter post-launch.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
  },
    {
    id: 'portfolio',
    title: 'Personal Portfolio',
    role: 'Designer & Developer',
    stack: ['Next.js', 'Framer Motion', 'Tailwind'],
    description: 'The website you are currently viewing.',
    problem: 'Needed a central hub to showcase diverse skill sets and projects to prospective clients.',
    solution: 'Created a high-performance, accessible, and interactive portfolio implementing modern design principles.',
    impact: 'Served as the primary lead generation tool for freelance contracts.',
    imageUrl: 'https://picsum.photos/800/600?random=5',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'tech-solutions',
    company: 'Innovate Tech Solutions',
    role: 'Senior Frontend Engineer',
    period: '2022 - Present',
    description: [
      'Leading a team of 4 developers in building enterprise web applications.',
      'Architecting scalable frontend systems using Next.js and Micro-frontends.',
      'Reviewing code and establishing best practices for accessibility and performance.'
    ],
    metrics: ['Improved Core Web Vitals by 40%', 'Reduced CI/CD build times by 15 mins']
  },
  {
    id: 'creative-digital',
    company: 'Creative Digital Agency',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    description: [
      'Developed interactive marketing websites for Fortune 500 clients.',
      'Collaborated closely with designers to implement pixel-perfect UIs.',
      'Integrated CMS solutions like Contentful and Sanity.'
    ],
    metrics: ['Delivered 15+ projects on time', 'Mentored 2 junior developers']
  },
  {
    id: 'freelance',
    company: 'Freelance',
    role: 'Full Stack Developer',
    period: '2018 - 2020',
    description: [
      'Built custom web solutions for small to medium businesses.',
      'Handled full project lifecycle from requirement gathering to deployment.',
    ],
    metrics: ['5-star rating on Upwork', '100% Client Satisfaction']
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'bsc',
    degree: 'B.Sc. Computer Science',
    institution: 'University of Technology',
    year: '2016 - 2020',
    details: 'Graduated with First Class Honors. Specialized in Software Engineering and Human-Computer Interaction.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'aws',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2023',
  },
  {
    id: 'meta',
    name: 'Meta Frontend Developer Professional Certificate',
    issuer: 'Coursera / Meta',
    year: '2022',
  }
];
