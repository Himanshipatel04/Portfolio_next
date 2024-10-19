"use client";
import learnify from "@/public/assets/learnify.png";
import gofood from "@/public/assets/gofood.png";
import bloghive from "@/public/assets/bloghive.png";
import portfolioReact from "@/public/assets/portfolio-react.png";
import taskmate from "@/public/assets/taskmate.png";
import techhub from "@/public/assets/techhub.png";
import portfolio from "@/public/assets/portfolio.png";
// import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TypewriterEffect } from "./ui/typewriter-effect";

const words = [{ text: "Projects" }];

const data = [
  {
    title: "Learnify",
    src: learnify,
    category: "MERN",
    link: "https://learnifyprojectapp.netlify.app/",
  },
  {
    title: "GoFood",
    src: gofood,
    category: "MERN",
    link: "",
  },
  {
    title: "BlogHive",
    src: bloghive,
    category: "MERN",
    link: "https://bloghive-lovat.vercel.app/",
  },
 
  {
    title: "TaskMate",
    src: taskmate,
    category: "React-Django",
    link: "",
  },
  {
    title: "TechHub",
    src: techhub,
    category: "NextJs",
    link: "https://tech-hub-coral.vercel.app/",
  },
  {
    title: "Portfolio",
    src: portfolio,
    category: "NextJs",
    link: "",
  },
  {
    title: "Portfolio",
    src: portfolioReact,
    category: "React",
    link: "https://himanship.vercel.app/",
  },
];

function Projects() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="w-full h-fit px-4 md:px-52 py-10 bg-gradient-to-br from-black to-neutral-900">
      <div className="text-center text-6xl font-bold">
        <TypewriterEffect words={words} />
      </div>
      <Carousel items={cards} />
    </div>
  );
}

export default Projects;
