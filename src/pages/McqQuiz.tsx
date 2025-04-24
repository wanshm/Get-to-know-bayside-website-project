import Mcq from "../components/mcqType/Mcq"
import mcqData from '../assets/mcqData.json';
import { Link } from "react-router";

export default function McqQuiz(){
  const d = mcqData;
    return(
        <>
        <nav>
          <Link to={"/"}>Home</Link>
          <input type="text" placeholder="Search..."/>
          <button>Search</button>
        </nav>
        <h2>Quiz Title</h2>
        <Mcq data={d}/>
        </>
    )
}