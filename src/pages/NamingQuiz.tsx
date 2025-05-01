import Header from '../components/main/Header';
import quizData from '../assets/quizData.json';
import QuizCard from '../components/QuizCard';
import Footer from '../components/main/footer';

export default function NamingQuiz() {
  const data = quizData.namingData;
  return (
    <>
      <Header />
      <h1>All the Naming Quizzes: </h1>
      <div className='quizGallery'>
        {data.map((item, index) => {
          return (
            <QuizCard
              key={index}
              title={item.title}
              desc={item.desc}
              imgsrc={item.imgsrc}
              id={index}
              type={'naming'}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
