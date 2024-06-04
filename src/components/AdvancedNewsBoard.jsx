import React, { useState, useEffect } from "react";
import axios from "axios";

const AdvancedNewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const myApiKey = "a7254984d99260d956933404b850ec02"; // 請替換為你的API金鑰

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/top-headlines?category=general&lang=zh&country=tw&max=10&apikey=${myApiKey}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, [myApiKey]);

  return (
    <div>
      <h1>最新新聞</h1>
      {articles.length === 0 ? (
        <p>加載中...</p>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                閱讀更多
              </a>
              {article.image && (
                <img src={article.image} alt={article.title} width="200" />
              )}
              <p>
                來源:{" "}
                <a
                  href={article.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.source.name}
                </a>
              </p>
              <p>發布時間: {new Date(article.publishedAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdvancedNewsBoard;
