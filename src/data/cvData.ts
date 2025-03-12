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

// Basic content types remain the same as they match the CV structure

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
  "Tool & Software": string[];
}

export interface Project {
  title: string;
  image: string;
  description: string;
  techStack: string[];
  link?: string;
}

export interface CVSection {
  title: string;
  icon: LucideIcon;
  content: any;
}

// Type guard functions remain the same as they're still applicable

export const isSkills = (content: any): content is Skills => {
  return (
    content &&
    typeof content === "object" &&
    "Language" in content &&
    "Soft Skills" in content &&
    "Hard Skills" in content &&
    "Tool & Software" in content
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
    "English (Professional working proficiency)",
  ],
  "Soft Skills": [
    "Communication",
    "Leadership",
    "Collaboration",
    "Problem-Solving",
    "Code Review",
    "Adaptability",
  ],
  "Hard Skills": [
    "Frontend: HTML, CSS, JavaScript, TypeScript, React, Next.js, Chakra UI, Tailwind CSS, Bootstrap",
    "Backend: Golang (Echo, GORM), ASP.NET, C#, Laravel, PHP",
    "Database: MySQL, PostgreSQL",
    "Other: Motoko, C, Java, Python, WordPress",
  ],
  "Tool & Software": [
    "Google Workspace",
    "Microsoft 365",
    "Figma",
    "Canva",
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
    title: "Luthfi Portfolio Website",
    image: "./project-1.png",
    description:
      "My portfolio website showcasing my projects & skills with perfect Lighthouse scores: 100 in Performance, Accessibility, Best Practices, and SEO",
    techStack: ["HTML/CSS", "JavaScript"],
    link: "https://bit.ly/Luthfi-Web-Portfolio",
  },
  {
    title: "LMS Dummy Frontend",
    image: "./project-2.png",
    description:
      "A prototype for an LMS, focusing on UI/UX implementation and responsiveness.",
    techStack: [
      "React",
      "TypeScript",
      "Chakra UI",
      "React Router",
      "Zustand",
      "Tanstack",
      "Recharts",
      "FullCalendar",
    ],
    link: "https://university-lms-seven.vercel.app/",
  },
  {
    title: "React Form Handling",
    image: "./project-3.png",
    description:
      "A comprehensive guide to building forms with React Hook Form and Zod.",
    techStack: [
      "React",
      "TypeScript",
      "React Hook Form",
      "Zod",
      "Chakra UI",
      "React Router",
      "Zustand",
      "Tanstack",
    ],
    link: "https://react-form-mastery.vercel.app/",
  },
];

