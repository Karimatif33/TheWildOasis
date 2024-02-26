import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../src/services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchpPrams] = useSearchParams();

  const filterValue = searchpPrams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
    const sortByRaw = searchpPrams.get('sortBy') || 'startDate-desc'
    const [field, direction] = sortByRaw.split('-')
    const sortBy = {field,direction}
  
      const {
    isLoading,
    data: bookings,
    // error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({filter, sortBy}),
  });
  return { isLoading, bookings };
}
