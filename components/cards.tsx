import React from "react";

interface CardData {
  title: string;
  body: string;
  text_color: string;
}

const Card: React.FC<CardData> = ({ title, body, text_color }) => (
  <div
    className="flex-shrink-0 w-64 p-4 bg-transparent border-2 mb-4 last:mb-0 lg:mr-4 last:mr-0"
    style={{ borderColor: text_color }}
  >
    <h2 className="text-base font-bold mb-2 font-[family-name:var(--font-geist-mono)]">
      {title}
    </h2>
    <p className="text-sm">{body}</p>
  </div>
);

export default Card;
