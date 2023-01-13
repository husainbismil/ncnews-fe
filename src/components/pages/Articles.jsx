import { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-up";
import getRelativeTime from "../../utils/time";

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
        <ScrollToTop showUnder={160}>
          <img src="img/btn/stt.png" />
        </ScrollToTop>
        {articleList.map((element, index) => {
          const relativeCreatedAt = getRelativeTime(
            Date.parse(element.created_at)
          );
          const currentKey = "article-" + index;
          const articleUrl = "/articles/" + element.article_id;
          return (
            <div className="single-article-list-container">
              <p className="article-info-summary">
                <a href="#" className="redlink">
                  t/{element.topic}
                </a>{" "}
                · Posted by{" "}
                <a href="#" className="redlink">
                  u/{element.author}
                </a>{" "}
                {relativeCreatedAt}
              </p>
              <p className="article-title">
                <a href={articleUrl}>{element.title}</a>
              </p>
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
