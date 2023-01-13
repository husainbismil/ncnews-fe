import "./App.css";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/pages/Articles";
import Header from "./components/templates/Header";
import Article from "./components/pages/Article";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
