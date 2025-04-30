import './header.css';

interface HeaderProps {
  setCurrentPage: (page: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}

export default function Header({ setCurrentPage, searchTerm, setSearchTerm, handleSearch }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-title">
        <h1><span className="highlight">Get To Know </span>Bayside!</h1>
      </div>
      
      <nav className="nav-links">
        <a onClick={() => setCurrentPage('Home')}>Home</a>
        <a onClick={() => setCurrentPage('multiple')}>Multiple Choice</a>
        <a onClick={() => setCurrentPage('naming')}>Naming</a>
      </nav>
      
      <form onSubmit={handleSearch} className="search-container">
        <input
          type="text"
          placeholder="Search quiz type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
