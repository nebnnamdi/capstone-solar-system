import "./facts.css";

export default function Facts() {
  return (
    <section className="facts">
      <div className="facts-container">
        <h2>Planetary Facts at a Glance</h2>

        <p className="intro">
          Below is a comparative table of major planets in our solar system.
          The data highlights key physical properties used by astronomers and
          researchers worldwide.
        </p>

        <p className="caption">
          Data about the planets of our solar system
          <span> (Planetary facts taken from NASA)</span>
        </p>

        <div className="table-wrapper">
          <table className="planet-table">
            <thead>
              <tr>
                <th colSpan="2"></th>
                <th>Name</th>
                <th>Mass (10 24kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m3)</th>
                <th>Gravity (m/s2)</th>
              </tr>
            </thead>

            <tbody>
              {/* Terrestrial */}
              <tr>
                <td className="category" colSpan="2" rowSpan="4">
                  Terrestrial Planets
                </td>
                <td>Mercury</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <td>Venus</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <td>Earth</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <td>Mars</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              {/* Jovian */}
              <tr>
                <td className="category" rowSpan="4">
                  Jovian
                  <br />
                  Planets
                </td>

                <td className="subcategory" rowSpan="2">
                  Gas Giants
                </td>

                <td>Jupiter</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <td>Saturn</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <td className="subcategory" rowSpan="2">
                  Ice Giants
                </td>

                <td>Uranus</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <td>Neptune</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              {/* Dwarf */}
              <tr>
                <td className="category" colSpan="2">
                  Dwarf Planets
                </td>

                <td>Pluto</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
