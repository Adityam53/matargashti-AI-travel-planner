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
      <div className="city-header flex">
        <HiLocationMarker size={45} />
        <div>
          <h1 className="">{destination}</h1>
          <p className="light-text">Your AI-generated travel guide</p>
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
          <div className="budget-card">Low: €{budget_low}</div>
          <div className="budget-card">Mid: €{budget_mid}</div>
          <div className="budget-card">High: €{budget_high}</div>
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
