export interface Project {
  id: string;
  title: string;
  role: string;
  stack: string[];
  description: string;
  problem: string;
  solution: string;
  impact: string;
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  metrics: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[]; // Level 0-100
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
