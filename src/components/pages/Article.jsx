import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://ncnews-server.onrender.com/api/articles/${article_id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.article);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return (
      <div className="page-container">
        <p className="loading">Loading...</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <p>Title: {article.title}</p>
    </div>
  );
};

export default Article;
