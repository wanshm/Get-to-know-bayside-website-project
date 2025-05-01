import { Link } from 'react-router';

interface QuizCardProps {
  title: string;
  desc: string;
  imgsrc: string;
  id: number;
  type: 'mcq' | 'naming';
}

export default function QuizCard(props: QuizCardProps) {
  return (
    <Link to={'/quiz?id=' + props.id + '&type=' + props.type}>
      <div className='quizCard'>
        <img src={props.imgsrc} alt='quiz image' />
        <hr />
        <div className='quizCardText'>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
      </div>
    </Link>
  );
}
