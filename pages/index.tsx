import Hero from "../components/Hero";
import FormulaireBien from "../components/FormulaireBien";
import Comparables from "../components/Comparables";
import SourcesSection from "../components/SourcesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-7xl p-6 space-y-6">
        <Hero />

        <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
          <FormulaireBien />

          <div className="space-y-6">
            <SourcesSection />
            <Comparables />
          </div>
        </div>
      </div>
    </main>
  );
}
