// components/context-cards.tsx
// This file displays cards containing informations about the generated startup.
// It uses the content stored in the chat store and gets updated dynamically if the store is modified from elsewhere.
// Starting point generated with the help of v0.dev
"use client";
import { useChatStore } from "@/stores/useChatStore";
import Card from "./cards";

interface CardData {
  title: string;
  body: string;
}

export default function ContextCards() {
  const { problem, first_clients, market_size, text_color } = useChatStore();

  const cardData: CardData[] = [
    {
      title: "Problem",
      body: problem,
    },
    {
      title: "First Clients",
      body: first_clients,
    },
    {
      title: "Market Size",
      body: market_size,
    },
  ];

  // we don't want to render the cards if they contain no data
  if (!problem || !first_clients || !market_size) {
    return null;
  }

  return (
    <div className="flex flex-col lg:flex-row p-4">
      {/* <div className="flex"> */}
      {cardData.map((card, index) => (
        <Card text_color={text_color} key={index} {...card} />
      ))}
      {/* </div> */}
    </div>
  );
}
