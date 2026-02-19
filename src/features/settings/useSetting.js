import { useQuery } from "@tanstack/react-query";

import { getSetting } from "../../services/apiSettings";

export function useSetting() {
  const {
    isPending,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSetting,
  });

  return { isPending, error, settings };
}
