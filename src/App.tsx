import React from "react";
import { Mail, Phone, Linkedin, Github, Star } from "lucide-react";
import SectionHeader from "./components/SectionHeader";
import SkillSection from "./components/SkillSection";
import { cvSections } from "./data/cvData";

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
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-16 lg:px-32">
      <div className="max-w-[720px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-primary">Luthfi Hadi</h1>
          <div className="flex justify-center flex-wrap gap-4 mb-4">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-700 transition"
              >
                <contact.icon className="mr-2 text-primary" size={20} />
                <span className="text-sm text-secondary">{contact.text}</span>
              </a>
            ))}
          </div>
          <p className="max-w-xl mx-auto text-gray-600">
            A 5th-semester Computer Science student at BINUS University with a
            background in digital marketing, SEO, and content creation.
          </p>
        </header>

        {/* Sections */}
        {Object.entries(cvSections).map(([key, section]) => (
          <section key={key} className="mb-8">
            <SectionHeader title={section.title} icon={section.icon} />

            {key === "about" && (
              <p className="text-gray-700">{section.content[0].description}</p>
            )}

            {key === "education" &&
              section.content.map((edu, index) => (
                <div
                  key={index}
                  className="mb-4 bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-secondary">{edu.title}</h3>
                    <span className="text-sm text-gray-600">{edu.period}</span>
                  </div>
                  <h4 className="text-primary mb-2">{edu.institution}</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {edu.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}

            {key === "workExperience" &&
              section.content.map((work, index) => (
                <div
                  key={index}
                  className="mb-4 bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-secondary">{work.title}</h3>
                    <span className="text-sm text-gray-600">{work.period}</span>
                  </div>
                  <h4 className="text-primary mb-2">{work.company}</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {work.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}

            {key === "certifications" && (
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                {section.content.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <Star className="mr-2 text-primary" size={16} />
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition"
                    >
                      {cert.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default App;
