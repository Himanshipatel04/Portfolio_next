'use client'
import Nav from "@/components/Nav";
import { FocusCards } from "@/components/ui/focus-cards";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import learnify from "@/public/assets/learnify.png";
import gofood from "@/public/assets/gofood.png";
import bloghive from "@/public/assets/bloghive.png";
import portfolioReact from "@/public/assets/portfolio-react.png";
import taskmate from "@/public/assets/taskmate.png";
import eventpulse from "@/public/assets/eventpulse.png";
import techpng from "@/public/assets/techpng.png";
import techhub from "@/public/assets/techhub.png";
import portfolio from "@/public/assets/portfolio.png";

function Projects() {
  const cards = [
    {
      title: "Learnify",
      src: learnify,
      tech: "MERN",
      url: "https://learnifyprojectapp.netlify.app/",
    },
    {
      title: "TechPNG",
      src: techpng,
      tech: "NextJs",
      url: "https://techpng.vercel.app/",
    },
    {
      title: "EventPulse",
      src: eventpulse,
      tech: "MERN",
      url: "https://github.com/Himanshipatel04/EventPulse",
    },
    {
      title: "BlogHive",
      src: bloghive,
      tech: "MERN",
      url: "https://bloghive-lovat.vercel.app/",
    },
    {
      title: "GoFood",
      src: gofood,
      tech: "MERN",
      url: "https://github.com/Himanshipatel04/goFood-f",
    },
    {
      title: "TaskMate",
      src: taskmate,
      tech: "React-Django",
      url: "",
    },
    {
      title: "TechHub",
      src: techhub,
      tech: "NextJs",
      url: "https://tech-hub-coral.vercel.app/",
    },
    {
      title: "Portfolio",
      src: portfolio,
      tech: "NextJs",
      url: "https://himanshi-psi.vercel.app/",
    },
    {
      title: "Portfolio",
      src: portfolioReact,
      tech: "React",
      url: "https://himanship.vercel.app/",
    },
  ];

  const words = [
    { text: "Projects" }
  ]

  return (
    <div className="pt-20 md:pt-32 bg-gradient-to-r from-black to-neutral-800 max-h-fit">
      <div className="px-52 text-6xl font-bold"><TypewriterEffect words={words} /></div>
      <Nav /> <FocusCards cards={cards} />
    </div>
  );
}

export default Projects;
