
import { Code, Database, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
           <p className="text-lg text-slate-300 leading-relaxed">
  I’m a Full Stack Developer with a strong interest in backend development using Java, Spring Boot, Spring Data JPA, and Hibernate. I’ve worked with databases like MySQL and Oracle SQL to build data-driven applications and write efficient SQL queries.
</p>

<p className="text-lg text-slate-300 leading-relaxed">
  While backend is my main focus, I also have working knowledge of HTML, CSS, and JavaScript to build clean and functional user interfaces. I’ve developed and consumed REST APIs and worked on small projects following microservices architecture.
</p>

<p className="text-lg text-slate-300 leading-relaxed">
  I’m familiar with tools like Git, Maven, Docker, and Jenkins, and I always try to follow best practices to write maintainable code. As a fresher, I’m eager to learn, improve, and contribute to real-world projects that help me grow as a developer.
</p>

            
          </div>

          <div className="grid gap-6">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <Server className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Backend Development</h3>
              <p className="text-slate-300">
                Proficient in Java and Spring Boot for building RESTful APIs. Experienced with Spring MVC, Microservices architecture, Docker for containerization, and Jenkins for CI/CD automation.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <Database className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Database Design</h3>
              <p className="text-slate-300">
               Proficient in MySQL and Hibernate ORM for efficient data modeling and management, with hands-on experience in writing optimized SQL queries, designing relational schemas, and leveraging JPA for seamless database integration in Spring-based applications.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <Code className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Frontend Skills</h3>
              <p className="text-slate-300">
                Experienced with HTML, CSS, JavaScript, and modern frameworks for creating responsive UIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
