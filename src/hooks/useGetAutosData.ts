import {  useEffect, useState } from "react";
import { fetchApi } from "../services/Api";
import { ApiAuto } from "../components/types/ApiAuto";

// Versión mejorada
export const useGetAutosData = () => {
  const [data, setData] = useState<ApiAuto[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Función para realizar la solicitud GET
    const fetchData = async () => {
      try {
        const response = await fetchApi<ApiAuto[]>(
          "https://67b3b2da392f4aa94fa80b2d.mockapi.io/auto",
          {
            method: "GET",
          }
        );
        setData(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Se ejecuta solo una vez al montar el componente
  return { data, loading, error };
};
