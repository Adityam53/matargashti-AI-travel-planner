import { Link } from "react-router-dom";
import {
  HiSparkles,
  HiOutlineGlobeAlt,
  HiOutlineLightningBolt,
} from "react-icons/hi";

export const Home = () => {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <HiSparkles /> AI-Powered Travel Planning
          </div>

          <h1>
            Trips that feel curated,
            <br />
            not generated.
          </h1>

          <p className="hero-text">
            Discover immersive itineraries, hidden gems, local experiences, and
            smarter travel planning for your next adventure.
          </p>

          <div className="hero-actions">
            <Link to="/planner" className="primary-btn">
              Start Planning
            </Link>

            <Link to="/tokyo-planner" className="secondary-btn">
              Explore Tokyo
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
            alt="Travel"
            loading="lazy"
          />

          <div className="floating-card card-1">
            <span>Curated Journeys</span>
            <strong> Built around your travel style</strong>
          </div>

          <div className="floating-card card-2">
            <span>Budget Optimized</span>
            <strong> Local Hidden Gems</strong>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <p>Why Voyara?</p>
          <h2>Travel planning that feels effortless.</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <HiOutlineGlobeAlt size={30} />
            <h3>Smart Itineraries</h3>
            <p>
              Personalized day-wise travel plans curated for your destination.
            </p>
          </div>

          <div className="feature-card">
            <HiOutlineLightningBolt size={30} />
            <h3>Instant Planning</h3>
            <p>
              Build complete travel experiences in seconds without endless
              research.
            </p>
          </div>

          <div className="feature-card">
            <HiSparkles size={30} />
            <h3>Local Experiences</h3>
            <p>Discover hidden gems, attractions, and smarter travel routes.</p>
          </div>
        </div>
      </section>

      <section className="destination-section">
        <div className="section-heading">
          <p>Featured Destinations</p>
          <h2>Explore your next adventure.</h2>
        </div>

        <div className="destination-grid">
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop"
              alt="Tokyo"
              loading="lazy"
            />
            <div className="destination-overlay">
              <h3>Tokyo</h3>
              <p>Neon nights & hidden ramen bars.</p>
            </div>
          </div>

          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop"
              alt="Bali"
              loading="lazy"
            />
            <div className="destination-overlay">
              <h3>Bali</h3>
              <p>Slow mornings & ocean sunsets.</p>
            </div>
          </div>

          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop"
              alt="Paris"
              loading="lazy"
            />
            <div className="destination-overlay">
              <h3>Paris</h3>
              <p>Cafes, art, and timeless streets.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
