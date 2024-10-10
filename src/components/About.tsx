"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
// import Nav from "@/components/Nav";
import { TypewriterEffect } from "./ui/typewriter-effect";

const words = [{text:"About"},{text:"Me"}]

function page() {
  return (
    <div className="h-fit px-2 md:px-0">
     <div className="text-center mt-10 md:mt-20"> <TypewriterEffect words={words} /></div>
      <TracingBeam className="px-6 mt-10 md:mt-20">
        <div className="max-w-2xl mx-auto antialiased px-2 pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-xl italic w-fit px-4 py-3 mb-4">
                {item.badge}
              </h2>

              {/* <p className={twMerge("text-xl  mb-4")}>{item.title}</p> */}

              <div className="text-md">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "",
    description: (
      <>
        <p>
          Hello I am{" "}
          <span className="text-purple-500 font-semibold text-2xl">
            Himanshi Patel
          </span>
          .
        </p>
        <p>
          I am a passionate software engineer with a focus on full-stack
          development. I enjoy building dynamic, user-friendly web applications
          using React, MongoDB, and Next.js.
        </p>
        <p>
          I'm excited about advancing in my career, learning more about AI
          integration, and contributing to projects that make a difference.
        </p>
      </>
    ),
    badge: "Brief Intro",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    description: (
      <>
        <p>
          I completed my schooling at Gurudev Public School, achieving a strong
          academic record with 93.6% in 12th grade and 95.6% in 10th grade.
          <br />
          My academic journey built a solid foundation in subjects like
          Mathematics, Physics, and Information Technology, which sparked my
          interest in technology and problem-solving.
        </p>
      </>
    ),
    badge: "Schooling",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    description: (
      <>
        <p>
          I&rsquo;m started pursuing my B.Tech. at IES College of Technology in
          2022, where I&rsquo;m in the 5th semester with a CGPA of 8.3. <br />{" "}
          My coursework and projects have helped me gain expertise in areas like
          software development, web technologies, and backend systems.
          I&rsquo;ve actively participated in various technical events and
          innovation projects.
        </p>
      </>
    ),
    badge: "Graduation",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    description: (
      <>
        <p>
          I’m an avid reader and enjoy writing on a variety of topics that spark
          my curiosity. <br /> I've explored books like
          <em> The Almanack of Naval Ravikant</em>, <em>Atomic Habits</em>,{" "}
          <em>Sapiens</em>, and <em>The Subtle Art </em>, which have deepened my
          interest in personal growth and understanding human behavior.
        </p>
        <p>
          In addition to reading, I'm passionate about learning more about{" "}
          <strong>finance</strong> and staying updated on the latest{" "}
          <strong>tech innovations</strong>. I’m always on the lookout for new
          opportunities in the tech space that challenge me to grow both
          personally and professionally.
        </p>
      </>
    ),
    badge: "Interests",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default page;
