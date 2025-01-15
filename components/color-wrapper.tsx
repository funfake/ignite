// components/color-wrapper.tsx
// A wrapper to go around the root layout children within the body tag.
// Enables the website colors to be changed dynamically without impacting the server-rendered content.
// Avoiding the use of "use client" in the root layout which would impact SEO
// (page not rendered on the server and not readable by robots).
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
