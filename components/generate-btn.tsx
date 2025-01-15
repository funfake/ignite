// components/generate-btn.tsx
// Button component to generate a new startup name.
// Separated from the main page to avoid using "use client" in the root layout.
// Behavior: resets all the chat store data, then generates a new startup.
"use client";
import { Button } from "./ui/button";
import { useChatStore } from "@/stores/useChatStore";

export default function GenerateButton() {
  const { resetAll, generateStartup, text_color } = useChatStore();

  const handleGenerate = async () => {
    resetAll();
    await generateStartup();
  };

  return (
    <Button
      size="lg"
      variant="generate"
      onClick={handleGenerate}
      className="hover:opacity-60"
      style={{
        borderColor: text_color,
        borderWidth: "2px",
        backgroundColor: "transparent",
        color: text_color,
      }}
    >
      Generate
    </Button>
  );
}