export const cvSections: { [key: string]: CVSection } = {
  about: {
    title: "ABOUT ME",
    icon: Globe,
    content: [
      {
        description:
          "A 6th-semester Computer Science student at BINUS University with a strong foundation in front-end development and software engineering. Experienced in building responsive web applications, optimizing website performance, and collaborating in team-based projects. Previously involved in digital marketing and SEO, bringing a unique perspective on user experience and engagement.",
      },
    ],
  },
  education: {
    title: "EDUCATION",
    icon: Book,
    content: [
      {
        title: "Undergraduate Student in Computer Science",
        institution: "Bina Nusantara University",
        period: "2022 – Present",
        details: [
          "Achieved an A grade in Agile Development, Pattern Software Design, and Human Computer Interaction.",
          "Developed abilities in optimizing code performance and maintaining code quality.",
          "Acquired practical skills in Agile methodologies and Scrum for project management.",
        ],
      },
      {
        title: "High School Diploma – Science",
        institution: "Ibnu Hajar Boarding School",
        period: "2018 – 2021",
        details: [
          "Obtained eligible quota for SNMPTN.",
          "Head of Entrepreneurship Division at OSMIB 2020.",
        ],
      },
    ],
  },
  workExperience: {
    title: "WORKING EXPERIENCES",
    icon: Briefcase,
    content: [
      {
        title: "Full Stack Developer",
        company: "PT Zegen Solusi Mandiri",
        period: "Feb/2025 – Present",
        details: [
          "Developing a Learning Management System (LMS) using React, Golang, Chakra UI, and modern libraries.",
          "Designing and implementing ERD to optimize database structure and improve query efficiency.",
          "Slicing UI designs into responsive and interactive web components.",
          "Building 10+ mini projects as prototypes to refine LMS core features and improve development efficiency.",
          "Optimizing website performance by reducing load time and improving accessibility.",
        ],
      },
      {
        title: "SEO Backlinking Specialist",
        company: "PT Laskar Digital Indonesia",
        period: "Sep/2021 – Dec/2021",
        details: [
          "Contributed to ranking 40+ websites/articles on Google's first page for targeted keywords with SEO team.",
          "Published 174 SEO-optimized articles.",
          "Curated 150 high-authority social bookmarking websites (minimum DA 30, PA 30).",
          "Social bookmarked 15 articles across a total of 40 websites each.",
          "Utilized SEO tools (WordPress, SEOquake, Google Analytics, Search Console) to optimize performance.",
        ],
      },
    ],
  },
  organization: {
    title: "ORGANIZATIONAL EXPERIENCES",
    icon: Users,
    content: [
      {
        title: "FILE/Filemagz Manager",
        organization: "Bina Nusantara Computer Club (BNCC)",
        period: "Jan/2024 – Jan/2025",
        details: [
          "Led a team of 6 members, growing @filemagz & @filetechno followers by +2,600 in one year.",
          "Mentored 32 activists in content creation & video editing, improving content quality.",
          "Set a record for the most engaging reel with over 18,000 likes and 280,000 views.",
          "Created a viral TikTok video with 170,000 views and 13,000 likes.",
          "Achieved over 40,000+ views on 9 reels in a span of one year.",
          "Achieved 300+ likes per post on 37 microblog feeds in one year.",
          "Established partnerships with Apple Developer Academy, CTI Group, CakeResume, ToffeDev, Coding Studio, Indoindians, DKV Creative Advertising BINUS, Dunia Coding, Technoscape 2024, and DevOpsDays Jakarta 2024.",
        ],
      },
      {
        title: "Publication Coordinator",
        organization: "TechnoScape 2024",
        period: "Feb/2024 – Dec/2024",
        details: [
          "Led a team of 8, managing 45+ publications for @technoscapebncc Instagram account.",
        ],
      },
      {
        title: "Activist",
        organization: "Bina Nusantara Computer Club (BNCC)",
        period: "Nov/2022 – Dec/2023",
        details: [
          "PRAP Project Manager: Led a team of 9 in organizing a large-scale event prototype.",
          "Leadership Development Program Leader: Managed an 8-member team, ensuring task completion.",
          "FILE Activist Leader: Led a 4-member team for weekly content production.",
          "Sponsorship Committee (BNCC Opening Season): Managed sponsors and documentation.",
          "Publication Vice Coordinator (BNCC CSR 2023): Edited promotional reels.",
        ],
      },
      {
        title: "Head of Social Media",
        organization: "MarshaOshi",
        period: "Dec/2020 – Jan/2023",
        details: [
          "Led the social media team across platforms including Twitter/X, Instagram, TikTok, and Showroom Live.",
          "Increased Twitter/X followers from 700 to 7K, Instagram from 0 to 1.8K, and TikTok from 0 to 1.6K.",
          "Achieved an average of 527.000 tweet impressions per month during the last 5 months of my tenure.",
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
        name: "Learning Front-End Web Development for Beginners, Dicoding Indonesia (2024)",
        link: "https://www.dicoding.com/certificates/EYX4JGGQWZDL",
      },
      {
        name: "Learning the Basics of JavaScript Programming, Dicoding Indonesia (2024)",
        link: "https://www.dicoding.com/certificates/4EXG7V3EQPRL",
      },
      {
        name: "3-Day Intermediate SEO Masterclass, DailySEO ID (2024)",
        link: "https://drive.google.com/file/d/1JDhFSGjE3l6PiHprBso14gOmuGU3lhSW/view?usp=sharing",
      },
      {
        name: "Leadership: First Time Manager, Mekari University Course (2024)",
        link: "https://univ.mekari.com/certificates/dvdtugxx8g",
      },
      {
        name: "Introduction to Project Management Using Agile Methodology, BINUS University (2024)",
        link: "https://drive.google.com/file/d/1luYz2pazmokRWZh-tMefVDzr5HCik42Y/view?usp=sharing",
      },
      {
        name: "Project Management with Scrum, BINUS University (2024)",
        link: "https://drive.google.com/file/d/1KDLR_hI24nzz_PFoztF-wyMuG5ty4dVg/view?usp=sharing",
      },
      {
        name: "LnT UI/UX Design Class, BNCC Learning and Training (2024)",
        link: "https://drive.google.com/file/d/11WrC9zwUlEwXxIDbvMpRUYE0eR3J5_2h/view?usp=sharing",
      },
      {
        name: "C-Level ENGLISH FOR ADVANCED ENGLISH, Beelinguapp (2023)",
        link: "https://drive.google.com/file/d/1a-T3_OgGngVlVHFn4ADkVjXbot8vvFpz/view?usp=sharing",
      },
      {
        name: "LnT Back-End Development Class, BNCC Learning and Training (2023)",
        link: "https://drive.google.com/file/d/15F95e0GWGOehMkn6tXTF5Uvy2vVQb3Db/view?usp=sharing",
      },
    ],
  },
};
