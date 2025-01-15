"use client";
import { useChatStore } from "@/stores/useChatStore";

interface CardData {
  title: string;
  body: string;
}

export default function ContextCards() {
  const { problem, first_clients, market_size, text_color } = useChatStore();

  const Card: React.FC<CardData> = ({ title, body }) => (
    <div
      className="flex-shrink-0 w-64 p-4 bg-transparent border-2 mr-4 last:mr-0"
      style={{ borderColor: text_color }}
    >
      <h2 className="text-base font-bold mb-2">{title}</h2>
      <p className="text-sm">{body}</p>
    </div>
  );

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

  if (!problem || !first_clients || !market_size) {
    return null;
  }

  return (
    <div className="w-full overflow-x-auto p-4">
      <div className="flex">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
