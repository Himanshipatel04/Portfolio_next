import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="max-w-screen">
      <Nav />
      <div>
        <Hero />
        <Experience/>
      </div>
    </div>
  );
}
