export default function Hero() {
  return (
    <div className="rounded-[2rem] border border-purple-100 bg-gradient-to-r from-purple-50 via-pink-50 to-cyan-50 p-8 shadow-xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-violet-700 shadow">
            Compar'Immo Mandaryne
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
            Votre bien est-il bien positionné face au marché ?
          </h1>

          <p className="mt-4 max-w-3xl text-slate-600">
            Comparez votre bien aux ventes réelles DVF et aux biens similaires autour de vous.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-lg">
          <p className="text-sm font-black uppercase text-slate-500">
            Comment ça marche ?
          </p>

          <div className="mt-4 space-y-3 text-sm font-bold text-slate-700">
            <p>✓ Adresse du bien</p>
            <p>✓ Analyse DVF</p>
            <p>✓ Comparaison locale</p>
            <p>✓ Positionnement marché</p>
          </div>
        </div>
      </div>
    </div>
  );
}
