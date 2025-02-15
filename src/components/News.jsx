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
      const response = await fetch(`${API_BASE_URL}/api/news`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
  
      if (!response.ok) {
        throw new Error(`❌ HTTP error! Status: ${response.status}`);
      }
  
      const newsData = await response.json();
      console.log("✅ Fetched News Data:", newsData);
  
      if (!Array.isArray(newsData) || newsData.length === 0) {
        console.error("❌ No articles received from backend.");
      }
  
      setArticles(newsData);
    } catch (error) {
      console.error("❌ Error fetching news:", error);
    }
  
    setLoading(false);
  };
  

  // 🔹 Fetch news automatically when component loads
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <div className="news-menu">

      </div>

      <div className="news-contents">
        <div className="news-header">
          <h2>Latest Historical & Archaeological News</h2>
        </div>

        <div className="news-box">
  {loading ? (
    <p>Loading latest findings...</p>
  ) : (
    articles.length > 0 ? (
      articles.map((article, index) => (
        <div key={index} className="news-article">
          {/* ✅ Add Image Thumbnail */}
          {article.thumbnail && (
            <img src={article.thumbnail} alt="News Thumbnail" className="news-thumbnail" />
          )}

          {/* ✅ Show Title with Clickable Link */}
          <a href={article.link} target="_blank" rel="noopener noreferrer">
            <b>{article.title}</b>
          </a>

          {/* ✅ Show Source, Date, and Author */}
          <p>
            {article.source.name} 
            {article.author?.name && ` • By ${article.author.name}`} 
            • {article.date ? new Date(article.date).toLocaleDateString() : "Unknown Date"}
            </p>

        </div>
      ))
    ) : (
      <p>No articles found. Try refreshing.</p>
    )
  )}
</div>


        <div className="news-footer">
          <button className="refresh-button" onClick={fetchNews} disabled={loading}>
            {loading ? "Refreshing..." : "Refresh News"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
