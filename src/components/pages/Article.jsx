import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-up";
import getRelativeTime from "../../utils/time";
import { TailSpin } from "react-loading-icons";
import ArticleInner from "./article/Articleinner";
import FullWidthHeader from "./article/Fullwidthheader";

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
      <div id="main-wrap" className="single-article-page-wrap">
        <div className="page-container">
          <p className="loading">Loading...</p>
          <TailSpin />
        </div>
      </div>
    );
  }

  const relativeCreatedAt = getRelativeTime(Date.parse(article.created_at));
  const articleUrl = "/articles/" + article.article_id;

  return (
    <div id="fullwidth-wrapper">
      <div id="article-fullwidth-fixedheader">
        <p>{article.title}</p>
      </div>
      <div id="main-wrap" className="single-article-page-wrap">
        <div className="page-container">
          <ScrollToTop showUnder={160}>
            <img src="/img/btn/stt.png" />
          </ScrollToTop>
          <div id="article-page-wrap">
            <div className="single-article-list-container article-page-container single-article-page-container">
              <div id="top-single-article-page">
                <p className="article-info-summary">
                  <a href="#" className="redlink">
                    t/{article.topic}
                  </a>{" "}
                  · Posted by{" "}
                  <a href="#" className="redlink">
                    u/{article.author}
                  </a>{" "}
                  {relativeCreatedAt}
                </p>
                <div className="single-article-containerr-inner-section">
                  <div className="btn-article-votes-container">
                    <p className="article-votes-inner-vote-btn">
                      <a href="#">⬆️</a>
                    </p>
                    <p className="article-votes-inner-number">
                      {article.votes}
                    </p>
                    <p className="article-votes-inner-vote-btn">
                      <a href="#">⬇️</a>
                    </p>
                  </div>
                  <div className="single-article-container-inner-section-float nohover">
                    <p className="article-title nohover">
                      <a href={articleUrl}>{article.title}</a>
                    </p>
                  </div>
                </div>
              </div>

              <div id="after-top-single-article-page">
                <p>{article.body}</p>
                <p className="article-etc commentsbutton-singlearticle">
                  {article.comment_count} comments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
