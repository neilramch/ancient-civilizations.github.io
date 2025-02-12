import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../module.css"; // Optional: Custom styles

const DarwinEvolution = () => {
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
        <h1>Darwin and Evolution: The Origins of Natural Selection</h1>
        <p>
          (1800 CE – 1900 CE) Explore Charles Darwin's revolutionary theory of natural selection and how it reshaped our understanding of life's diversity and interconnectedness.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>Charles Darwin's Early Life and Voyages</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("darwinLife")}
            >
              {expandedSections.darwinLife ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.darwinLife && (
            <div className="section-content">
              <p>
                Charles Darwin (1809–1882) was an English naturalist whose observations during his voyage on the HMS Beagle shaped his groundbreaking ideas on evolution.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Charles_Darwin_by_G._Richmond.png/1280px-Charles_Darwin_by_G._Richmond.png"
                alt="Charles Darwin"
              />
              <p className="caption">While still a young man, Darwin joined the scientific elite; portrait by George Richmond.</p>
              <h3>Key Milestones in Darwin's Life:</h3>
<ul>
  <li>
    <strong>1831–1836: Voyage Aboard the HMS Beagle</strong>
    <ul>
      <li>Darwin embarked on a five-year journey aboard the HMS Beagle as the ship's naturalist, tasked with collecting specimens and studying the geology and biology of various regions.</li>
      <li>During this voyage, he visited diverse ecosystems, including South America, the Galápagos Islands, and Australia, which profoundly influenced his thinking about the natural world.</li>
      <li>Darwin's meticulous observations and specimen collections formed the foundation for his later work on evolution.</li>
    </ul>
  </li>
  <li>
    <strong>1835: Observations in the Galápagos Islands</strong>
    <ul>
      <li>While in the Galápagos Islands, Darwin noted variations in species like finches and tortoises across different islands.</li>
      <li>He observed that finches had different beak shapes suited to their specific diets, while tortoises displayed variations in shell shape based on their habitats.</li>
      <li>These observations hinted at adaptation and the possibility that species could change over time in response to environmental pressures.</li>
    </ul>
  </li>
  <li>
    <strong>1859: Publication of <i>On the Origin of Species</i></strong>
    <ul>
      <li>Darwin’s seminal work, <i>On the Origin of Species</i>, introduced the theory of evolution by natural selection, revolutionizing biology and challenging prevailing views on the origin of life.</li>
      <li>The book detailed how organisms with advantageous traits are more likely to survive and reproduce, passing those traits to the next generation.</li>
      <li>Darwin’s arguments were supported by extensive evidence from his observations, experiments, and correspondences with other scientists.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Charles Darwin’s journey aboard the HMS Beagle and his subsequent studies transformed the understanding of life's development and diversity. His observations in the Galápagos Islands highlighted the role of adaptation and variation in shaping species, leading to the formulation of his groundbreaking theory of natural selection. The publication of <i>On the Origin of Species</i> not only provided a scientific explanation for evolution but also laid the foundation for modern biology, influencing countless fields such as genetics, ecology, and anthropology. Darwin's legacy endures as one of the most significant contributions to science and our understanding of life on Earth.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>The Theory of Natural Selection</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("naturalSelection")}
            >
              {expandedSections.naturalSelection ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.naturalSelection && (
            <div className="section-content">
              <p>
                Darwin's theory of natural selection proposed that organisms with traits better suited to their environment are more likely to survive and reproduce, passing those traits to the next generation.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/LA2-NSRW-3-0536_cropped.jpg/1280px-LA2-NSRW-3-0536_cropped.jpg" />
              <p className="caption">Charles Darwin noted that pigeon fanciers had created many kinds of pigeon, such as Tumblers (1, 12), Fantails (13), and Pouters (14) by selective breeding.</p>
              <h3>Core Principles:</h3>
<ul>
  <li>
    <strong>Variation:</strong>
    <ul>
      <li>Individuals within a species show differences in traits, such as size, color, behavior, and physiological characteristics.</li>
      <li>These variations arise through genetic mutations, recombination during sexual reproduction, and other biological processes.</li>
      <li>Variation provides the raw material for natural selection to act upon, enabling populations to respond to changing environments.</li>
    </ul>
  </li>
  <li>
    <strong>Inheritance:</strong>
    <ul>
      <li>Certain traits are heritable, meaning they can be passed from parents to offspring through genetic material.</li>
      <li>Inheritance ensures that advantageous traits observed in one generation have the potential to persist and spread in subsequent generations.</li>
      <li>Darwin’s understanding of inheritance predated the discovery of DNA, but his observations aligned with what we now know about genetic transmission.</li>
    </ul>
  </li>
  <li>
    <strong>Differential Survival and Reproduction:</strong>
    <ul>
      <li>Organisms with traits that provide a survival or reproductive advantage are more likely to survive, reproduce, and pass on those advantageous traits.</li>
      <li>Factors such as predation, competition, disease, and environmental challenges drive this differential success.</li>
      <li>This principle, often summarized as "survival of the fittest," explains how populations evolve over time as beneficial traits accumulate.</li>
    </ul>
  </li>
  <li>
    <strong>Adaptation:</strong>
    <ul>
      <li>Over generations, the frequency of advantageous traits increases within a population, leading to adaptation—traits becoming better suited to the environment.</li>
      <li>Adaptations can involve physical structures (e.g., the long neck of a giraffe for reaching high leaves), behaviors (e.g., migration patterns), or physiological processes (e.g., resistance to certain diseases).</li>
      <li>Adaptation contributes to the emergence of new species and explains the diversity of life observed today.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Darwin’s core principles of evolution by natural selection provided a scientific explanation for the diversity of life, replacing earlier ideas that invoked supernatural causes. These principles laid the foundation for modern biology, influencing fields such as genetics, ecology, and evolutionary psychology. By demonstrating how environmental pressures shape species over time, Darwin’s theory offered profound insights into the interconnectedness of all life on Earth and continues to guide scientific exploration and discovery.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Impact of Evolutionary Theory</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("evolutionImpact")}
            >
              {expandedSections.evolutionImpact ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.evolutionImpact && (
            <div className="section-content">
              <p>
                The publication of <i>On the Origin of Species</i> sparked widespread debate and had profound implications for science, philosophy, and society.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/On_the_origin_of_species_by_means_of_natural_selection_OR_the_preservation_of_favoured_races_in_the_struggle_for_life%2C_2nd_edition._By_Chalres_Darwin%2C_John_Murray%2C_London%2C_1860._National_Museum_of_Scotland.jpg/1280px-thumbnail.jpg" />
              <p className="caption">On the Origin of Species by means of Natural Selection, or the Preservation of Favoured Races in the Struggle for Life, 2nd edition. By Charles Darwin, John Murray, London, 1860. National Museum of Scotland.</p>
              <h3>Scientific Contributions:</h3>
<ul>
  <li>
    <strong>Unified Biology with Evolution as its Cornerstone:</strong>
    <ul>
      <li>Darwin’s theory of evolution by natural selection established a framework that unified diverse biological disciplines under a common principle.</li>
      <li>Evolution provided a scientific explanation for the diversity and complexity of life, connecting anatomy, physiology, behavior, and genetics through shared evolutionary processes.</li>
      <li>This unifying perspective transformed biology into a cohesive science, guiding research and discovery for over a century.</li>
    </ul>
  </li>
  <li>
    <strong>Inspiration for Genetics, Paleontology, and Ecology:</strong>
    <ul>
      <li>Darwin’s work spurred the study of heredity, leading to the rediscovery of Mendel’s principles of genetics and the modern synthesis of evolutionary biology.</li>
      <li>In paleontology, his ideas encouraged the search for fossils that documented evolutionary transitions, such as Archaeopteryx linking dinosaurs to birds.</li>
      <li>Ecology, inspired by Darwin’s observations of species interactions, began to explore how organisms adapt to their environments and influence ecosystems.</li>
    </ul>
  </li>
  <li>
    <strong>Concept of Common Ancestry:</strong>
    <ul>
      <li>Darwin introduced the revolutionary idea that all living organisms share a common origin, connected through a vast "tree of life."</li>
      <li>This concept of common ancestry not only explained the unity of life but also provided a framework for understanding how species diverge over time through adaptation and natural selection.</li>
      <li>Modern evidence from molecular biology, such as DNA sequencing, continues to support Darwin’s concept, tracing shared genetic material across all life forms.</li>
    </ul>
  </li>
</ul>
<h3>Cultural and Philosophical Impact:</h3>
<ul>
  <li>
    <strong>Challenged Traditional Views of Creation:</strong>
    <ul>
      <li>Darwin’s ideas posed a direct challenge to traditional religious accounts of creation, such as those in Genesis, by proposing a naturalistic explanation for the origin of species.</li>
      <li>This sparked widespread debates about the relationship between science and religion, influencing theological thought and prompting reinterpretations of religious texts.</li>
      <li>Some religious traditions embraced Darwin’s ideas, finding harmony between evolution and spiritual beliefs, while others rejected them outright.</li>
    </ul>
  </li>
  <li>
    <strong>Influence on Social and Political Thought:</strong>
    <ul>
      <li>Darwin’s concepts inspired social and political movements, emphasizing progress, adaptation, and survival in various contexts.</li>
      <li>Unfortunately, Darwin’s ideas were misinterpreted and misapplied in ideologies like Social Darwinism, which falsely justified inequality, imperialism, and eugenics under the guise of "survival of the fittest."</li>
      <li>These distortions of Darwin’s work highlighted the potential dangers of misusing scientific theories in sociopolitical contexts.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Charles Darwin’s contributions remain central to modern biology, shaping our understanding of life’s complexity and the processes that drive its evolution. By establishing evolution as a unifying principle, Darwin revolutionized science and inspired fields from genetics to ecology. His work also sparked profound cultural and philosophical shifts, challenging traditional views of life’s origins and influencing debates on science, religion, and society. Despite controversies and misuses, Darwin’s legacy endures as a cornerstone of scientific thought and discovery.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Legacy and Continuing Discoveries</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("darwinLegacy")}
            >
              {expandedSections.darwinLegacy ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.darwinLegacy && (
            <div className="section-content">
              <p>
                Darwin's legacy continues to influence scientific research and our understanding of life's diversity.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Darwin_Statue.jpg" />
              <p className="caption">Unveiling in 1897 of the Darwin Statue at the former Shrewsbury School building where he had studied.</p>
              <h3>Modern Developments:</h3>
<ul>
  <li>
    <strong>Genetics and DNA:</strong>
    <ul>
      <li>The discovery of DNA by James Watson, Francis Crick, and Rosalind Franklin in the mid-20th century validated Darwin's ideas on inheritance and variation by revealing the molecular basis of heredity.</li>
      <li>Advances in molecular genetics have shown how mutations in DNA lead to variation, providing the raw material for natural selection to act upon.</li>
      <li>Techniques such as genome sequencing have further confirmed the relationships between species, offering concrete evidence of common ancestry and evolutionary pathways.</li>
    </ul>
  </li>
  <li>
    <strong>Fossil Discoveries:</strong>
    <ul>
      <li>Fossil evidence has significantly expanded since Darwin’s time, providing detailed records of transitional forms that link extinct species to modern organisms.</li>
      <li>Examples include the discovery of Tiktaalik, a transitional species between fish and tetrapods, and Archaeopteryx, a link between dinosaurs and birds.</li>
      <li>These discoveries have filled gaps in the fossil record, supporting the gradual processes Darwin described in his theory of evolution.</li>
    </ul>
  </li>
  <li>
    <strong>Modern Evolutionary Synthesis:</strong>
    <ul>
      <li>The modern evolutionary synthesis, developed in the early-to-mid 20th century, integrated Darwin’s theory of natural selection with Mendelian genetics, creating a unified framework for understanding evolution.</li>
      <li>This synthesis addressed questions about the mechanisms of inheritance and variation, solidifying evolution as the cornerstone of modern biology.</li>
      <li>It continues to inform research across disciplines, from population genetics to ecological studies.</li>
    </ul>
  </li>
</ul>
<h3>Future Directions:</h3>
<ul>
  <li>
    <strong>Epigenetics:</strong>
    <ul>
      <li>Epigenetics explores how environmental factors influence gene expression without altering the underlying DNA sequence.</li>
      <li>This emerging field challenges traditional views of inheritance, showing that traits acquired during an organism’s lifetime can sometimes influence subsequent generations.</li>
      <li>Epigenetics is revealing new dimensions of adaptation and evolution, expanding our understanding of how organisms respond to their environments.</li>
    </ul>
  </li>
  <li>
    <strong>Microbiomes and Symbiosis:</strong>
    <ul>
      <li>Studies of microbiomes—the communities of microorganisms living within and around organisms—are uncovering their critical roles in health, development, and evolution.</li>
      <li>Symbiotic relationships, such as those between plants and mycorrhizal fungi or humans and gut bacteria, highlight the interconnectedness of life and the importance of cooperative evolution.</li>
      <li>These findings are reshaping perspectives on evolution, emphasizing the role of interactions within ecosystems and communities.</li>
    </ul>
  </li>
  <li>
    <strong>Conservation Biology:</strong>
    <ul>
      <li>Evolutionary principles are being applied to conserve biodiversity, protect endangered species, and restore ecosystems in the face of climate change and human activity.</li>
      <li>Conservation genetics uses tools like genetic diversity assessments to guide breeding programs and habitat management for at-risk populations.</li>
      <li>Understanding evolutionary processes helps predict how species may adapt to changing environments, informing long-term conservation strategies.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Darwin's work endures as a testament to the power of observation, critical thinking, and the pursuit of knowledge. Modern scientific advancements continue to validate and expand upon his theory of evolution, integrating new discoveries in genetics, paleontology, and ecology. As research delves into emerging fields like epigenetics and microbiomes, Darwin’s legacy remains a guiding light for understanding the complexity and resilience of life on Earth.
</p>

            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          Darwin’s theory of evolution remains a cornerstone of biological science, illuminating the origins and diversity of life on Earth.
        </p>
        <Link to="/science/life/biology" className="back-link">
          Back to Biology History Overview
        </Link>
      </footer>
    </div>
  );
};

export default DarwinEvolution;
