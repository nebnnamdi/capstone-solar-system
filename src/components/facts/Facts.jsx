import "./facts.css";

function Facts() {
  return (
    <section class="table" id="table">
      <h2 class="facts-planet">Planetary Facts at a Glance</h2>
      <p>
        Below is a comparative table of major planets in our solar system.The
        data highlight key physical
      </p>
      <p>properties used by astronomers and researchers worldwide.</p>
      <br />
      <br />

      <table>
        <caption>
          Data about the planets of our solar system (Planetary facts taken from
          NASA)
        </caption>
        <thead>
          <tr class="thead">
            <th scope="col" colspan="2" class="head"></th>
            <th scope="col" class="head">
              Name
            </th>
            <th scope="col" class="head">
              Mass (10 24kg)
            </th>
            <th scope="col" class="head">
              Diameter (km)
            </th>
            <th scope="col" class="head">
              Density (kg/m3)
            </th>
            <th scope="col" class="head">
              Gravity (m/s2)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" colspan="2" rowspan="4">
              Terrestial Planets
            </th>
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
          <tr>
            <th scope="row" rowspan="4">
              Jovian Planets
            </th>
            <th rowspan="2">Gas Giants</th>
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
            <th scope="row" rowspan="2">
              Ice Giants
            </th>
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
          <tr>
            <th scope="row" colspan="2" class="facts-dwarf">
              Dwarf Planets
            </th>
            <td>Pluto</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Facts;
