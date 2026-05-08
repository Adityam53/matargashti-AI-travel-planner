import { HiSparkles } from "react-icons/hi";

export const Heading = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-badge planner-badge">
          <HiSparkles /> Smart Travel Planning
        </div>

        <h1>
          Build travel itineraries
          <br />
          that actually feel personal.
        </h1>

        <p className="light-text hero-copy">
          Personalized routes, hidden gems, smarter budgets, and immersive
          day-wise planning.
        </p>
      </section>
    </>
  );
};
