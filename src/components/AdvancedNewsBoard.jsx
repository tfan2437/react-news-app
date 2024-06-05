import React, { useState, useEffect } from "react";
import axios from "axios";
import AdvancedNewsCard from "./AdvancedNewsCard";

const AdvancedNewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const myApiKey = "a7254984d99260d956933404b850ec02"; // 請替換為你的API金鑰

  // Taiwan news = `https://gnews.io/api/v4/top-headlines?category=general&lang=zh&country=tw&max=10&apikey=${myApiKey}`

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/top-headlines?category=health&lang=en&country=us&max=6&apikey=${myApiKey}`
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
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => (
        <AdvancedNewsCard
          key={index}
          title={news.title}
          description={news.description}
          content={news.content}
          url={news.url}
          image={news.image}
        />
      ))}
    </div>
  );
};

export default AdvancedNewsBoard;
