import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import { getBookings } from "../../services/apiBookings";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  //{ field: "totalPrice", value: 5000 , method: "gte" }

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const pageRaw = searchParams.get("page");
  const page = !pageRaw ? 1 : Number(pageRaw);

  // QUERY
  const { isPending, data: { data: bookings, count } = {} } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

    if (page > 1) {
      queryClient.prefetchQuery({
        queryKey: ["bookings", filter, sortBy, page - 1],
        queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
      });
    }
  }

  return { isPending, bookings, count };
}
