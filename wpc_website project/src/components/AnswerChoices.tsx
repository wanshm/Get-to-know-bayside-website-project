import { useState } from 'react';

interface AnswerChoiceProps {
  choices: string[];
  answer: number;
}

export default function AnswerChoices(props: AnswerChoiceProps) {
  const [off, setOff] = useState(false);

  const handleOnClick = () => {
    setOff(true);
  };

  return (
    <div>
      {props.choices.map((choice, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              handleOnClick();
            }}
            className={off ? (i == props.answer ? 'right' : 'wrong') : ''}
            disabled={off}
          >
            {choice}
          </button>
        );
      })}
    </div>
  );
}
