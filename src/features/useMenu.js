import { useQuery } from "@tanstack/react-query";
import { getMenuById } from "../services/menuApi";

export function useMenu(menuid) {
  const { isLoading, isRefetching, data, error } = useQuery({
    queryKey: ["menu"],
    queryFn: () => getMenuById(menuid),
  });

  return { isLoading, isRefetching, data, error };
}
