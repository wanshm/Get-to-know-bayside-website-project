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

export default function Quiz() {
  const [searchParams, setSearchParams] = useSearchParams();
  const idParam = searchParams.get('id');
  const quizTypeParam = searchParams.get('type');

  const [id, setId] = useState(0);
  const [mcqData, setMcqData] = useState(quizData.mcqData[0].questions);
  const [namingData, setNamingData] = useState<string[]>(
    quizData.namingData[0].answers,
  );
  const [title, setTitle] = useState('');

  const validId = (id: number, maxLength: number) => {
    return id > -1 && id < maxLength;
  };

  useEffect(() => {
    console.log(validId(id, quizData.namingData.length - 1));
    console.log(mcqData);
    if (idParam != null) setId(parseInt(idParam));
    if (quizTypeParam == 'mcq' && validId(id, quizData.mcqData.length)) {
      setMcqData(quizData.mcqData[id].questions);
      setTitle(quizData.mcqData[id].title);
    } else if (
      quizTypeParam == 'naming' &&
      validId(id, quizData.namingData.length)
    ) {
      setNamingData(quizData.namingData[id].answers);
      setTitle(quizData.namingData[id].title);
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
      <h2 id='title'>{title}</h2>
      {quizTypeParam == 'mcq' && <Mcq data={mcqData} />}
      {quizTypeParam == 'naming' && <Naming answers={namingData} />}
    </>
  );
}
