import Mcq from '../components/mcqType/Mcq';
import quizData from '../assets/quizData.json';
import { Link } from 'react-router';
import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import Naming from '../components/namingType/Naming';

// interface QuestionDataProps {
//   question: string;
//   answer: number;
//   choices: string[];
// }

interface McqDataProps {
    title: string;
    questions: {
        question: string;
        answer: number;
        choices: string[];
    }[];
}

interface NamingDataProps {
    title: string;
    answers: string[];
}

export default function Quiz() {
  const [searchParams, setSearchParams] = useSearchParams();
  const idParam = searchParams.get('id');
  const quizTypeParam = searchParams.get('type');

  const [id, setId] = useState(0);
  const [maxLength, setMaxLength] = useState<number>(-1);

  const [data, setData] = useState<McqDataProps|NamingDataProps>({title:"hi",answers:[""],questions:[]});

  const validId = (id: number, maxLength: number) => {
    return id > -1 && id < maxLength;
  };

  useEffect(() => {
    if (idParam != null) setId(parseInt(idParam));
    if (quizTypeParam == "mcq") {
        setMaxLength(quizData.mcqData.length) 
        if (validId(id,maxLength)) {
            setData(quizData.mcqData[id]);
        }
    } else if (quizTypeParam == "naming") {
        setMaxLength(quizData.namingData.length)
        if (validId(id,maxLength)) {
            setData(quizData.namingData[id]);
        }
    }
  });
  return (
    <>
      <nav>
        <Link to={'/'}>Home</Link>
        <div>
          <input type='text' placeholder='Search...' />
          <button>Search</button>
        </div>
      </nav>
      <h2 id='title'>{data.title}</h2>
      {
      data ?
         quizTypeParam == "mcq" ?
          <Mcq data={data.questions}/> :
           quizTypeParam == "naming" && <Naming /> 
    : <div id='mcq'>Quiz not found.</div>
    }
    </>
  );
}
