import './App.css';
import { Link } from 'react-router';
import Header from "./components/main/Header";
import "./components/main/header.css";

// const pages = [
//   { title: 'Multiple Choice Quiz', path: '/multiple-choice' },
//   { title: 'Clicking Quiz', path: '/clicking-quiz' }
// ];


  // const [searchTerm, setSearchTerm] = useState('');

  // const filteredPages = pages.filter(page =>
  //   page.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

//Home Page

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

function App() {
  //sample data for testing features...

  return (
    <>
    <div className="main-page">
      <Header />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search pages..."
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
          className="search"
        />
      </div>
      {/* <Gallery data={filteredPages} /> */}
    </div>
    
    <Link to={"/Mcq"}>Mcq Quiz</Link>
    <Link to={"/Naming"}>Naming Quiz</Link>
    </>
  );
}

export default App;

