import { useState } from 'react';
import data from "../../assets/namingData.json"

export default function Naming() {
  const [input, setInput] = useState('');
  const answers =  data
  const [revealed, setRevealed] = useState<boolean[]>(new Array (answers.length))

  function won() {
    let count = 0;
    answers.forEach((answer,i) => {
      if (revealed[i] == true) {
        count++;
      }
    });
    return count == answers.length;
  }

  function toNameCase(name: string) {
    const fL = name.substring(0, 1).toUpperCase();
    const rest = name.substring(1).toLowerCase();
    return fL + rest;
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