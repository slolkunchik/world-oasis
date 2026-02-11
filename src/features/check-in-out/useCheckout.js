import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateBooking } from "../../services/apiBookings";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isPending: isCheckingOut } = useMutation({
    mutationFn: (bookingId) => {
      return updateBooking(bookingId, {
        status: "checked-out",
      });
    },
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} has been succesfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (e) => {
      toast.error("There was an error while checking out");
    },
  });

  return { isCheckingOut, checkout };
}
