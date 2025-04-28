import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Main Page/Header.tsx';
import './App.css';

const pages = [
  { title: 'Multiple Choice Quiz', path: '/multiple-choice' },
  { title: 'Clicking Quiz', path: '/clicking-quiz' }
];

function Gallery({ data }: { data: { title: string; path: string }[] }) {
  return (
    <div className="gallery">
      {data.map((page) => (
        <div key={page.path} className="gallery-item">
          <Link to={page.path}>{page.title}</Link>
        </div>
      ))}
    </div>
  );
}

function MultipleChoiceQuiz() {
  return <div>This is the Multiple Choice Quiz page!</div>;
}

function ClickingQuiz() {
  return <div>This is the Clicking Quiz page!</div>;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPages = pages.filter(page =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="main-page">
            <Header />
            <div className="search-container">
              <input
                type="text"
                placeholder="Search pages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search"
              />
            </div>
            <Gallery data={filteredPages} />
          </div>
        } />
        <Route path="/multiple-choice" element={<MultipleChoiceQuiz />} />
        <Route path="/clicking-quiz" element={<ClickingQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;