import { useQuery } from "@tanstack/react-query";
import { getMenus } from "../services/menuApi";

export function useMenus() {
  const { isLoading, isPending, isRefetching, data, error } = useQuery({
    queryKey: ["menus"],
    queryFn: getMenus,
  });
  return { isLoading, isPending, isRefetching, data, error };
}
