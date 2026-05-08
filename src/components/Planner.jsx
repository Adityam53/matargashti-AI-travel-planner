import { useState } from "react";

export const Planner = ({
  city,
  setCity,
  country,
  setCountry,
  day,
  setDay,
  onGenerate,
  active = true,
}) => {
  const cities = [
    "Prague",
    "Jaipur",
    "Goa",
    "Varanasi",
    "Udaipur",
    "Manali",
    "Paris",
    "Nice",
    "Lyon",
    "Marseille",
    "Rome",
    "Venice",
    "Florence",
    "Milan",
    "Barcelona",
    "Madrid",
    "Seville",
    "Valencia",
    "Zurich",
    "Geneva",
    "Lucerne",
    "Interlaken",
    "Tokyo",
    "Kyoto",
    "Osaka",
    "Hiroshima",
    "Bangkok",
    "Phuket",
    "Chiang Mai",
    "Pattaya",
    "Bali",
    "Jakarta",
    "Yogyakarta",
    "New York",
    "Los Angeles",
    "Las Vegas",
    "San Francisco",
    "London",
    "Edinburgh",
    "Manchester",
    "Istanbul",
    "Cappadocia",
    "Antalya",
    "Athens",
    "Santorini",
    "Mykonos",
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Dubai",
    "Abu Dhabi",
    "Singapore",
    "Kuala Lumpur",
    "Penang",
    "Langkawi",
    "Toronto",
    "Vancouver",
    "Montreal",
    "Berlin",
    "Munich",
    "Hamburg",
    "Amsterdam",
    "Rotterdam",
    "Seoul",
    "Busan",
    "Auckland",
    "Queenstown",
    "Wellington",
  ];

  const countries = [
    "Czech Republic",
    "India",
    "France",
    "Italy",
    "Spain",
    "Switzerland",
    "Japan",
    "Thailand",
    "Indonesia",
    "United States",
    "United Kingdom",
    "Turkey",
    "Greece",
    "Australia",
    "United Arab Emirates",
    "Singapore",
    "Malaysia",
    "Canada",
    "Germany",
    "Netherlands",
    "South Korea",
    "New Zealand",
  ];

  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      <div className="planner-card">
        <div className="planner-top">
          <p className="planner-label">Plan smarter</p>
          <h3>Where are you headed next?</h3>
        </div>

        <div className="planner-options">
          <div className="options">
            <label>City</label>

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="select"
            >
              <option value="">Select a city</option>

              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="options">
            <label>Country</label>

            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="select"
            >
              <option value="">Select a country</option>

              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="options">
            <label>Duration</label>

            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="select"
            >
              <option value="">Select number of days</option>

              {days.map((day) => (
                <option key={day} value={day}>
                  {day} Days
                </option>
              ))}
            </select>
          </div>
        </div>

        <button onClick={onGenerate} type="submit" className="generate-btn">
          {active ? "Crafting your itinerary..." : "Build My Itinerary"}
        </button>
      </div>
    </>
  );
};
