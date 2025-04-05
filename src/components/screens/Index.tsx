import { useGetAutosData } from "../../hooks/useGetAutosData";
import AutosMapper from "../organisms/AutosMapper";

export function Reportes() {
  const { data, loading, error } = useGetAutosData();
  if (loading)
    return (
      <aside className="w-64 bg-white shadow-xl h-screen sticky top-0">
        Cargando...
      </aside>
    );
  if (error)
    return (
      <aside className="w-64 bg-white shadow-xl h-screen sticky top-0">
        Error: {error}
      </aside>
    );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* Contenido principal */}
      <AutosMapper autos={data}></AutosMapper>
    </div>
  );
}

export default Reportes;
