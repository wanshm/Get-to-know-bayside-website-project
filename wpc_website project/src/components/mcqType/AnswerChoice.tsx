import { useState } from "react";

interface AnswerChoiceProps {
    choice: string;
    answer: number;
    index: number;
  }

export default function AnswerChoice (props :AnswerChoiceProps) {
    const [off, setOff] = useState<boolean>(false);
    
      const handleOnClick = () => {
        setOff(true);
      };
    
    return (
        <button
          onClick={() => {
            handleOnClick();
          }}
          className={off ? (props.index == props.answer ? "right" : "wrong") : ""}
          disabled={off}
        >
          {props.choice}
        </button>
      );

}