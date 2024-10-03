import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "./projects/page";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="max-w-screen">
      <Nav />
      <div>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}
