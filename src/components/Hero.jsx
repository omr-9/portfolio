import { ArrowDown } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4"
      id="hero"
    >
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in">Hi, I'm</span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1">
            {" "}
            Omar
          </span>
          <span className="ml-2 text-gradient opacity-0 animate-fade-in-delay-2">
            {" "}
            AL-Sharkawi
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          I create stellar web experiences with modern technologies.
          Specializing in front-end development, I build interfaces that are
          both beautiful and functional.
        </p>
        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
