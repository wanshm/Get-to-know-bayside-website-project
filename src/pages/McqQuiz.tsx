import quizData from '../assets/quizData.json';
import QuizCard from '../components/QuizCard';
import Header from '../components/main/Header';
import Footer from '../components/main/footer';

export default function McqQuiz() {
  const data = quizData.mcqData;

  return (
    <>
      <Header />
      <h1>All the Mcq Quizzes: </h1>
      <div className='quizGallery'>
        {data.map((item, index) => {
          return (
            <QuizCard
              key={index}
              title={item.title}
              desc={item.desc}
              imgsrc={item.imgsrc}
              id={index}
              type={'mcq'}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
