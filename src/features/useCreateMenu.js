import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMenu } from "../services/menuApi";

export function useCreateMenu() {
  const queryClient = useQueryClient();
  const { mutate: create, isPending: isCreating } = useMutation({
    mutationFn: (newMenu) => createMenu(newMenu),
    onSuccess: () => {
      alert("New Menu Created");
      queryClient.invalidateQueries({
        queryKey: ["menus"],
      });
    },
    onError: (err) => alert(err),
  });
  return { create, isCreating };
}
