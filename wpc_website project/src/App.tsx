import './App.css';
import mcqData from './assets/mcqData.json';
import Mcq from './components/mcqType/Mcq';

function App() {
  //sample data for testing features...
  const d = mcqData;

  return (
    <>
      <Mcq data={d} />
    </>
  );
}

export default App;
