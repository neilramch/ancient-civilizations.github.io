import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineData = [
    {
      period: "Ancient History (c. 3,200 BCE – 476 CE)",
      events: [
        "Development of Writing (c. 3,200 BCE): Sumerians invent cuneiform in Mesopotamia.",
        "First Empires: Akkadian Empire (c. 2334 BCE), Egyptian Old, Middle, and New Kingdoms.",
        "Code of Hammurabi (c. 1754 BCE): One of the earliest legal codes in Babylon.",
        "Classical Greece (c. 800–146 BCE): Birth of democracy, philosophers like Socrates.",
        "Roman Republic and Empire (509 BCE–476 CE): Expansion and key figures like Julius Caesar.",
        "Rise of Major Religions: Judaism, Hinduism, Buddhism, Christianity.",
        "Fall of the Western Roman Empire (476 CE)."
      ]
    },
    {
      period: "Medieval History (476 CE – c. 14th/15th century)",
      events: [
        "Byzantine Empire continues after the fall of Rome; Justinian codifies Roman law.",
        "Rise of Islam (7th century): Rapid expansion under the Islamic Caliphates.",
        "Feudalism: Emerges in Europe with lords, vassals, and serfs.",
        "Charlemagne's Empire (8th–9th centuries): Carolingian Renaissance.",
        "The Crusades (1096–1291): Religious wars over the Holy Land.",
        "Black Death (1347–1351): Bubonic plague devastates Europe.",
        "Pre-Columbian Civilizations: Mayans, Aztec, and Inca advancements."
      ]
    },
    {
      period: "Modern History (c. 14th/15th century – Present)",
      events: [
        "Renaissance (14th–17th centuries): Revival of art, science, and literature.",
        "Age of Exploration (15th–17th centuries): Discoveries by Columbus and others.",
        "Protestant Reformation (1517): Martin Luther challenges the Catholic Church.",
        "Scientific Revolution (16th–18th centuries): Newton and Galileo's contributions.",
        "Industrial Revolution (c. 1750–1850): Mechanization of agriculture and industry.",
        "World War I (1914–1918): Global conflict reshapes borders.",
        "World War II (1939–1945): Axis vs. Allies, Holocaust, and atomic bombings.",
        "Cold War (1947–1991): Tensions between the US and USSR.",
        "Globalization and Technological Advances: Internet and AI revolution."
      ]
    }
  ];

  return (
    <div className="timeline-container">
        <svg path='/ancient-timeline.svg'></svg>
      {timelineData.map((section, index) => (
        <div key={index} className="timeline-section">
          <h2 className="timeline-period">{section.period}</h2>
          <ul className="timeline-events">
            {section.events.map((event, idx) => (
              <li key={idx} className="timeline-event">
                {event}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
