import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as Color from "../service/color";

export const useColor = () => {
  const queryClient = useQueryClient();

  const getColors = useQuery({
    queryKey: ["colors"],
    queryFn: Color.getColors,
  });

  const createColors = useMutation({
    mutationFn: Color.createColor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["colors"] });
    },
  });

  const deleteColors = useMutation({
    mutationFn: Color.deleteColor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["colors"] });
    },
  });

  return { getColors, createColors, deleteColors };
};
