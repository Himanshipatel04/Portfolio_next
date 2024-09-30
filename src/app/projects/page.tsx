import Nav from "@/components/Nav";
import { FocusCards } from "@/components/ui/focus-cards";
import learnify from '@/public/assets/learnify.png'

function FocusCardsDemo() {
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

  return (
    <div className="">
      <Nav /> <FocusCards cards={cards} />
    </div>
  );
}

export default FocusCardsDemo;
