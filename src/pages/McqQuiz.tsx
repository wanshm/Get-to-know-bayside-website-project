import quizData from '../assets/quizData.json';
import { Link } from 'react-router';
import QuizCard from '../components/quizCard';

export default function McqQuiz() {
  const data = quizData.mcqData;

  return (
    <>
      <nav>
        <Link to={'/'}>Home</Link>
        <div>
          <input type='text' placeholder='Search...' />
          <button>Search</button>
        </div>
      </nav>
      <div className='quizGallery'>
        {data.map((item, index) => {
          return (
            <QuizCard
              title={item.title}
              desc={item.desc}
              imgsrc={item.imgsrc}
              id={index}
              type={'mcq'}
            />
          );
        })}
      </div>
    </>
  );
}
