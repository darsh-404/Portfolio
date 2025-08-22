
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Jain College of Engineering and Technology, Hubli",
      period: "2020 - 2024",
        description: "Completed Bachelor's degree in Computer Science with a strong focus on Full Stack Development, Database Systems, and Software Engineering concepts."
,
        achievements: [
  "Completed Full Stack Development Internship at Airobosoft",
  "Final Year Project: Smart Gloves with Android Voice-Out (Assistive Tech)",
  "Completed Full Stack Java Developer Course (with Spring Boot & MySQL)",
  "Built multiple Java + SpringBoot-based management ystems"
]

    }
  ];

  const certifications = [
  {
    name: "Full Stack Java Developer Certification",
    issuer: "JSpiders",
    year: "2025"
  },
  {
    name: "Java Certification",
    issuer: "HackerRank",
    year: "2025"
  },
  {
    name: "SQL Skill Certification Test",
    issuer: "HackerRank",
    year: "2025"
  },
  {
    name: "The Ultimate HTML5 & CSS3 Series",
    issuer: "Code with Mosh",
    year: "2023"
  }
  ];

  return (
    <section id="education" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
                <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                <p className="text-slate-300 text-sm mb-4">{edu.period}</p>
                <p className="text-slate-300 mb-4">{edu.description}</p>
                
                <div className="space-y-2">
                  <h5 className="text-white font-medium">Key Achievements:</h5>
                  {edu.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span className="text-slate-300 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-900 p-4 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white mb-1">{cert.name}</h4>
                  <p className="text-blue-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-slate-300 text-sm">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
