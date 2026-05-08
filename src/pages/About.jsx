import {
  HiSparkles,
  HiOutlineGlobeAlt,
  HiOutlineLightningBolt,
} from "react-icons/hi";

import { FaPlaneDeparture } from "react-icons/fa";

export const About = () => {
  return (
    <div className="main-content">
      {/* HERO */}
      <section className="about-hero">
        <div className="hero-badge">
          <HiSparkles /> About Voyara
        </div>

        <h1>
          Travel planning,
          <br />
          redesigned for modern explorers.
        </h1>

        <p className="light-text about-copy">
          Voyara helps travelers build smarter itineraries, discover local
          experiences, and spend less time researching blogs, maps, and endless
          tabs.
        </p>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="about-story-card">
          <div className="story-icon">
            <FaPlaneDeparture size={28} />
          </div>

          <div>
            <p className="story-label">Our Vision</p>

            <h3>Travel experiences should feel curated, not overwhelming.</h3>

            <p className="light-text">
              Most trip planning tools overload users with scattered
              information. Voyara simplifies the process with immersive
              itineraries, destination insights, budget guidance, and
              personalized recommendations — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="section-heading">
          <p>Platform Features</p>
          <h2>Built for modern travelers.</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <HiOutlineGlobeAlt size={30} />

            <h3>Smart Itineraries</h3>

            <p className="light-text">
              Personalized day-wise travel plans curated around your destination
              and duration.
            </p>
          </div>

          <div className="feature-card">
            <HiOutlineLightningBolt size={30} />

            <h3>Fast Planning</h3>

            <p className="light-text">
              Generate immersive travel experiences in seconds without hours of
              manual research.
            </p>
          </div>

          <div className="feature-card">
            <HiSparkles size={30} />

            <h3>Local Experiences</h3>

            <p className="light-text">
              Discover attractions, hidden gems, routes, and smarter ways to
              explore new cities.
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section">
        <div className="section-heading">
          <p>Technology</p>
          <h2>Powered by a modern stack.</h2>
        </div>

        <div className="tags">
          <span className="tag">React</span>
          <span className="tag">Vite</span>
          <span className="tag">Node.js</span>
          <span className="tag">Express</span>
          <span className="tag">OpenRouter AI</span>
          <span className="tag">React Query</span>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="about-footer-card">
          <p className="footer-mini-title">Smarter travel starts here</p>

          <h2>
            Spend less time planning
            <br />
            and more time exploring.
          </h2>

          <p className="light-text">
            Voyara was built to make travel planning feel effortless, immersive,
            and inspiring.
          </p>
        </div>
      </section>
    </div>
  );
};
