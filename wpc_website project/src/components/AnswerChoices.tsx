import { useState } from 'react';
import AnswerChoice from './mcqType/AnswerChoice';

interface AnswerChoiceProps {
  choices: string[];
  answer: number;
}

export default function AnswerChoices(props: AnswerChoiceProps) {
  return (
    <div>
      {props.choices.map((choice, i) => {
        return (
          //DO some work on getting each QUESTION separate, so their answers dont show 
          <AnswerChoice key={i} choice={choice} index={i} answer={props.answer}/>
        );
      })}
    </div>
  );
}
