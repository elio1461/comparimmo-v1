const biens = [
  {
    ville: "Caen",
    type: "Maison",
    surface: 82,
    prix: 282000,
  },
  {
    ville: "Louvigny",
    type: "Maison",
    surface: 85,
    prix: 285000,
  },
];

export default function Comparables() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-black">
        Biens comparables
      </h2>

      <div className="mt-6 space-y-4">
        {biens.map((bien, index) => (
          <div
            key={index}
            className="rounded-[1.5rem] border border-slate-200 p-5"
          >
            <p className="text-xl font-black">
              {bien.type} — {bien.ville}
            </p>

            <p className="mt-2 text-slate-600">
              {bien.surface} m²
            </p>

            <p className="mt-2 text-2xl font-black">
              {bien.prix.toLocaleString("fr-FR")} €
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
