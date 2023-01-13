import { useState, useEffect } from "react";

const Articles = () => {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://ncnews-server.onrender.com/api/articles/`)
      .then((res) => res.json())
      .then((data) => {
        setArticleList(data.articles);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  } else {
    return (
      <div id="article-list-container" className="page-container">
        {articleList.map((element, index) => {
          const currentKey = "article-" + index;
          const articleUrl = "/articles/" + element.article_id;
          return (
            <div className="single-article-list-container">
              <p className="article-title">
                <a href={articleUrl}>{element.title}</a>
              </p>
              <p className="article-author">Author: {element.author}</p>
              <p className="article-etc">Current Votes: {element.votes}</p>
              <p className="article-etc">
                # of Comments: {element.comment_count}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Articles;
