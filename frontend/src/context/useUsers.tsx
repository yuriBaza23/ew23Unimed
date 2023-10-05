import api from "@/api/api";
import { Client } from "@/utils/types";
import useSWR from "swr";

const fetcher = (url: string) =>
  api.get(url).then((res) => res.data as Client[]);

function useUsers() {
  const { data, error, isLoading } = useSWR(`/patient`, fetcher);

  return {
    users: data,
    isLoading,
    isError: error,
  };
}

export default useUsers;
