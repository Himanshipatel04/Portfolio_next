'use client'
import Nav from "@/components/Nav";
import { FocusCards } from "@/components/ui/focus-cards";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import learnify from '@/public/assets/learnify.png'

function Projects() {
  const cards = [
    {
      title: "Learnify",
      src: learnify,
      tech: "MERN",
      url:"https://learnifyprojectapp.netlify.app/"
    },
    {
      title: "BlogHive",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: "MERN",
      url:"https://bloghive-lovat.vercel.app/"
    },
    {
      title: "GoFood",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: "MERN",
    },
    {
      title: "TaskMate",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: "MERN",
    },
    {
      title: "TechHub",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: "MERN",
    },
    {
      title: "Portfolio-Nextjs",
      src: "https://assets.aceternity.com/the-first-rule.png",
      tech: "MERN",
    },
    {
      title: "Portfolio-Reactjs",
      src: "https://assets.aceternity.com/the-first-rule.png",
      tech: "MERN",
    },
  ];

  const words = [
    {text: "Projects" }
  ]

  return (
    <div className="pt-20 md:pt-32 bg-gradient-to-r from-black to-neutral-800 max-h-fit">
      <div className="px-52 text-6xl font-bold"><TypewriterEffect words={words}/></div>
      <Nav /> <FocusCards cards={cards} />
    </div>
  );
}

export default Projects;
