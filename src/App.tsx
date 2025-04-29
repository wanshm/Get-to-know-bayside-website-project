import React, { useState } from 'react';
import Header from './components/main/Header';
import footer from './components/main/footer';
import MultipleChoiceQuiz from './pages/McqQuiz';
import ClickingQuiz from './pages/NamingQuiz';
import NamingQuiz from './pages/NamingQuiz';
import './App.css';





export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');




  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const term = searchTerm.toLowerCase();
    if (term.includes('multiple')) setCurrentPage('multiple');
    else if (term.includes('clicking')) setCurrentPage('clicking');
    else if (term.includes('naming')) setCurrentPage('naming');
    else alert('Quiz not found.');
  }




  function renderPage() {
    if (currentPage === 'multiple') return <MultipleChoiceQuiz />;
    if (currentPage === 'clicking') return <ClickingQuiz />;
    if (currentPage === 'naming') return <NamingQuiz />;




    // default = homepage
    return (
      <div className="home">
        <h2>Welcome to Bayside High School Quizzes!</h2>




        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="Search for a quiz..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>




        <div className="quiz-buttons">
          <button onClick={() => setCurrentPage('multiple')}>Multiple Choice</button>
          <button onClick={() => setCurrentPage('clicking')}>Clicking Quiz</button>
          <button onClick={() => setCurrentPage('naming')}>Naming Quiz</button>
        </div>
      </div>
    );
  }




  return (
    <div className="App">
      <Header />
      {renderPage()}
      <footer />
    </div>
  );
}



