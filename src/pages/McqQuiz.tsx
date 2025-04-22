import Mcq from "../components/mcqType/Mcq"
import mcqData from '../assets/mcqData.json';
import { Link } from "react-router";

export default function McqQuiz(){
  const d = mcqData;
    return(
        <>
        <Link to={"/"}>Home</Link>
        <Mcq data={d}/>
        </>
    )
}