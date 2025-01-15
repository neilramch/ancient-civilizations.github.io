import React from "react";
import { useParams } from "react-router-dom";
import warsData from "./data.js";

const Region = () => {
  const { regionName } = useParams();
  const region = warsData.regions.find(
    (region) => region.name.toLowerCase() === regionName
  );

  if (!region) {
    return <p>Region not found.</p>;
  }

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
            <p>{war.description}</p>
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
            <img
              src={war.mapUrl}
              alt={`Map of ${war.name}`}
              style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Region;
