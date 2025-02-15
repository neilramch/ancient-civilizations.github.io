import React, { useState, useEffect } from "react";
import "./News.css";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || "https://histopedia-backend.onrender.com";

  const fetchNews = async () => {
    setLoading(true);
    console.log("📰 Fetching news...");

    try {
      const response = await fetch("https://histopedia-backend.onrender.com/api/chat", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) {
        throw new Error(`❌ HTTP error! Status: ${response.status}`);
      }

      const newsData = await response.json();
      console.log("✅ Fetched News Data (Frontend):", newsData); // 🚨 Debugging log

      if (Array.isArray(newsData) && newsData.length > 0) {
        setArticles(newsData); // ✅ Set articles only if it's an array
      } else {
        console.error("❌ No valid articles received from backend.");
      }
    } catch (error) {
      console.error("❌ Error fetching news:", error);
    }

    setLoading(false);
};


  // 🔹 Fetch news automatically when component loads
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchRandomArticles = () => {
    // Only shuffle if there are at least 5 articles
    if (articles.length >= 5) {
      const shuffled = [...articles].sort(() => 0.5 - Math.random()); // Shuffle array
      setArticles(shuffled.slice(0, 5)); // Select first 5 items
    } else {
      console.log("❌ Not enough articles to shuffle, fetching new data...");
      fetchNews(); // If there aren't enough articles, fetch more from the API
    }
  };

  return (
    <div className="news-container">
    <div className="news-header">
      <h2>Latest Historical & Archaeological News</h2>
      <button className="random-button" onClick={fetchRandomArticles}>
        Shuffle
      </button>
    </div>
  
    <div className="news-box">
      {loading ? (
        <p>Loading latest findings...</p>
      ) : articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} className="news-article">
            {/* ✅ Display Thumbnail */}
            {article.urlToImage ? (
              <img src={article.urlToImage} alt="News Thumbnail" className="news-thumbnail" />
            ) : (
              <p>No image available</p>
            )}
  
            {/* ✅ Article Content */}
            <div>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
              <p>
                <strong>{article.source?.name || "Unknown Source"}</strong>
                {article.author ? ` • By ${article.author}` : ""}
                {article.publishedAt
                  ? ` • ${new Date(article.publishedAt).toLocaleDateString()}`
                  : " • Date Unknown"}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No articles found. Try refreshing.</p>
      )}
    </div>
  
    <div className="news-footer">
      <button className="refresh-button" onClick={fetchNews} disabled={loading}>
        {loading ? "Refreshing..." : "Refresh News"}
      </button>
    </div>
  </div>
  
  );
  
};

export default News;
