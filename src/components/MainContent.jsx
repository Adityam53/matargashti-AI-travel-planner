import { Heading } from "./Heading";
import { Planner } from "./Planner";
import { Travel } from "./Travel";
import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const MainContent = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [day, setDay] = useState(null);

  const [queryParams, setQueryParams] = useState(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    const savedParams = queryClient.getQueryData(["travelParams"]);

    if (savedParams) {
      setCity(savedParams.city);
      setCountry(savedParams.country);
      setDay(savedParams.day);
      setQueryParams(savedParams);
    }
  }, [queryClient]);
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["travel", queryParams],
    queryFn: () =>
      axios
        .get(
          `https://travel-planner-backend-pi.vercel.app/api/travel-plan?city=${queryParams.city}&country=${queryParams.country}&days=${queryParams.day}`,
        )
        .then((res) => res.data),
    enabled: !!queryParams,
    staleTime: Infinity, //No unnecessary refetch for 24 hours
    gcTime: Infinity, //keep in cache for 24h

    placeholderData: (prev) => prev,
  });

  const handleGenerate = () => {
    const params = { city, country, day };
    setQueryParams(params);
    queryClient.setQueryData(["travelParams"], params);
  };
  if (isLoading)
    return (
      <div className="main-content">
        <Heading /> <Planner />
        <p className="light-text">Loading travel plan...</p>
      </div>
    );

  if (error)
    return (
      <div className="main-content">
        <Heading /> <Planner />
        <p className="light-text">Something went wrong...</p>
      </div>
    );

  return (
    <>
      <div className="main-content">
        <Heading />
        <Planner
          city={city}
          setCity={setCity}
          country={country}
          setCountry={setCountry}
          day={day}
          setDay={setDay}
          onGenerate={handleGenerate}
          active={isLoading || isFetching}
        />
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
