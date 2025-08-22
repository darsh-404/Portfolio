import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
{
  title: "Full Stack Developer Intern",
  company: "",
  location: "Bangalore",
  period: "Mar 2025 – Present",
  description: [
    "Developing full stack web applications using Java, Spring Boot, and MySQL",
    "Creating RESTful APIs to handle backend logic and client-server communication",
    "Assisted in integrating frontend using basic HTML, CSS, and JavaScript",
    "Gained hands-on exposure to Docker and Jenkins for CI/CD concepts",
    "Utilized Git and Maven for version control and project build management",
    "Worked with Hibernate and JPA for ORM-based data persistence",
    "Explored basics of microservices architecture and service communication",
    "Participated in daily team stand-ups and sprint discussions following Agile methodology",
    "Collaborated with mentors to debug backend issues and improve application flow"
  ]
}

,
 {
  title: "Full Stack Web Development Intern",
  company: "Haegl Technologies Pvt Ltd",
  location: "Hubballi",
  period: "Aug 2023 – Sep 2023",
  description: [
    "Successfully completed an internship in Full Stack Web Development using Django",
    "Worked on a complete project handling both frontend and backend aspects",
    "Developed responsive UI using HTML, CSS, and JavaScript integrated with Django templates",
    "Built RESTful APIs and implemented CRUD operations using Django views and models",
    "Handled database design and interaction using MySQL",
    "Collaborated in version control using Git and contributed to team-based development"
  ]
}
,
    {
      title: "Machine Learning with Python (Research-Based) Intern",
      company: "Varcons Technologies Pvt. Ltd",
      location: "Remote",
      period: "Aug 2023 – Sep 2023",
      description: [
        "Worked on a research-based internship project titled ' Social Media Sentiment Analysis for Mobile Application '",
        "Built a Naive Bayes sentiment classification model using NLTK and scikit-learn",
        "Preprocessed user review text using tokenization, stopword removal, and stemming",
        "Tested and evaluated model accuracy using test datasets with CountVectorizer features",
        "Prepared a project report highlighting model design, evaluation, and client-oriented suggestions"
      ]
    }
    ,
    
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div className="flex items-start">
                {/* Timeline Dot and Line */}
                <div className="flex-shrink-0 w-4 h-4 bg-blue-400 rounded-full mt-2 mr-6 relative z-10">
                  <div
                    className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-slate-700 ${
                      index === experiences.length - 1 ? "invisible" : ""
                    }`}
                  ></div>
                </div>

                {/* Content Card */}
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <div className="flex items-center text-slate-300 mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-slate-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-slate-300 flex items-start"
                      >
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
