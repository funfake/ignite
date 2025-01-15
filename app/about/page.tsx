// app/about/page.tsx
import Footer from "@/components/footer";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="page">
      <main className="main max-w-lg items-start">
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/"
            className={buttonVariants({ variant: "ghost" }) + " mx-auto"}
          >
            <ArrowLeft size={16} />
            Go back
          </Link>
          <h1 className="title text-center">About this project</h1>
        </div>
        <p className="">
          Ignite is a fun website that generates random startup concepts to
          train yourself to pitch new business ideas.
        </p>
        <p className="">
          This project has been finalized over the course of 7 hours. It is
          based on Next.js and Mistral AI. The UI has been made with Shadcn/ui,
          TailwindCSS and Lucide Icons.
        </p>
        <p className="">
          It is part of my application to work for Mistral AI. The repo is
          available here:{" "}
          <a
            href="https://github.com/funfake/ignite"
            className="underline"
            target="_blank"
          >
            https://github.com/funfake/ignite
          </a>
        </p>
        <p className="">William BRISA | 15/01/2025</p>
      </main>
      <Footer />
    </div>
  );
}
