import { ExternalLink, Github, Server, Hand, BookOpen } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform (Under Development)", 
      description: "Full-stack e-commerce application with Spring Boot backend and responsive frontend. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "RESTful API with Spring Boot",
        "MySQL database with Hibernate ORM",
        "User authentication & authorization",
        "Responsive design"
      ],
      icon: <Server className="w-8 h-8 text-blue-400" />,
      github: "https://github.com/darshan-a28/E-Commerce-Application.git",
      demo: "#",
      status: "development" 
    },
    {
      title: "Smart Gloves with Android Voice-Out", 
      description: "An assistive wearable solution designed for people with speech and hearing disabilities. Converts hand gestures into speech using embedded sensors and Android voice output.",
      technologies: ["Java", "XML", "PHP", "MySQL", "Embedded C", "ESP32", "Flex Sensors", "Android Studio"],
      features: [
        "Gesture recognition using flex and motion sensors",
        "ESP32 microcontroller integration",
        "Android app with Text-to-Speech (TTS)",
        "Portable and low-cost design"
      ],
      icon: <Hand className="w-8 h-8 text-blue-400" />,
      github: "https://github.com/darshan-a28",
      demo: "#",
      status: "no-demo" 
    },
    {
      title: "Bookstore Management System", 
      description: "A full-stack Java Spring Boot application for managing books in a store. Features include CRUD operations, price filtering, and search by title using REST APIs.",
      technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "Add, update, delete, and search books",
        "Filter by price and title",
        "REST API endpoints using Spring Boot",
        "Integrated frontend using HTML/CSS/JS"
      ],
      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
      github: "https://github.com/darshan-a28/Bookstore-Management-System.git",
      demo: "#",
      status: "no-demo" 
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my full-stack development skills and expertise in Java, Spring Boot, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-300 text-sm flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-blue-400 text-xs rounded-full border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    <span className="text-sm">Code</span>
                  </a>

                  {}
                  {project.status === "live" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}

                  {project.status === "development" && (
                    <span
                      className="flex items-center text-gray-500 cursor-not-allowed"
                      title="Project still under development"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="text-sm">Coming Soon</span>
                    </span>
                  )}

                  {project.status === "no-demo" && (
                    <span
                      className="flex items-center text-gray-500 cursor-not-allowed"
                      title="Demo not available"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="text-sm">No Demo</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">Want to see more projects?</p>
          <a
            href="https://github.com/darshan-a28"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
