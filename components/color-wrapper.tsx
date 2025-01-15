"use client";

import { useChatStore } from "../stores/useChatStore";

const ColorWrapper = ({ children }: { children: React.ReactNode }) => {
  const { text_color, background_color } = useChatStore();

  console.log("text_color", text_color);
  console.log("background_color", background_color);
  return (
    <div
      className="antialiased"
      style={{ backgroundColor: background_color, color: text_color }}
    >
      {children}
    </div>
  );
};

export default ColorWrapper;
