"use client";
import { Button } from "./ui/button";
import { useChatStore } from "@/stores/useChatStore";

export default function GenerateButton() {
  const { resetAll, generateStartup } = useChatStore();

  const handleGenerate = async () => {
    resetAll();
    await generateStartup();
  };

  return (
    <Button size="lg" onClick={handleGenerate}>
      Generate
    </Button>
  );
}
