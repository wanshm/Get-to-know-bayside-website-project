import './App.css';
import { Link } from 'react-router';

//Home Page

function App() {
  //sample data for testing features...

  return (
    <>
      <Link to={'/Mcq'}>Mcq Quiz</Link>
      <Link to={'/Naming'}>Naming Quiz</Link>
    </>
  );
}

export default App;
