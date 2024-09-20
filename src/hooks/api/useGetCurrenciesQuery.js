import { useQuery } from "@tanstack/react-query";
import getCurrencies from "../../service/currency/currency";

export default function useGetCurrenciesQuery() {
  return useQuery({
    queryKey: ["currencies"],
    queryFn: getCurrencies,
    staleTime: 300000,
    retry: 1,
  });
}
