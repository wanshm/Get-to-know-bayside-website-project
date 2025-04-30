import React, { useState } from 'react';
import Header from './components/main/Header';
import Footer from './components/main/footer';
import MultipleChoiceQuiz from './pages/McqQuiz';
import NamingQuiz from './pages/NamingQuiz';
import Gallery from './components/main/gallery';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const term = searchTerm.toLowerCase();
    if (term.includes('multiple')) setCurrentPage('multiple');
    else if (term.includes('naming')) setCurrentPage('naming');
    else alert('Quiz not found.');
  }

  // function renderPage() {
  //   if (currentPage === 'multiple') return <MultipleChoiceQuiz />;
  //   if (currentPage === 'clicking') return <ClickingQuiz />;
  //   if (currentPage === 'naming') return <NamingQuiz />;

  // return (
  // <div className="home">
  //   <h2>Play our Quizzes and Test your knowledge of Bayside High School!</h2>
  //   {/* Gallery or other content can go here */}
  // </div>
  // );
  // }

  return (
    <div className='App'>
      <Header
        setCurrentPage={setCurrentPage}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <main>
        <div className='home'>
          <h2>
            Play our Quizzes and Test your knowledge of Bayside High School!
          </h2>
          {/* Gallery or other content can go here */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
