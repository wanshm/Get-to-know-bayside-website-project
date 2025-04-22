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
    <div>
      <div>
        <h2>Question {index + 1}:</h2>
        <h2>{q.question}</h2>

        <div>
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

      <button
        disabled={index == 0}
        onClick={() => {
          handleLeft();
        }}
      >
        &larr;
      </button>
      <button
        disabled={index == props.data.length - 1}
        onClick={() => {
          handleRight();
        }}
      >
        &rarr;
      </button>
    </div>
  );
}
