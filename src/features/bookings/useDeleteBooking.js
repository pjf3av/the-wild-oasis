import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking as deleteCabinApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success(`Booking successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      
    },

    onError: () => toast.error("There was an error while deleting"),
  });

  return { isDeleting, deleteBooking };
}
