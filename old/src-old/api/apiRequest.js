import axios from "axios";

const apiRequest = function (requestObject) {
  console.log("api request func");
  // just testing

  const output = axios
    .get("https://ncnews-server.onrender.com/api")
    .then((response) => response);

  return output;
};

// Get All Articles

function getArticles(params) {}

// Get Single Article

function getSingleArticle(articleId) {}

// Get Single Article Comments by Article ID

function getCommentsByArticleId(articleId) {}

export default apiRequest;
