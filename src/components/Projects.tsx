"use client";
import learnify from "@/public/assets/learnify.png";
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
    title: "BlogHive",
    src: learnify,
    category: "MERN",
    link: "https://bloghive-lovat.vercel.app/",
  },
  {
    title: "GoFood",
    src: learnify,
    category: "MERN",
    link: "",
  },
  {
    title: "TaskMate",
    src: learnify,
    category: "MERN",
    link: "",
  },
  {
    title: "categoryHub",
    src: learnify,
    category: "MERN",
    link: "",
  },
  {
    title: "Portfolio-Nextjs",
    src: learnify,
    category: "MERN",
    link: "",
  },
  {
    title: "Portfolio-Reactjs",
    src: learnify,
    category: "MERN",
    link: "",
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
