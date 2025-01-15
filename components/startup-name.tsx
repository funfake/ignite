// components/startup-name.tsx
// Component to display the startup name and industry.
// Using the data from the chat store, gets updated dynamically if the store is modified from elsewhere.
"use client";
import { useChatStore } from "@/stores/useChatStore";

export default function StartupName() {
  const { name, industry } = useChatStore();

  return (
    <div className="text-center">
      <h1 className="title mb-1 break-words">{name}</h1>
      <p className="">{industry}</p>
    </div>
  );
}
