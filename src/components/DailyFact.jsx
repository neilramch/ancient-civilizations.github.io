import React, { useState, useEffect } from "react";
import "./DailyFact.css";

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || "https://histopedia-backend.onrender.com";

const DailyFact = () => {
  const [factData, setFactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch Fact with Retry Mechanism
  const fetchFact = async (retryCount = 3) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}/api/dailyfact`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      setFactData(data);
    } catch (error) {
      console.error("❌ Error fetching daily fact:", error);

      if (retryCount > 0) {
        console.warn(`🔁 Retrying... Attempts left: ${retryCount}`);
        setTimeout(() => fetchFact(retryCount - 1), 2000); // Retry after 2 seconds
      } else {
        setError("Failed to fetch today's historical fact.");
        setFactData({ fact: "No historical fact available.", image: null });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="daily-fact-container">
      <h2 className="daily-fact-heading">📜 Today in History</h2>

      {loading ? (
        <p className="daily-fact-text">🔄 Loading today's historical fact...</p>
      ) : error ? (
        <p className="daily-fact-text error">{error}</p>
      ) : (
        <>
          <p className="daily-fact-text">{factData.fact}</p>
          {factData.image && (
            <img src={factData.image} alt="Historical Event" className="daily-fact-image" />
          )}
        </>
      )}
    </div>
  );
};

export default DailyFact;
