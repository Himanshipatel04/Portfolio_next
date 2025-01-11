"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import js from "@/public/assets/js.png";
import pandas from "@/public/assets/Pandas.png";
import numpy from "@/public/assets/numpy.png";
import matplotlib from "@/public/assets/matplotlib.png";
import seaborn from "@/public/assets/seab.png";
import powerbi from "@/public/assets/bi.png";
import c from "@/public/assets/pngwing.com.png";
import py from "@/public/assets/python.png";
import cpp from "@/public/assets/c-.png";
import docker from "@/public/assets/docker.png";
// import html from "@/public/assets/html-5.png";
// import css from "@/public/assets/css.png";
import react from "@/public/assets/react.png";
import express from "@/public/assets/express.png";
import ts from "@/public/assets/typescript.png";
import mongodb from "@/public/assets/mongo.png";
import mysql from "@/public/assets/mysql.png";
import sqlite from "@/public/assets/sqlite.png";
import git from "@/public/assets/git (1).png";
import github from "@/public/assets/gihub.png";
import vscode from "@/public/assets/vsc.png";
import notebook from "@/public/assets/main-logo.png";
import tailwind from "@/public/assets/tailwind.png";
import chakra from "@/public/assets/chakra.png";
import jwt from "@/public/assets/jwt.png";
import zustand from "@/public/assets/zustand.png";
import django from "@/public/assets/django.png";
import firebase from "@/public/assets/firebase.png";
import next from "@/public/assets/nextjs.png";
import { TypewriterEffect } from "./ui/typewriter-effect";

// Frameworks
const frameworks = [
  { id: 1, name: "React.js", image: react },
  { id: 2, name: "Express.js", image: express },
  { id: 3, name: "Django", image: django },
  { id: 4, name: "Next.js", image: next },
  { id: 5, name: "Chakra UI", image: chakra },
  { id: 6, name: "Tailwind CSS", image: tailwind },
  
];

// Databases
const databases = [
  { id: 1, name: "MySQL", image: mysql },
  { id: 2, name: "MongoDB", image: mongodb },
  { id: 3, name: "SQLite", image: sqlite },
  { id: 7, name: "Firebase", image: firebase },
];

// Programming Languages
const programmingLanguages = [
  { id: 1, name: "JavaScript", image: js },
  { id: 5, name: "TypeScript", image: ts },
  { id: 2, name: "Python", image: py },
  { id: 3, name: "C++", image: cpp },
  { id: 4, name: "C", image: c },
];

// Data Science
const dataScience = [
  { id: 1, name: "Pandas", image: pandas },
  { id: 2, name: "Numpy", image: numpy },
  { id: 3, name: "Matplotlib", image: matplotlib },
  { id: 4, name: "Seaborn", image: seaborn },
  { id: 5, name: "Power BI", image: powerbi },
  { id: 6, name: "Jupyter Notebook", image: notebook },
];

// Tools
const tools = [
  { id: 1, name: "Git", image: git },
  { id: 2, name: "GitHub", image: github },
  { id: 3, name: "VS Code", image: vscode },
  { id: 4, name: "JWT", image: jwt },
  { id: 5, name: "Zustand", image: zustand },
  {id:6,name:"Docker",image:docker}
];

const words = [{ text: "Skills" }];

function Skills() {
  return (
    <div className="flex px-10 pt-10 md:px-52 flex-col w-full ">
      <div className=" text-7xl text-center font-bold">
        <TypewriterEffect words={words} />
      </div>
      <div className="mt-16">
        {/* Frameworks Section */}
        <div className="flex flex-col gap-6">
          <p className="text-4xl font-bold  italic">
            Frameworks
          </p>
          <div className="grid md:grid-cols-6 grid-cols-2 md:gap-10 gap-10 items-center justify-center w-full">
            <AnimatedTooltip items={frameworks} />
          </div>
        </div>

        {/* Databases Section */}
        <div className="flex flex-col gap-6 mt-12">
          <p className="text-4xl font-bold italic">
            Databases
          </p>
          <div className="grid md:grid-cols-6 grid-cols-2 md:gap-10 gap-10 items-center justify-center w-full">
            <AnimatedTooltip items={databases} />
          </div>
        </div>

        {/* Programming Languages Section */}
        <div className="flex flex-col gap-6 mt-12">
          <p className="text-4xl font-bold  italic">
            Programming Languages
          </p>
          <div className="grid md:grid-cols-6 grid-cols-2 md:gap-10 gap-10 items-center justify-center w-full">
            <AnimatedTooltip items={programmingLanguages} />
          </div>
        </div>

        {/* Data Science Section */}
        <div className="flex flex-col gap-6 mt-12">
          <p className="text-4xl font-bold italic">
            Data Science [Familarity]
          </p>
          <div className="grid md:grid-cols-6 grid-cols-2 md:gap-10 gap-10 items-center justify-center w-full">
            <AnimatedTooltip items={dataScience} />
          </div>
        </div>

        {/* Tools Section */}
        <div className="flex flex-col gap-6 mt-12 mb-10">
          <p className="text-4xl font-bold  italic">
            Tools
          </p>
          <div className="grid md:grid-cols-6 grid-cols-2 md:gap-10 gap-10 items-center justify-center w-full">
            <AnimatedTooltip items={tools} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
