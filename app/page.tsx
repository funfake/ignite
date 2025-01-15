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
        {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
          
        </div> */}
      </main>
      <Footer />
    </div>
  );
}
