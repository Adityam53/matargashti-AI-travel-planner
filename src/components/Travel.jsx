import { HiLocationMarker } from "react-icons/hi";
export const Travel = ({
  destination,
  best_time,
  duration_days,
  top_attractions,
  sample_itinerary,
  budget_low,
  budget_mid,
  budget_high,
  local_tips,
}) => {
  return (
    <div className="">
      <div className="destination-banner">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
          alt={destination}
        />

        <div className="destination-banner-overlay">
          <span>{duration_days} Day Journey</span>
          <h1>{destination}</h1>
          <p>Curated travel experiences for modern explorers.</p>
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <h3>Best Time to Visit</h3> <p className="light-text">{best_time}</p>
        </div>

        <div className="card">
          {" "}
          <h3>Recommended Duration</h3>
          <p className="light-text">{duration_days} days</p>
        </div>
      </div>

      <div className="section">
        <h3>Top Attractions</h3>
        <div className="tags">
          {top_attractions.map((place, i) => (
            <span key={i} className="tag">
              {place}
            </span>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Sample Itinerary</h3>

        {sample_itinerary.map((item) => (
          <div key={item.day} className="itinerary-card">
            <div className="day">{item.day}</div>
            <div>
              <h4>Day {item.day}</h4>
              <p className="light-text">{item.plan}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="section">
        <h3>Estimated Budget (EUR)</h3>
        <div className="budget">
          <div className="budget-card">
            <span>Budget</span>
            <h2>€{budget_low}</h2>
            <p className="light-text">Affordable travel experience</p>
          </div>

          <div className="budget-card">
            <span>Comfort</span>
            <h2>€{budget_mid}</h2>
            <p className="light-text">Balanced hotels & activities</p>
          </div>

          <div className="budget-card">
            <span>Premium</span>
            <h2>€{budget_high}</h2>
            <p className="light-text">Luxury stays & experiences</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Local Tips</h3>
        <ul className="tips">
          {local_tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
