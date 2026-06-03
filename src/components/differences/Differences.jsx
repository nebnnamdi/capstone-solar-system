import "./Differences.css";

const planets = [
  {
    planet: "Mercury",
    distanceFromSun: 57.9,
    image: "https://anurella.github.io/images/planets/mercury.webp",
  },
  {
    planet: "Venus",
    distanceFromSun: 108.2,
    image: "https://anurella.github.io/images/planets/venus.webp",
  },
  {
    planet: "Earth",
    distanceFromSun: 149.6,
    image: "https://anurella.github.io/images/planets/earth.jpg",
  },
  {
    planet: "Mars",
    distanceFromSun: 227.9,
    image: "https://anurella.github.io/images/planets/mars.webp",
  },
  {
    planet: "Jupiter",
    distanceFromSun: 778.6,
    image: "https://anurella.github.io/images/planets/jupiter.webp",
  },
  {
    planet: "Saturn",
    distanceFromSun: 1433.5,
    image: "https://anurella.github.io/images/planets/saturn.webp",
  },
  {
    planet: "Uranus",
    distanceFromSun: 2872.5,
    image: "https://anurella.github.io/images/planets/uranus.webp",
  },
  {
    planet: "Neptune",
    distanceFromSun: 4495.1,
    image: "https://anurella.github.io/images/planets/neptune.webp",
  },
  {
    planet: "Pluto",
    distanceFromSun: 5906.4,
    image: "https://anurella.github.io/images/planets/pluto.webp",
  },
];

const Differences = () => {
  return (
    <section className="difference">
      <div className="difference-header">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>
      </div>

      <div className="planet-grid">
        {planets.map((planet) => (
          <div className="planet-card" key={planet.planet}>
            <img src={planet.image} alt={planet.planet} />

            <div className="planet-info">
              <h4>{planet.planet}</h4>
              <p>{planet.distanceFromSun} Million km</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Differences;