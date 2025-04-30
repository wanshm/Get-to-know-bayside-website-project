import { useState } from 'react';

interface NamingDataProps {
  answers: string[];
}

export default function Naming(props: NamingDataProps) {
  const [input, setInput] = useState('');
  const [answers] = useState<string[]>(props.answers);
  const [revealed, setRevealed] = useState<boolean[]>(
    new Array(answers.length),
  );

  function won() {
    let count = 0;
    revealed.forEach((r) => {
      if (r == true) {
        count++;
      }
    });
    return count == answers.length;
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    const copy = [...revealed];
    answers.forEach((answer, i) => {
      if (
        answer.toLowerCase() == e.target.value.toLowerCase() &&
        !revealed[i]
      ) {
        copy[i] = true;
        setRevealed(copy);
        setInput('');
      }
    });
  }
  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={(e) => {
          handleOnChange(e);
        }}
      />
      {answers.map((answer, key) => {
        return (
          <div
            key={key}
            // className={revealed[key] ? 'revealed':'concealed' } currently needs styling to work
          >
            <p>{revealed[key] ? answer : '?'}</p>
          </div>
        );
      })}
      {won() && (
        <div>
          <h1>You win!!</h1>
        </div>
      )}
    </div>
  );
}
