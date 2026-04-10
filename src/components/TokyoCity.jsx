import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Travel } from "./Travel";

export const TokyoCity = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["travel", "Tokyo", "Japan", 7],
    queryFn: () =>
      axios
        .get(
          "https://travel-planner-backend-pi.vercel.app/api/travel-plan?city=Tokyo&country=Japan&days=7",
        )
        .then((res) => res.data),

    staleTime: 1000 * 60 * 60 * 24, //No unnecessary refetch for 24 hours
    cacheTime: 1000 * 60 * 60 * 24, //keep in cache for 24h
  });

  if (isLoading)
    return <p className="light-text main-content">Loading travel plan...</p>;

  if (error)
    return <p className="light-text main-content">Something went wrong</p>;

  return (
    <>
      <div className="main-content">
        {data && (
          <Travel
            destination={data.destination}
            best_time={data.best_time}
            duration_days={data.duration_days}
            top_attractions={data.top_attractions}
            sample_itinerary={data.sample_itinerary}
            budget_low={data.estimated_budget_eur.low}
            budget_mid={data.estimated_budget_eur.mid}
            budget_high={data.estimated_budget_eur.high}
            local_tips={data.local_tips}
          />
        )}
      </div>
    </>
  );
};
