import React, { useEffect, useState } from "react";

const useFetch = <Payload>(
  url: string
): {
  data: Payload | null;
  loading: boolean;
  error: string | null;
} => {
  const [data, setData] = useState<Payload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Payload) => {
        setData(d);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
