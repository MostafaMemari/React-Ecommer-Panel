import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

type ServiceFunction<T> = (...args: any[]) => Promise<T>;

export const useFetchData = <T,>(
  serviceFunction: ServiceFunction<T>,
  defaultArgs: any[] = []
): FetchState<T> & { refetch: (newArgs?: any[], resetPage?: boolean) => Promise<void> } => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const [queryArgs, setQueryArgs] = useState<any[]>(defaultArgs);

  const fetchData = async (args: any[] = queryArgs) => {
    setState((prevState) => ({ ...prevState, loading: true, error: null }));
    try {
      const data = await serviceFunction(...args);
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
  }, [serviceFunction, JSON.stringify(queryArgs)]);

  return {
    ...state,
    refetch: async (newArgs: any[] = [], resetPage: boolean = false) => {
      const updatedArgs = queryArgs.map((arg, index) => {
        if (resetPage && index === 0) return 1;
        return newArgs[index] !== undefined ? newArgs[index] : arg;
      });

      if (newArgs.length > queryArgs.length) {
        updatedArgs.push(...newArgs.slice(queryArgs.length));
      }

      setQueryArgs(updatedArgs);
      await fetchData(updatedArgs);
    },
  };
};
