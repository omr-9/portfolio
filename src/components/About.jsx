import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const aboutList = [
    {
    id: 1,
    icon: <Code className="w-6 h-6 text-primary"/>,
    title: "Web Development",
    description: " Creating responsive websites and web applications with modern frameworks."
},
    {
    id: 2,
    icon: <User className="w-6 h-6 text-primary"/>,
    title: "UI/UX Design",
    description: " Designing intuitive user interfaces and seamless user experiences."
},
    {
    id: 3,
    icon: <Briefcase className="w-6 h-6 text-primary"/>,
    title: "Project Management",
    description: " Leading projects from conception to completion with agile methodologies."
},
]

const About = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="cntainer max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-12 text-center font-bold">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/omarAlsharkawi-Frontend.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
           {aboutList.map((item) => (
                <div key={item.id} className="gradient-border p-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="rounded-full p-3 bg-primary/10">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{item.title} </h4>
                    <p className="text-muted-foreground">
                     {item.description}
                    </p>
                  </div>
                </div>
              </div>
           ))}
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
