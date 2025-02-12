import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const PlateTectonics = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="module-container">
      <header className="module-header">
        <h1>Plate Tectonics Revolution (1900 CE – 1970 CE)</h1>
        <p>
          Discover the revolutionary theory of plate tectonics, which explained
          the dynamic nature of Earth's crust and provided insights into
          earthquakes, volcanic activity, and the formation of continents and
          ocean basins.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>Early Theories: Continental Drift</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("continentalDrift")}
            >
              {expandedSections.continentalDrift ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.continentalDrift && (
            <div className="section-content">
              <p>
                The theory of plate tectonics evolved from earlier ideas of
                continental drift, first proposed by Alfred Wegener in 1912.
                Wegener suggested that continents were once joined together in a
                supercontinent called <strong>Pangaea</strong> and had since
                drifted apart.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mollweide_Paleographic_Map_of_Earth%2C_250_Ma_%28Olenekian_Age%29.png/1280px-Mollweide_Paleographic_Map_of_Earth%2C_250_Ma_%28Olenekian_Age%29.png" />
              <p className="caption">Map of Pangea around 250 million years ago, at the beginning of the Triassic</p>
              <h3>Key Evidence for Continental Drift:</h3>
<ul>
  <li>
    <strong>Fossil Distribution:</strong>
    <ul>
      <li>Identical fossils of plants and animals were found on continents now separated by vast oceans. For example:
        <ul>
          <li>The extinct reptile <i>Mesosaurus</i>, a freshwater species, was discovered in both South America and Africa, suggesting these continents were once joined.</li>
          <li>Fossils of the seed fern <i>Glossopteris</i> were found across South America, Africa, India, Antarctica, and Australia, supporting the idea of a supercontinent.</li>
        </ul>
      </li>
      <li>This fossil evidence indicated that continents once formed a connected landmass, allowing species to inhabit regions that are now far apart.</li>
    </ul>
  </li>
  <li>
    <strong>Geological Similarities:</strong>
    <ul>
      <li>Matching rock formations and mountain ranges were observed on different continents, providing further evidence for their past connection. For example:
        <ul>
          <li>The Appalachian Mountains in North America align with the Caledonian Mountains in Scotland and Scandinavia, suggesting they were part of the same mountain range before continental separation.</li>
          <li>Similar rock strata and mineral deposits were found on both sides of the Atlantic Ocean, particularly between South America and Africa.</li>
        </ul>
      </li>
      <li>These geological similarities implied that these landmasses were once joined in a supercontinent called Pangaea.</li>
    </ul>
  </li>
  <li>
    <strong>Glacial Evidence:</strong>
    <ul>
      <li>Ancient glacial deposits were discovered in regions that are now tropical, such as India, South America, and Africa.</li>
      <li>Striations (scratches) in bedrock indicated the direction of glacial movement, which could only be explained if these regions were once closer to the poles.</li>
      <li>This evidence suggested that continents had shifted positions over geological time, moving from polar to tropical regions.</li>
    </ul>
  </li>
</ul>
<h3>Challenges to Wegener’s Theory:</h3>
<p>
  While Alfred Wegener’s theory of continental drift, proposed in 1912, presented compelling evidence, it faced significant skepticism from the scientific community. The primary criticism was the lack of a plausible mechanism to explain how continents moved. Wegener hypothesized that continents "plowed" through oceanic crust, driven by forces such as Earth's rotation and tidal forces, but this explanation was deemed insufficient. It was not until the mid-20th century, with the discovery of plate tectonics and seafloor spreading, that his ideas were vindicated.
</p>
<h3>Significance:</h3>
<p>
  Wegener’s theory laid the foundation for the modern understanding of plate tectonics, which explains the movement of Earth's lithospheric plates and the dynamic nature of the planet's surface. His work inspired further research, ultimately revolutionizing geology and providing insights into the formation of mountains, earthquakes, and the distribution of continents and oceans.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>The Rise of Plate Tectonics</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("plateTectonics")}
            >
              {expandedSections.plateTectonics ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.plateTectonics && (
            <div className="section-content">
              <p>
                The theory of plate tectonics gained traction in the mid-20th
                century, integrating continental drift with new discoveries about
                the ocean floor and Earth's interior.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Tectonic_plates_%282022%29.svg/1280px-Tectonic_plates_%282022%29.svg.png" />
              <p className="caption">Map of Earth's 16 principal tectonic plates Divergent:   Spreading center   Extension zone Convergent:   Subduction zone   Collision zone Transform:   Dextral transform   Sinistral transform</p>
              <h3>Key Developments:</h3>
<ul>
  <li>
    <strong>1940s–1950s: Sonar Mapping and Mid-Ocean Ridges</strong>
    <ul>
      <li>Advancements in sonar technology during and after World War II allowed scientists to map the seafloor in unprecedented detail.</li>
      <li>These maps revealed extensive mid-ocean ridges, vast underwater mountain chains running through all major ocean basins, and deep-sea trenches near continents.</li>
      <li>The discovery of these features provided the first clues about seafloor spreading and the dynamic nature of Earth's crust beneath the oceans.</li>
    </ul>
  </li>
  <li>
    <strong>1960: Harry Hess and Seafloor Spreading</strong>
    <ul>
      <li>Harry Hess proposed that new oceanic crust forms at mid-ocean ridges, where magma rises from the mantle, creating new seafloor that moves outward in both directions.</li>
      <li>This movement pushes continents apart, providing a mechanism to support Wegener's earlier theory of continental drift.</li>
      <li>Hess’s theory also explained the symmetrical patterns of younger crust near ridges and older crust further away.</li>
    </ul>
  </li>
  <li>
    <strong>1963: Vine-Matthews Hypothesis and Magnetic Stripes</strong>
    <ul>
      <li>Fred Vine and Drummond Matthews discovered alternating magnetic stripes on the ocean floor, caused by periodic reversals of Earth's magnetic field.</li>
      <li>These symmetrical stripes on either side of mid-ocean ridges confirmed that new crust was forming and spreading outward, preserving the magnetic orientation of the time.</li>
      <li>This discovery provided critical evidence for seafloor spreading and validated Hess’s theory.</li>
    </ul>
  </li>
  <li>
    <strong>1965: Tuzo Wilson and Transform Faults</strong>
    <ul>
      <li>Canadian geophysicist Tuzo Wilson introduced the concept of transform faults, which are fractures along plate boundaries where plates slide laterally past each other.</li>
      <li>Wilson’s work explained the lateral displacement observed at mid-ocean ridges and faults like the San Andreas Fault.</li>
      <li>His contributions helped unify various observations into the emerging theory of plate tectonics.</li>
    </ul>
  </li>
  <li>
    <strong>1968: Unification of Plate Tectonics</strong>
    <ul>
      <li>By 1968, the theory of plate tectonics was formally unified, describing Earth’s lithosphere as divided into rigid plates that float and move on the ductile asthenosphere beneath.</li>
      <li>Plate tectonics integrated concepts like seafloor spreading, continental drift, and transform faults into a single comprehensive model of Earth's dynamics.</li>
      <li>This theory revolutionized geology, providing explanations for mountain building, earthquakes, volcanism, and the distribution of continents and oceans.</li>
    </ul>
  </li>
</ul>
<h3>Plate Boundaries:</h3>
<ul>
  <li>
    <strong>Divergent Boundaries:</strong>
    <ul>
      <li>At divergent boundaries, tectonic plates move apart, creating mid-ocean ridges, rift valleys, and new crust.</li>
      <li>Examples include the Mid-Atlantic Ridge and the East African Rift.</li>
    </ul>
  </li>
  <li>
    <strong>Convergent Boundaries:</strong>
    <ul>
      <li>At convergent boundaries, plates collide, leading to subduction zones where one plate sinks beneath another or to the formation of mountain ranges.</li>
      <li>Examples include the Himalayas (continent-continent collision) and the Andes Mountains (ocean-continent subduction).</li>
    </ul>
  </li>
  <li>
    <strong>Transform Boundaries:</strong>
    <ul>
      <li>At transform boundaries, plates slide horizontally past each other, causing earthquakes along faults.</li>
      <li>Examples include the San Andreas Fault in California and the Alpine Fault in New Zealand.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  The development of plate tectonics marked a paradigm shift in geology, uniting observations about Earth’s surface and interior into a coherent theory. It provided a framework for understanding processes such as volcanism, earthquake activity, and mountain building while explaining the distribution of continents, oceans, and natural resources. Plate tectonics remains one of the most significant scientific advancements in understanding Earth’s dynamic system.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Impact on Earth Sciences</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("impactOnScience")}
            >
              {expandedSections.impactOnScience ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.impactOnScience && (
            <div className="section-content">
              <p>
                The plate tectonics revolution transformed geology and related
                sciences, providing a unifying framework for understanding
                Earth's processes.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Antonio_Snider-Pellegrini_Opening_of_the_Atlantic.jpg/1280px-Antonio_Snider-Pellegrini_Opening_of_the_Atlantic.jpg" />
              <p className="caption">More details Antonio Snider-Pellegrini's Illustration of the closed and opened Atlantic Ocean (1858)</p>
              <h3>Key Insights:</h3>
<ul>
  <li>
    <strong>Distribution of Geological Features:</strong>
    <ul>
      <li>Plate tectonics explained the global distribution of earthquakes, volcanoes, and mountain ranges, which are primarily concentrated along plate boundaries.</li>
      <li>For example, the Pacific Ring of Fire, a tectonically active zone, accounts for most of the world’s earthquakes and volcanic eruptions.</li>
      <li>The theory also clarified the processes that create geological features like mid-ocean ridges, subduction zones, and transform faults.</li>
    </ul>
  </li>
  <li>
    <strong>Mechanism for Continental Drift:</strong>
    <ul>
      <li>Plate tectonics provided the missing mechanism for Alfred Wegener’s earlier theory of continental drift, demonstrating how continents move as part of larger lithospheric plates.</li>
      <li>It also explained the formation and evolution of ocean basins through processes like seafloor spreading and subduction.</li>
    </ul>
  </li>
  <li>
    <strong>Understanding the Rock Cycle:</strong>
    <ul>
      <li>The theory enhanced understanding of the rock cycle, showing how crustal material is recycled through tectonic processes.</li>
      <li>Subduction zones return oceanic crust to the mantle, while volcanic activity brings new material to the surface, completing the cycle of creation and destruction of crustal rocks.</li>
    </ul>
  </li>
</ul>
<h3>Applications:</h3>
<ul>
  <li>
    <strong>Natural Disaster Prediction:</strong>
    <ul>
      <li>The study of plate tectonics has improved the ability to predict natural disasters like earthquakes and tsunamis by identifying tectonically active regions and understanding fault behavior.</li>
      <li>Seismologists use plate boundary data to assess earthquake risks and develop early warning systems, potentially saving lives and reducing damage.</li>
    </ul>
  </li>
  <li>
    <strong>Resource Exploration:</strong>
    <ul>
      <li>Plate tectonics has guided the exploration of natural resources, such as oil, gas, and minerals, by identifying areas where tectonic processes have concentrated these resources.</li>
      <li>For example, hydrocarbon deposits are often found in sedimentary basins formed along convergent or divergent plate boundaries, while valuable minerals are associated with volcanic and magmatic activity at plate boundaries.</li>
    </ul>
  </li>
  <li>
    <strong>Climate Studies:</strong>
    <ul>
      <li>The theory informs studies of long-term climate change by examining how the positioning of continents affects global climate patterns.</li>
      <li>For instance, the movement of continents can influence ocean currents, atmospheric circulation, and the distribution of heat and precipitation around the globe.</li>
      <li>The formation of mountain ranges, such as the Himalayas, also affects global carbon cycles by increasing weathering rates that draw down atmospheric CO₂.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  The insights and applications of plate tectonics have profoundly shaped Earth sciences, providing a unifying framework for understanding geological processes and their impact on the planet. From predicting natural disasters to guiding resource exploration and studying climate change, the theory remains a cornerstone of modern geology and continues to drive scientific discovery and practical innovation.
</p>

            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          The discovery of plate tectonics revolutionized our understanding of
          Earth's dynamic processes. By explaining phenomena such as
          earthquakes, volcanic eruptions, and mountain formation, it provided a
          unifying theory that continues to shape Earth sciences today.
        </p>
        <Link to="/science/physical/earth" className="back-link">
          Back to Geology
        </Link>
      </footer>
    </div>
  );
};

export default PlateTectonics;
