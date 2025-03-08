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

// Type guard functions remain the same as they're still applicable

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
    "React",
    "Tailwind CSS",
    "Bootstrap",
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
    title: "Luthfi Portfolio Website",
    image: "./project-1.png",
    description:
      "My portfolio website showcasing my projects and skills in software engineering.",
    techStack: ["HTML/CSS", "JavaScript"],
    link: "https://bit.ly/Luthfi-Web-Portfolio",
  },
  {
    title: "Luthfi CV Website",
    image: "./project-2.png",
    description:
      "My first React project, featuring a responsive CV with type-safe development.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://luthficv.vercel.app",
  },
  {
    title: "PSD Project GymMe",
    image: "./project-3.png",
    description:
      "A group project for a supplement purchase platform with customer and admin functionalities.",
    techStack: ["ASP.NET", "C#", "Tailwind CSS"],
    link: "https://github.com/luthfidi/PSD-Project-GymMe",
  },
];

export const cvSections: { [key: string]: CVSection } = {
  about: {
    title: "ABOUT ME",
    icon: Globe,
    content: [
      {
        description:
          "A 6th-semester Computer Science student at BINUS University with a background in digital marketing, SEO, and content creation. Experienced in project management and team leadership. Seeking to transition focus to software engineering, specifically as a front-end developer.",
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
          "Achieved an A grade in Agile Software Development, Code Reengineering, Pattern Software Design, and Human and Computer Interaction",
          "Gained skills in creating user-friendly software interfaces and enhancing user experience",
          "Developed abilities in optimizing code performance and maintaining code quality",
          "Acquired practical skills in Agile methodologies and Scrum for project management",
        ],
      },
      {
        title: "High School Diploma – Science",
        institution: "Ibnu Hajar Boarding School",
        period: "2018 – 2021",
        details: [
          "Obtained eligible quota for SNMPTN",
          "Head of Entrepreneurship Division at OSMIB 2020"
        ],
      },
    ],
  },
  workExperience: {
    title: "WORKING EXPERIENCES",
    icon: Briefcase,
    content: [
      {
        title: "SEO Backlinking Specialist",
        company: "PT Laskar Digital Indonesia",
        period: "Sep/2021 – Dec/2021",
        details: [
          "Contributed to ranking 40+ websites/articles on Google's first page for targeted keywords with SEO team",
          "Published 174 articles with SEO standards",
          "Curated 150 high-authority social bookmarking websites (minimum DA 30, PA 30)",
          "Social bookmarked 15 articles across a total of 40 websites each",
          "Utilized SEO tools (WordPress, SEOquake, Google Analytics, Search Console) to optimize performance",
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
        period: "Jan/2024 – Present",
        details: [
          "Lead a team of 6 people and conducted monthly sprints for better communication and ideation",
          "Increased followers by over 2,600 in one year for the Filetechno Instagram account",
          "Set a record for the most engaging reel with over 18,000 likes and 280,000 views",
          "Achieved over 40,000+ views on 9 reels in a span of one year",
          "Set a record for a microblog with 3,900 likes and 38,000 impressions",
          "Achieved over 300+ likes on 37 microblog feeds in one year",
          "Created a TikTok video that reached 13,000 likes and 170,000 views",
          "Trained 32 activists in content creation, video editing, content writing, and copywriting",
          "Mentored 13 activists in video editing using Adobe Premiere Pro for major annual video editing projects",
          "Provided coverage for events such as Indo-Indians Bazaar, Creative Icon Exhibition, Event Collector Moments, BNCC x CTI Group, and BNCC x Apple Developer Academy",
          "Established partnerships with Coding Studio, Indoindians, DKV Creative Advertising Binus, BNCC Kemanggisan, BNCC Region Alam Sutera, CakeResume, Dunia Coding, ToffeDev: SEOcon 2024, and Technoscape 2024, DevOpsDays Jakarta 2024",
        ],
      },
      {
        title: "Publication Coordinator",
        organization: "TechnoScape 2024",
        period: "Feb/2024 – Present",
        details: [
          "Lead a team of 8 individuals and conducted weekly sprints to enhance communication and ideation",
          "Determined detailed settings for Instagram ads to achieve maximum results",
          "Successfully managed and completed 45 publications on the @technoscapebncc Instagram account",
        ],
      },
      {
        title: "Activist",
        organization: "Bina Nusantara Computer Club (BNCC)",
        period: "Nov/2022 – Dec/2023",
        details: [
          "PRAP Project Manager (Nov 2022 - Dec 2022): Led a team of 9 in organizing a large-scale event prototype.",
          "Leader Team for Leadership Development Program (Mar 2023 - Apr 2023): Managed an 8-member team, ensuring task completion.",
          "Leader Team for FILE Activist Subdivision (Jun 2023 - Aug 2022): Led a 4-member team for weekly content production.",
          "Publication Vice Coordinator at BNCC CSR 2023 (Jul 2023 - Oct 2023): Supported the main coordinator; edited promotional reels.",
          "Sponsorship committee for BNCC Opening Season (Jul 2023 - Oct 2023): Listed and blasted sponsors, managed booth for 3 days.",
        ],
      },
      {
        title: "Head of Social Media",
        organization: "MarshaOshi",
        period: "Dec/2020 – Jan/2023",
        details: [
          "Led the social media team of 15 admins across platforms including Twitter/X, Instagram, TikTok, and Showroom Live",
          "Increased the Twitter/X account followers from 700 to 7,000",
          "Grew the Instagram account followers from 0 to 1,800",
          "Grew the TikTok account followers from 0 to 1,600",
          "Achieved an average of 527.000 tweet impressions per month during the last 5 months of my tenure",
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
