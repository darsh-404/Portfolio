import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-6 text-center z-10">
        {/* Intro */}
        <div className="mb-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hi, I'm Darshan
          </h2>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>

          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Turning backend logic into real solutions with Java & Spring Boot, and giving it a simple face using HTML, CSS, and JavaScript. Always learning, always building.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-14">
          <a
            href="mailto:darshanathadakar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-transform duration-300 hover:scale-110"
            aria-label="Send Email"
          >
            <Mail className="w-6 h-6 text-blue-400" />
          </a>

          <a
            href="https://github.com/darshan-a28"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-transform duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-blue-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/darshan2003/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-transform duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-blue-400" />
          </a>
        </div>

        {/* Arrow Down */}
        <a href="#about" className="animate-bounce block">
          <ArrowDown className="w-8 h-8 text-slate-400 mx-auto" />
        </a>
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/20"></div>
      </div>
    </section>
  );
};

export default Hero;
