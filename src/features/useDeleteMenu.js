import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMenu } from "../services/menuApi";

export function useDeleteMenu() {
  const queryClient = useQueryClient();
  const { mutate: del, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteMenu(id),
    onSuccess: () => {
      alert("Menu deleted!");
      queryClient.invalidateQueries({
        queryKey: ["menus"],
      });
    },
    onError: (error) => alert(error),
  });
  return { del, isDeleting };
}
