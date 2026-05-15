export default function FormulaireBien() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-black">
        Votre bien
      </h2>

      <div className="mt-6 space-y-4">
        <input
          placeholder="Ville"
          className="w-full rounded-2xl border border-slate-200 px-4 py-3"
        />

        <input
          placeholder="Adresse précise"
          className="w-full rounded-2xl border border-slate-200 px-4 py-3"
        />

        <div className="grid grid-cols-2 gap-3">
          <select className="rounded-2xl border border-slate-200 px-4 py-3">
            <option>Maison</option>
            <option>Appartement</option>
          </select>

          <input
            placeholder="Surface"
            className="rounded-2xl border border-slate-200 px-4 py-3"
          />
        </div>

        <button className="w-full rounded-2xl bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 px-5 py-4 text-lg font-black text-white">
          Voir mon positionnement marché
        </button>
      </div>
    </div>
  );
}
