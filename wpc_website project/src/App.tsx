import './App.css';
import mcqData from './assets/mcqData.json';
import Mcq from './components/Mcq';
import { McqDataProps } from './components/Mcq';

function App() {
  //sample data for testing features...
  const d: McqDataProps = mcqData;

  return (
    <>
      <Mcq data={d.data} />
    </>
  );
}

export default App;
