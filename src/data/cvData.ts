// cvData.ts
import {
  Book,
  Briefcase,
  Code,
  Award,
  FileText,
  Globe,
  Users,
  Wrench,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// Basic content types
export interface BaseContent {
  title?: string;
  period?: string;
  details?: string[];
}

export interface EducationContent extends BaseContent {
  institution: string;
}

export interface WorkContent extends BaseContent {
  company: string;
}

export interface OrganizationContent extends BaseContent {
  organization: string;
}

export interface CertificationContent {
  name: string;
  link: string;
}

export interface AboutContent {
  description: string;
}

export interface Skills {
  Language: string[];
  "Soft Skills": string[];
  "Hard Skills": string[];
  Software: string[];
}

export interface Project {
  title: string;
  image: string;
  description: string;
  techStack: string[];
}

export interface CVSection {
  title: string;
  icon: LucideIcon;
  content: any;
}

// Type guard functions
export const isSkills = (content: any): content is Skills => {
  return (
    content &&
    typeof content === "object" &&
    "Language" in content &&
    "Soft Skills" in content &&
    "Hard Skills" in content &&
    "Software" in content
  );
};

export const isEducationContent = (
  content: any
): content is EducationContent => {
  return content && typeof content === "object" && "institution" in content;
};

export const isWorkContent = (content: any): content is WorkContent => {
  return content && typeof content === "object" && "company" in content;
};

export const isOrganizationContent = (
  content: any
): content is OrganizationContent => {
  return content && typeof content === "object" && "organization" in content;
};

export const isProject = (content: any): content is Project => {
  return (
    content &&
    typeof content === "object" &&
    "title" in content &&
    "image" in content &&
    "description" in content &&
    "techStack" in content
  );
};

export const skills: Skills = {
  Language: [
    "Indonesia (Native or bilingual proficiency)",
    "English (Limited working proficiency)",
    "Arabic (Elementary proficiency)",
  ],
  "Soft Skills": [
    "Communication",
    "Leadership",
    "Team Management",
    "Organizational Skills",
    "Problem Solving",
    "Critical Thinking",
  ],
  "Hard Skills": [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "ASP.NET",
    "C#",
    "Laravel",
    "PHP",
    "MySQL",
    "WordPress",
    "C",
    "Java",
    "Python",
  ],
  Software: [
    "Google Workspace",
    "Microsoft 365",
    "Figma",
    "Canva",
    "WordPress",
    "Adobe Premiere Pro",
    "Capcut",
    "Visual Studio Code",
    "Visual Studio",
    "Dev C++",
    "Eclipse IDE",
  ],
};

export const projects = [
  {
    title: "E-Commerce Dashboard",
    image: "/api/placeholder/400/300",
    description:
      "A comprehensive dashboard for managing online store operations, including inventory, orders, and customer data.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    title: "Learning Management System",
    image: "/api/placeholder/400/300",
    description:
      "Platform for online education with features for course management, student progress tracking, and interactive learning.",
    techStack: ["Vue.js", "Laravel", "MySQL", "Docker", "Redis"],
  },
];

export const cvSections: { [key: string]: CVSection } = {
  about: {
    title: "ABOUT ME",
    icon: Globe,
    content: [
      {
        description:
          "A passionate Computer Science student with a diverse background in digital marketing, SEO, and content creation. Seeking to transition into a software engineering role, particularly in front-end development. Strong foundation in both technical and soft skills, with a track record of successful project delivery and team collaboration.",
      },
    ],
  },
  education: {
    title: "EDUCATION",
    icon: Book,
    content: [
      {
        title: "Bachelor of Computer Science",
        institution: "University of Technology Lorem",
        period: "2021 – Present",
        details: [
          "Current GPA: 3.85/4.00",
          "Active member of Computer Science Student Association",
          "Specialized in Software Engineering and Web Development",
          "Led team projects in Database Design and Full-Stack Development",
        ],
      },
      {
        title: "Science Major",
        institution: "Senior High School 1 Lorem",
        period: "2018 – 2021",
        details: [
          "Graduated with honors (Top 5 in class)",
          "Leader of Computer Club",
          "Won 2nd place in Regional Programming Competition",
          "Participated in National Science Olympiad",
        ],
      },
    ],
  },
  workExperience: {
    title: "WORKING EXPERIENCES",
    icon: Briefcase,
    content: [
      {
        title: "Frontend Developer Intern",
        company: "PT Digital Teknologi Indonesia",
        period: "Jun/2023 – Sep/2023",
        details: [
          "Developed and maintained responsive web applications using React.js and TypeScript",
          "Implemented UI components following design system guidelines",
          "Collaborated with backend team to integrate REST APIs",
          "Improved website performance by 40% through code optimization",
        ],
      },
      {
        title: "SEO Specialist",
        company: "PT Lorem Indonesia",
        period: "Sep/2021 – Dec/2021",
        details: [
          "Contributed to ranking 40+ websites/articles on Google's first page",
          "Published 174 articles with SEO standards",
          "Listed 150 social bookmarking websites",
          "Utilized SEO tools like WordPress, SEOquake, Google Analytics",
        ],
      },
    ],
  },
  organization: {
    title: "ORGANIZATIONAL EXPERIENCES",
    icon: Users,
    content: [
      {
        title: "Head of Technology Division",
        organization: "Computer Science Student Association",
        period: "Jan/2023 - Present",
        details: [
          "Led a team of 15 members in developing and maintaining organization's website",
          "Organized 5 successful tech workshops and seminars",
          "Managed IT infrastructure for campus-wide events",
          "Improved internal communication system efficiency by 60%",
        ],
      },
      {
        title: "Project Manager",
        organization: "Lorem Technology Community",
        period: "Aug/2022 - Dec/2022",
        details: [
          "Coordinated 3 major community projects with 50+ participants",
          "Established project management system using Agile methodology",
          "Facilitated weekly tech sharing sessions",
          "Created documentation standards for community projects",
        ],
      },
    ],
  },
  skills: {
    title: "SKILLS",
    icon: Wrench,
    content: [skills],
  },
  projects: {
    title: "PROJECTS",
    icon: Code,
    content: [projects],
  },
  certifications: {
    title: "CERTIFICATIONS",
    icon: Award,
    content: [
      {
        name: "Frontend Development Path - React & TypeScript (2024)",
        link: "https://example.com/cert1",
      },
      {
        name: "AWS Cloud Practitioner Certification (2024)",
        link: "https://example.com/cert2",
      },
      {
        name: "3-Day Intermediate SEO Masterclass by DailySEO ID (2024)",
        link: "https://example.com/cert3",
      },
      {
        name: "Leadership: First Time Manager by Mekari University (2024)",
        link: "https://example.com/cert4",
      },
    ],
  },
};
