export interface Project {
  title: string
  description: string
  slug?: string
  year?: number | null
  featured?: boolean | null
  primaryLanguage?: string | null
  architecture?: string | null
  tier?: number | null
  techStack?: { tech: string; role?: string }[] | null
  highlights?: { item: string }[] | null
  links?: { github?: string | null; live?: string | null } | null
  longDescription?: { children: { text: string }[] }[] | null
}

export interface Experience {
  company: string
  role: string
  description?: string | null
  highlights?: { item: string }[] | null
  startDate: string
  endDate?: string | null
  current?: boolean | null
}

export interface Skill {
  name: string
  category: string
  proficiency: string
}

export interface AboutMe {
  name: string
  headline?: string | null
  bio?: { children: { text: string }[] }[] | null
  location?: string | null
  cvUrl?: string | null
  socialLinks?: { github?: string | null; linkedin?: string | null; twitter?: string | null; website?: string | null } | null
}

export interface Education {
  institution: string
  degree: string
  description?: string | null
  startDate: string
  endDate?: string | null
  current?: boolean | null
}

export interface Certification {
  name: string
  category: string
  date: string
  platform?: string | null
}

export interface Language {
  name: string
  proficiency: string
}

export type SkillCategory = 'all' | 'languages' | 'frontend' | 'backend' | 'databases' | 'devops' | 'mobile' | 'tools'
export type CertCategory = 'cloud-devops' | 'backend-mobile' | 'frontend' | 'fundamentals' | 'soft-skills'
