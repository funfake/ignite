// app/page.tsx
// main page of the website
import Footer from "@/components/footer";
import StartupName from "@/components/startup-name";
import GenerateButton from "@/components/generate-btn";
import ContextCards from "@/components/context-cards";

export default function Home() {
  return (
    <div className="page">
      <main className="main">
        <StartupName />
        <GenerateButton />
        <ContextCards />
      </main>
      <Footer />
    </div>
  );
}
