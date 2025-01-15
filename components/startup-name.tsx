"use client";
import { useChatStore } from "@/stores/useChatStore";

export default function StartupName() {
  const { name, industry } = useChatStore();

  return (
    <div className="text-center">
      <h1 className="title">{name}</h1>
      <p className="">{industry}</p>
    </div>
  );
}
