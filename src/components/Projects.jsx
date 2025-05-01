import eShopImage from "../assets/eShop.png"
import imdBImage from "../assets/imdb.png"
import weatherImage from "../assets/weather.png"
import gamingImage from "../assets/gaming-site.png"
import { ArrowRight, ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Full Stack IMDb Clone",
    des: " A full-stack IMDb clone using Next.js, MongoDB, and Clerk. Features movie search, filtering, secure authentication, and a responsive UI with a favorites system.",
    img: imdBImage,
    tags: ["NextJs", "TailwindCss", "MongoDB", "TypeScript", "Clerk"],
    demoLink: "https://imdb-clone-taupe-eight.vercel.app/",
    githubLink:"https://github.com/omr-9/IMDB_clone"
  
  },
  {
    id: 2,
    title: "E-Shop App",
    des: " A fully functional e-commerce platform built with React and Next.js. Features include a shopping cart,Stripe integration for secure payments, and NextAuth for user authentication and order history management.",
    img:eShopImage,
    tags: [
      "NextJs",
      "TailwindCss",
      "TypeScript",
      "Stripe",
      "NextAuth",
    ],
      githubLink:"https://github.com/omr-9/e-shop-v1",
    demoLink: "https://e-shop-v1.vercel.app/",
  },
  {
    id: 3,
    title: "Weather App",
    des: "A sleek, dark-themed weather dashboard showing the current location, current conditions, hourly and 6-day forecasts, temperature, humidity, wind speed, and sunrise/sunset times with a modern UI.",
    img: weatherImage,
    tags: ["NextJs", "TailwindCss", "TypeScript", "Jotai"],
    demoLink: "https://weather-app-6xvl.vercel.app/",
    githubLink:"https://github.com/omr-9/weather-app"
  },
  {
    id: 4,
    title: "Gaming Website",
    des: " Agaming platform using Next.js, Tailwind CSS, and MongoDB. Features animations with Framer Motion,secure JWT authentication, game search, favorites, and user reviews.",
    img: gamingImage,
    tags: ["NextJs", "TailwindCss", "TypeScript", "MongoDB","FramerMotion",],
    demoLink: "https://gaming-website-u8lo.vercel.app/",
    githubLink:"https://github.com/omr-9/gaming-website"
  },
];
const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
       <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                  <div className="flex items-center justify-between">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/omr-9"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
