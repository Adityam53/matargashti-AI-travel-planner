import { FaPlaneDeparture } from "react-icons/fa";
import { LuNotebook } from "react-icons/lu";
import { HiLocationMarker } from "react-icons/hi";

export const About = () => {
  return (
    <div className="main-content">
      <div className="city-header flex">
        <FaPlaneDeparture color="#ada1e0" size={45} />
        <div>
          <h1>about matargashti</h1>
          <p className="light-text">
            Your AI-powered travel planning companion
          </p>
        </div>
      </div>

      <div className="card">
        <h3>What is this project?</h3>
        <p className="light-text">
          Matargashti is an AI-powered travel planner that helps users generate
          personalized travel itineraries based on their destination, duration,
          and preferences. It simplifies travel planning by providing curated
          attractions, daily plans, and budget insights instantly.
        </p>
      </div>

      <div className="section">
        <h3>Key Features</h3>

        <div className="cards">
          <div className="card">
            <HiLocationMarker size={25} />
            <h4>Smart Destination Planning</h4>
            <p className="light-text">
              Get tailored travel plans for cities around the world.
            </p>
          </div>

          <div className="card">
            <LuNotebook size={25} />
            <h4>Day-wise Itinerary</h4>
            <p className="light-text">
              Detailed daily schedules with attractions and activities.
            </p>
          </div>

          <div className="card">
            <FaPlaneDeparture size={25} />
            <h4>Instant AI Results</h4>
            <p className="light-text">
              Generate complete travel plans in seconds.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Tech Stack</h3>

        <div className="tags">
          <span className="tag">React</span>
          <span className="tag">Vite</span>
          <span className="tag">Node.js</span>
          <span className="tag">Express</span>
          <span className="tag">OpenRouter AI</span>
          <span className="tag">React Query</span>
        </div>
      </div>

      <div className="section">
        <div className="card">
          <p className="light-text">
            Built with ❤️ by a curious developer exploring AI + travel tech.
          </p>
        </div>
      </div>
    </div>
  );
};
