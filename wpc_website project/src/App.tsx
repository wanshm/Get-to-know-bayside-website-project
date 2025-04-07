
import './App.css'

interface McqDataProps {
  question : string;
  answer : number; 
  choices : string[];
  imgsrc ? : string;
}

function App() {

  const mcqData:McqDataProps[] = [{question: "1+1 = ", answer : 0, choices : ["2", "b", "5", "fishy"]}]

  return (
    <>
      
    </>
  )
}

export default App
