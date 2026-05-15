export default function SourcesSection() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-black">
        Sources de données
      </h2>

      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
          <p className="font-black">DVF data.gouv</p>
          <p className="mt-2 text-sm text-slate-600">
            Ventes réelles.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
          <p className="font-black">CSV</p>
          <p className="mt-2 text-sm text-slate-600">
            Import manuel.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
          <p className="font-black">Annonces actives</p>
          <p className="mt-2 text-sm text-slate-600">
            APIs ou imports.
          </p>
        </div>
      </div>
    </div>
  );
}
