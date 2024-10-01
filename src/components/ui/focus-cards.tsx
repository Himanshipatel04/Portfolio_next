"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <Link target="__blank" href={card.url ? card.url : "/"}><div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <Image
      src={card.src}
      alt={card.title}
      fill
      className="object-cover absolute inset-0"
    />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-4 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl flex flex-col gap-2 font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
       <p className="font-semibold text-3xl"> {card.title}</p>
        <p>{card.tech}</p>
      </div>
    </div>
  </div></Link>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: {};
  tech:string;
  url?:string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl py-28 md:py-16 md:max-w-7xl mx-auto md:px-1 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
