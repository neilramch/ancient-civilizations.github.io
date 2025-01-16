import React from "react";
import { useParams, NavLink } from "react-router-dom";
import warsData from "./data.js"; // Ensure your wars data is properly imported
import "./Region.css";

// List of civilizations and their corresponding routes
const civilizations = [
  { name: "Sumer", url: "/Sumer" },
  { name: "Indus Valley", url: "/IndusValley" },
  { name: "Egypt", url: "/Egypt" },
  { name: "Greece", url: "/Greece" },
  { name: "Rome", url: "/Rome" },
  { name: "Persia", url: "/Persia" },
  { name: "China", url: "/China" },
  { name: "Vedic India", url: "/VedicIndia" },
  { name: "Akkad", url: "/Akkad" },
  { name: "Babylonia", url: "/Babylonia" },
  { name: "Assyria", url: "/Assyria" },
  { name: "Hittites", url: "/Hittites" },
  { name: "Carthage", url: "/Carthage" },
  { name: "Teotihuacan", url: "/Teotihuacan" },
  { name: "Olmecs", url: "/Olmecs" },
  { name: "Mayans", url: "/Mayans" },
  { name: "Toltecs", url: "/Toltecs" },
  { name: "Japan", url: "/Japan" },
];

// Map civilizations to their URLs
const civilizationsMap = civilizations.reduce((acc, civ) => {
  acc[civ.name] = civ.url;
  return acc;
}, {});

// Function to process text and linkify keywords
const processText = (text, civilizationsMap, tooltipWords) => {
  const allWords = { ...civilizationsMap, ...tooltipWords };
  const sortedKeys = Object.keys(allWords).sort((a, b) => b.length - a.length);
  const regex = new RegExp(`\\b(${sortedKeys.join("|")})\\b`, "gi");

  return text.split(regex).map((part, index) => {
    // Ensure the part is defined and a string
    if (!part || typeof part !== "string") {
      return part; // Return the part as-is if undefined or not a string
    }

    const trimmedPart = part.trim();

    if (civilizationsMap[trimmedPart]) {
      return (
        <NavLink
          key={index}
          to={civilizationsMap[trimmedPart]}
          className="civilization-link"
        >
          {trimmedPart}
        </NavLink>
      );
    }

    if (tooltipWords[trimmedPart]) {
      return (
        <div className="tooltip-container" key={index}>
          <span className="tooltip">
            {trimmedPart}
            <span className="tooltip-text">{tooltipWords[trimmedPart]}</span>
          </span>
        </div>
      );
    }

    return part;
  });
};

// Tooltip Words (abbreviated for simplicity)
const tooltipWords = {
  "Alliance": "A formal agreement between nations for mutual benefit.",
  "Treaty": "A ratified agreement between states.",
  "Armistice": "A temporary cessation of fighting, often leading to peace talks.",
  "Siege": "A military blockade of a city or fortress.",
  "Blockade": "The isolation of an area to prevent entry or exit.",
  "Invasion": "The act of entering another's territory to conquer.",
  "Guerrilla warfare": "Irregular warfare tactics involving small, mobile groups.",
  "Truce": "An agreed halt to fighting.",
  "Revolution": "A drastic change in government or society.",
  "Conscription": "Mandatory enlistment in military service.",
  "Scorched Earth": "The destruction of resources to hinder the enemy.",
  "Infantry": "Soldiers trained to fight on foot.",
  "Artillery": "Heavy military weapons, such as cannons.",
  "Cavalry": "Soldiers who fight on horseback.",
  "Armament": "Military weapons and equipment.",
  "Balkans": "A region in Southeast Europe, historically a hotspot for conflict.",
  "Mediterranean": "A region around the Mediterranean Sea, vital for trade and war.",
  "Black Sea": "A strategic body of water linking Europe and Asia.",
  "Rhineland": "A European region critical in 20th-century wars.",
  "Silk Road": "An ancient trade network connecting Asia and Europe.",
  "Andes": "A mountain range in South America, home to Inca defenses.",
  "Gobi Desert": "A key route in the Mongol conquests.",
  "Demilitarized Zone (DMZ)": "An area where military forces are not allowed.",
  "Imperialism": "Expansion of a country's power through diplomacy or force.",
  "Colonialism": "Control over a foreign land for economic gain.",
  "Nationalism": "Devotion to national interests or culture.",
  "Fascism": "A system of authoritarian nationalism.",
  "Communism": "A system advocating common ownership of property.",
  "Monarchy": "Rule by a single sovereign, often hereditary.",
  "Sovereignty": "The authority of a state to govern itself.",
  "Napoleon Bonaparte": "A French military leader who reshaped Europe.",
  "Genghis Khan": "The founder of the Mongol Empire.",
  "Alexander the Great": "A conqueror who created a vast empire.",
  "Julius Caesar": "A Roman leader pivotal in Rome's transformation.",
  "Winston Churchill": "British Prime Minister during WWII.",
  "Adolf Hitler": "Leader of Nazi Germany during WWII.",
  "Mao Zedong": "A leader of Communist China.",
  "Abraham Lincoln": "US President during the Civil War.",
  "Propaganda": "Information to promote a political cause.",
  "Espionage": "Spying to gather intelligence.",
  "Industrial Revolution": "A period of major industrialization.",
  "Nuclear Weapons": "Weapons of mass destruction powered by nuclear reactions.",
  "Trench Warfare": "Combat fought from trenches.",
  "Blitzkrieg": "A fast and powerful military attack.",
  "Gunpowder": "An explosive material revolutionizing warfare.",
  "Longbow": "A powerful medieval weapon.",
};


const Region = () => {
  const { regionName, warName } = useParams();

  // Find the corresponding region
  const region = warsData.regions.find(
    (region) => region.name.toLowerCase() === regionName?.toLowerCase()
  );

  if (!region) return <p>Region not found.</p>;

  // Render a specific war if `warName` is provided
  if (warName) {
    const war = region.wars.find(
      (war) => war.name.toLowerCase().replace(/\s+/g, "-") === warName?.toLowerCase()
    );

    if (!war) return <p>War not found in {region.name}.</p>;

    return (
      <div className="region-container">
        <h1>{war.name}</h1>
        <h4>Duration: {war.startYear} - {war.endYear}</h4>
        <img
          src={war.mapUrl}
          alt={`Map of ${war.name}`}
          style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
        />
        <p>{processText(war.description, civilizationsMap, tooltipWords)}</p>
        <h4>Key Battles:</h4>
        <ul>
          {war.keyBattles.map((battle, index) => (
            <li key={index}>{battle}</li>
          ))}
        </ul>
        <h4>Leaders:</h4>
        <ul>
          {war.leaders.map((leader, index) => (
            <li key={index}>{leader}</li>
          ))}
        </ul>
      </div>
    );
  }

  // Render all wars in the region if no specific war is selected
  return (
    <div className="region-container">
      <h1>Wars in {region.name}</h1>
      <ul>
        {region.wars.map((war) => (
          <li key={war.id} className="war-card">
            <h2>{war.name}</h2>
            <p>
              <strong>Duration:</strong> {war.startYear} - {war.endYear}
            </p>
            <p>{processText(war.description, civilizationsMap, tooltipWords)}</p>
            <NavLink
              to={`/region/${regionName.toLowerCase()}/${war.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="view-details-link"
            >
              View Details
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Region;
