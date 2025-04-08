import AnswerChoices from './AnswerChoices';

export interface McqDataProps {
  data: {
    question: string;
    answer: number;
    choices: string[];
    imgsrc?: string;
  }[];
}

export default function Mcq(props: McqDataProps) {
  return (
    <div>
      {props.data.map((q, i) => {
        return (
          <div key={i}>
            <h2>{q.question}</h2>
            <AnswerChoices choices={q.choices} answer={q.answer} />
          </div>
        );
      })}
    </div>
  );
}
