// components/footer.tsx
// Footer component used in the pages of the website.
// Using icons from Lucide.
import { AppWindowMac, Book, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/about"
      >
        <Book size={16} />
        About
      </Link>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://slideparty.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AppWindowMac size={16} />
        Slideparty.app
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://mistral.ai"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Sparkles size={16} />
        Made with MistralAI
      </a>
    </footer>
  );
}
