import AnswerChoice from './AnswerChoice';
import { useState } from 'react';

export interface McqDataProps {
  data: {
    question: string;
    answer: number;
    choices: string[];
    imgsrc?: string;
  }[];
}

export default function Mcq(props: McqDataProps) {
  const [index, setIndex] = useState<number>(0);

  const q = props.data[index];
  const [off, setOff] = useState<boolean[]>(new Array(props.data.length));

  const handleLeft = () => {
    let copy = index;
    copy--;
    setIndex(copy);
  };

  const handleRight = () => {
    let copy = index;
    copy++;
    setIndex(copy);
  };
  const handleOnClick = () => {
    const copy = [...off];
    copy[index] = true;
    setOff(copy);
  };
  return (
    <div id='mcq'>
      <div>
        <h2>Question {index + 1}:</h2>
        <h2>{q.question}</h2>

        <div id='buttonPanel'>
          {q.choices.map((choice, i) => {
            return (
              <AnswerChoice
                key={i}
                choice={choice}
                index={i}
                answer={q.answer}
                off={off[index]}
                onClick={() => handleOnClick()}
              />
            );
          })}
        </div>
      </div>

      <div className='arrowButtons'>
        <button
          className='arrowButton'
          disabled={index == 0}
          onClick={() => {
            handleLeft();
          }}
        >
          &larr;
        </button>
        <button
          className='arrowButton'
          disabled={index == props.data.length - 1}
          onClick={() => {
            handleRight();
          }}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
