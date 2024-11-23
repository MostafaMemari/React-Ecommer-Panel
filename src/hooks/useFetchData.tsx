import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

type ServiceFunction<T> = (...args: any[]) => Promise<T>;

export const useFetchData = <T,>(
  serviceFunction: ServiceFunction<T>,
  ...args: any[]
): FetchState<T> & { refetch: (resetPage?: boolean) => Promise<void> } => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = async (customArgs?: any[]) => {
    setState({ data: null, loading: true, error: null });
    try {
      const finalArgs = customArgs || args;
      const data = await serviceFunction(...finalArgs);
      setState({ data, loading: false, error: null });
    } catch (error: unknown) {
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : "An error occurred",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [serviceFunction, ...args]);

  return {
    ...state,
    refetch: async (resetPage = false) => {
      const newArgs = args.map((arg, index) => (resetPage && index === 0 ? 1 : arg));
      await fetchData(newArgs);
    },
  };
};
