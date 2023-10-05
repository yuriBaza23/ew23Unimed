import api from "@/api/api";
import { Illness } from "@/utils/types";
import useSWR from "swr";

const fetcher = (url: string) =>
  api.get(url).then((res) => res.data as Illness[]);

function useIllness() {
  const { data, error, isLoading } = useSWR(`/illness`, fetcher);

  return {
    illnesses: data,
    isLoading,
    isError: error,
  };
}

export default useIllness;
