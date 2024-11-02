import {
  Book,
  Briefcase,
  Code,
  Target,
  Award,
  FileText,
  Globe,
} from "lucide-react";

export interface CVSection {
  title: string;
  icon: any;
  content: any[];
}

export const cvSections: { [key: string]: CVSection } = {
  about: {
    title: "ABOUT ME",
    icon: Globe,
    content: [
      {
        description: `A passionate Computer Science student with a diverse background in digital marketing, 
        SEO, and content creation. Seeking to transition into a software engineering role, 
        particularly in front-end development.`,
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
          "Learned about user-friendly interface design and enhancing user experience",
          "Acquired practical skills in Agile methodologies and Scrum",
          "Studied techniques for optimizing code performance",
          "Developed skills in identifying and fixing code issues",
        ],
      },
      // Tambahkan data lain sesuai kebutuhan
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
          "Contributed to ranking 40+ websites/articles on Google's first page",
          "Published 174 articles with SEO standards",
          "Listed 150 social bookmarking websites",
          "Utilized SEO tools like WordPress, SEOquake, Google Analytics",
        ],
      },
    ],
  },
  certifications: {
    title: "CERTIFICATIONS",
    icon: Award,
    content: [
      {
        name: "3-Day Intermediate SEO Masterclass by DailySEO ID (2024)",
        link: "https://example.com/seo-masterclass",
      },
      {
        name: "Leadership: First Time Manager by Mekari University (2024)",
        link: "https://example.com/leadership-course",
      },
      // Tambahkan sertifikasi lain
    ],
  },
  // Tambahkan section lain sesuai kebutuhan
};
