import ScrollToTop from "react-scroll-up";
import getRelativeTime from "../../../utils/time";
import { TailSpin } from "react-loading-icons";

const ArticleInner = (props) => {
  return (
    <div className="page-container">
      <ScrollToTop showUnder={160}>
        <img src="img/btn/stt.png" />
      </ScrollToTop>
      <div id="article-page-wrap">
        <div className="single-article-list-container article-page-container">
          <p>Titleees: {props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleInner;
