import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  //{ field: "totalPrice", value: 5000 , method: "gte" }

  const { isPending, data: bookings } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => getBookings({ filter }),
  });

  return { isPending, bookings };
}
