import Mcq from '../components/mcqType/Mcq';
import mcqData from '../assets/mcqData.json';
import { Link } from 'react-router';
import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import Header from '../components/main/Header';

interface QuestionDataProps {
  question: string;
  answer: number;
  choices: string[];
}

export default function McqQuiz() {
  const [searchParams, setSearchParams] = useSearchParams();
  const idParam = searchParams.get('id');

  const [id, setId] = useState(0);

  const [data, setData] = useState<QuestionDataProps[]>([
    { question: 'loading', answer: -1, choices: [''] },
  ]);

  const validId = (id: number) => {
    return id > -1 && id < mcqData.length;
  };

  useEffect(() => {
    if (idParam != null) setId(parseInt(idParam));
    if (validId(id)) {
      setData(mcqData[id].questions);
    }
  });
  return (
    <>
      <Header />
      <h2 id='title'>{validId(id) && mcqData[id].title}</h2>
      {validId(id) ? <Mcq data={data} /> : <div id='mcq'>Quiz not found.</div>}
    </>
  );
}
