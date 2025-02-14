import React, { useState, useEffect } from "react";
import "./News.css";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5001/api/news");
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <div className="news-menu">
        {/* <p>Latest Discoveries?</p> */}
        {/* <img src="/history-news.gif" alt="History News" /> */}
        {/* <p>Check the Latest!</p> */}
      </div>

      <div className="news-contents">
        <div className="news-header">
          <h2>Recent Historical News</h2>
          {/* <img src="/history-news.gif" alt="News Icon" /> */}
        </div>

        <div className="news-box">
          {loading ? (
            <p>Loading latest findings...</p>
          ) : (
            articles.length > 0 ? (
              articles.map((article, index) => (
                <div key={index} className="news-item">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <b>{article.title}</b>
                  </a>
                  <p>{article.source.name} • {new Date(article.publishedAt).toLocaleDateString()}</p>
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
