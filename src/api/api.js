import { useState, useEffect } from "react";

export function useCountries() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        if (!res.ok) {
          throw new Error("Data fetch failed.");
        }
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);
  return { data, loading, error };
}
