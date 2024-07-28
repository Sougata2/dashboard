import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editMenu } from "../services/menuApi";

export function useEditMenu() {
  const queryClient = useQueryClient();
  const { mutate: edit, isPending: isEditing } = useMutation({
    mutationFn: ({ menu, id }) => editMenu(menu, id),
    onSuccess: () => {
      alert("menu changed successfully");
      queryClient.invalidateQueries({
        queryKey: ["menu"],
      });
      queryClient.invalidateQueries({
        queryKey: ["menus"],
      });
    },
    onError: (err) => alert(err),
  });
  return { isEditing, edit };
}
