import query from "../query";
import useSWR from "swr";

function useTasks(params) {
  const { data, error } = useSWR(["/tasks", params], query);
  const isLoading = !error && !data;
  const isError = Boolean(error);
  return {
    data,
    isError,
    isLoading,
  };
}

export default useTasks;
