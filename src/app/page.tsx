import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About"

export default function Home() {
  return (
    <div className="max-w-screen">
      <Nav />
      <div>
        <Hero />
        <About/>
        <Experience />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}
