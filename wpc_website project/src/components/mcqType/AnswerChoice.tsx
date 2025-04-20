interface AnswerChoiceProps {
  choice: string;
  answer: number;
  index: number;
  off: boolean;
  onClick: () => void;
}

export default function AnswerChoice(props: AnswerChoiceProps) {
  return (
    <button
      onClick={() => props.onClick()}
      className={
        props.off ? (props.index == props.answer ? 'right' : 'wrong') : ''
      }
      disabled={props.off}
    >
      {props.choice}
    </button>
  );
}
