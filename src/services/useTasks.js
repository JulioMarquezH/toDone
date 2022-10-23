import get from "./get";
import useSWR from "swr";

function useTasks(params) {
  const { data, error } = useSWR(["/tasks", params], get);
  const isLoading = !error && !data;
  const isError = Boolean(error);
  return {
    data,
    isError,
    isLoading,
  };
}

export default useTasks;
