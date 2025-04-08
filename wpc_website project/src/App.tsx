import { useState } from 'react';
import './App.css';
import mcqData from './assets/mcqData.json';
import Mcq from './components/Mcq';


function App() {
  //sample data for testing features...
  const d = mcqData;
  const [index, setIndex] = useState<number>(0)

  const handleLeft = () => {
    let copy = index;
    copy --;
    setIndex(copy);
  }

  const handleRight = () => {
    let copy = index;
    copy ++;
    setIndex(copy);
  }

  return (
    <>
      <Mcq data={d} index={index} />
      <button disabled = {index == 0} onClick={()=>{handleLeft()}}>&larr;</button>
      <button disabled = {index == mcqData.length -1 } onClick={()=>{handleRight()}}>&rarr;</button>
    </>
  );
}

export default App;
