import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
    return <p className="loading">Loading...</p>;
  }

  return <p>Title: {article.title}</p>;
};

export default Article;
