import './App.css';
import { Routes, Route } from 'react-router-dom';
import Articles from './components/Articles';
import Header from './components/Header';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
