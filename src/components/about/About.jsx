import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        
        <figure className="about-image">
          <img
            src="/about-video.jpg"
            alt="Planetary Data"
          />
       <video
    className="overlay-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/planet-video.mp4" type="video/mp4" />
  </video>
        
        </figure>

        <div className="about-content">
          <h2>
            How Planetary Data Helps Us
            <br />
            Understand Space
          </h2>

          <p>
            Planetary science goes beyond images. Comparing
            <span> mass</span>, <span> diameter</span>,
            <span> gravity</span>, and <span> density</span>,
            we gain insight into how planets form, behave,
            and interact within the solar system.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;