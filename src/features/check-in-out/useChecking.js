import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import { updateBooking } from "../../services/apiBookings";

export function useChecking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isPending: isCheckingIn } = useMutation({
    mutationFn: (bookingId) => {
      return updateBooking(bookingId, { status: "checked-in", isPaid: true });
    },
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} has been succesfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: (e) => {
      toast.error("There was an error while checking in");
    },
  });

  return { isCheckingIn, checkin };
}
