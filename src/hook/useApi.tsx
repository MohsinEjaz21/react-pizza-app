import { useState } from "react";

const useApi = (apiFunc) => (initialState) => {
  const [data, setData] = useState<typeof initialState>(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    try {
      const result = await apiFunc(...args);
      setData(result);
    } catch (err: any) {
      setError(err?.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, request };
};

export default useApi