export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problemSolved: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  isFeatured?: boolean;
  category: 'Data & AI' | 'Web Applications' | 'Systems & Tools';
  metricsOrHighlights?: string[];
}

export interface SkillItem {
  name: string;
  isExploring?: boolean;
  category: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface LearningItem {
  id: string;
  title: string;
  focus: string;
  description: string;
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}
