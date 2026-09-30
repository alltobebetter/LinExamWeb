import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Workflow from "../components/Workflow";
import Arch from "../components/Arch";
import Security from "../components/Security";
import Download from "../components/Download";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Arch />
        <Security />
        <Download />
      </main>
    </div>
  );
}
