import AnswerChoices from './AnswerChoices';

export interface McqDataProps {
  data: {
    question: string;
    answer: number;
    choices: string[];
    imgsrc?: string;
  }[];
  index : number;
}

export default function Mcq(props: McqDataProps) {
  const q = props.data[props.index]
  return (
    <div>
          <div>
            <h2>{q.question}</h2>
            <AnswerChoices choices={q.choices} answer={q.answer} />
          </div>
    </div>
  );
}
