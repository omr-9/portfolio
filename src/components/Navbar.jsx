import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed  z-50 w-full transition-all duration-300 ",
        isScrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold flex items-center text-primary"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Omar</span>Portfolio
          </span>
        </a>
        {/* desktop menu */}
        <div className="hidden md:flex items-center space-x-16">
          <div className="space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
        {/* mobile menu */}
        <button
          className="md:hidden p-2 text-foreground z-50 cursor-pointer hover:text-primary transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "md:hidden w-full h-screen fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className=" text-foreground/80 hover:text-primary transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-8 md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
