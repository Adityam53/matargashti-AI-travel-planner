import { Heading } from "./Heading";
import { Planner } from "./Planner";
import { Travel } from "./Travel";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const MainContent = () => {
  const [city, setCity] = useState("Prague");
  const [country, setCountry] = useState("Czech Republic");
  const [day, setDay] = useState(8);
  const [submited, setSubmited] = useState({
    city: "",
    country: "",
    day: "",
  });

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["travel", submited.city, submited.country, submited.day],
    queryFn: () =>
      axios
        .get(
          `https://travel-planner-backend-pi.vercel.app/api/travel-plan?city=${submited.city}&country=${submited.country}&days=${submited.day}`,
        )
        .then((res) => res.data),

    enabled: !!submited.city && !!submited.country && !!submited.day,
    staleTime: Infinity, //No unnecessary refetch for 24 hours
    cacheTime: Infinity, //keep in cache for 24h
  });

  const handleGenerate = () => {
    setSubmited({ city, country, day });
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
          active={isLoading}
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
