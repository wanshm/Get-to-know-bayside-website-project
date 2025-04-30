import'./header.css';
export default function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <h1><span className="highlight">Get To know</span>Bayside!</h1>
      </div>
      <nav className="nav-links">
        <a href="#">Quiz Types:</a>
        <a href="#">Multiple Choice</a>
        <a href="#">Clicking</a>
        <a href="#">Naming</a>
      </nav>
      <div className="search-container">
        <input type="text" placeholder="Search quiz type" />
      </div>
    </header>
  );
}
