import React from "react";
import { Mail, Phone, Linkedin, Github, Star, FileText } from "lucide-react";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import SectionHeader from "./components/SectionHeader";
import ProjectCard from "./components/ProjectCard";
import CVDownloadButton from "./components/CVDownloadButton";
import {
  cvSections,
  projects,
  isSkills,
  isEducationContent,
  isWorkContent,
  isOrganizationContent,
} from "./data/cvData";
import PortfolioButton from "./components/PortfolioButton";
import PortfolioFileButton from "./components/PortfolioFileButton";

const App: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      text: "luthfi.hadi@binus.ac.id",
      link: "mailto:luthfi.hadi@binus.ac.id",
    },
    {
      icon: Phone,
      text: "+62 812 9560 3317",
      link: "tel:+6281295603317",
    },
    {
      icon: Linkedin,
      text: "LinkedIn",
      link: "https://linkedin.com/in/luthfi-hadi",
    },
    {
      icon: Github,
      text: "GitHub",
      link: "https://github.com/luthfidi",
    },
  ];

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="relative min-h-screen bg-background py-8 px-4 transition-colors">
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <div className="max-w-[720px] mx-auto bg-card shadow-sm rounded-xl overflow-hidden p-6 border border-border">
          {/* Header */}
          <header className="text-center mb-6">
  <h1 className="text-2xl header-title mb-2">Luthfi Hadi</h1>
  <div className="flex justify-center flex-wrap gap-4 mb-3">
    {contactInfo.map((contact, index) => (
      <a
        key={index}
        href={contact.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-soft hover:text-foreground transition-colors"
      >
        <contact.icon className="mr-1.5" size={16} />
        <span className="text-xs">{contact.text}</span>
      </a>
    ))}
  </div>
  <p className="text-sm text-soft mb-4">
    Software Engineer | Frontend Developer | Computer Science Student
  </p>

  {/* Button group */}
  <div className="flex flex-wrap justify-center gap-4">
    <div className="flex gap-4 w-full md:w-auto justify-center">
      <CVDownloadButton />
      <PortfolioFileButton />
    </div>
    <div className="w-full md:w-auto flex justify-center">
      <PortfolioButton />
    </div>
  </div>
</header>

          {/* Sections */}
          {Object.entries(cvSections).map(([key, section]) => (
            <section key={key} className="mb-6 last:mb-0">
              <SectionHeader title={section.title} icon={section.icon} />

              {key === "about" && (
                <p className="text-sm text-soft">
                  {section.content[0].description}
                </p>
              )}

              {(key === "education" ||
                key === "workExperience" ||
                key === "organization") &&
                section.content.map((item, index) => (
                  <div key={index} className="card-soft p-3 mb-3 last:mb-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0 relative">
                        <h3 className="text-sm section-title break-words">
                          {item.title}
                        </h3>
                        <div className="relative z-10">
                          {" "}
                          {/* Tambahkan z-index di sini */}
                          <h4 className="text-sm link-primary mt-0.5 whitespace-nowrap overflow-visible absolute z-20">
                            {isEducationContent(item)
                              ? item.institution
                              : isWorkContent(item)
                              ? item.company
                              : isOrganizationContent(item)
                              ? item.organization
                              : ""}
                          </h4>
                        </div>
                      </div>
                      <span className="badge whitespace-nowrap flex-shrink-0">
                        {item.period}
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-soft space-y-0.5 mt-2 pt-4">
                      {" "}
                      {/* Tambahkan pt-4 di sini */}
                      {item.details?.map(
                        (detail: string, detailIndex: number) => (
                          <li key={detailIndex}>{detail}</li>
                        )
                      )}
                    </ul>
                  </div>
                ))}

              {key === "skills" && isSkills(section.content[0]) && (
                <div className="grid gap-3">
                  {Object.entries(section.content[0]).map(
                    ([category, skills]) => (
                      <div key={category} className="card-soft p-3">
                        <h3 className="text-sm section-title mb-2">
                          {category}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {skills.map((skill, index) => (
                            <span key={index} className="badge">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}

              {key === "projects" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </div>
              )}

              {key === "certifications" && (
                <ul className="grid md:grid-cols-2 gap-2">
                  {section.content.map((cert, index) => (
                    <li key={index} className="card-soft p-2">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center group"
                      >
                        <Star
                          className="mr-2 text-primary flex-shrink-0"
                          size={14}
                        />
                        <span className="text-xs text-soft group-hover:text-foreground transition-colors">
                          {cert.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
