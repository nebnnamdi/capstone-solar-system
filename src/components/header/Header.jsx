import "./header.css";

export default function Header() {
    const goToFacts = () => {
    document.getElementById("facts")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const goToContact = () => {
    document.getElementById("contact-us")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <header className="hero">
      <nav className="navbar">
        <figure className="logo">
          <img src="/logo.png" alt="Planet Logo" />
        
        </figure>
      </nav>

      <div className="hero-content">
        <div className="text-content">
          <h1>
            Explore Our Solar
            <br />
            System Through Data
          </h1>

          <p>
            Understand the planets not just by name, but by measurable
            facts. From size and mass to gravity and density, this page
            breaks down the solar system in a clear, data-driven way.
          </p>

          <div className="buttons">
            <button className="primary-btn" onClick={goToFacts}>Explore the Data</button>
            <button className="secondary-btn" onClick={goToContact}>Contact Us</button>
          </div>
        </div>

        <div className="image-content">
          <img src="/earth.png" alt="Earth" />
        </div>
      </div>
    </header>
  );
}