import './gallery.css';

const quizzes = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Multiple Choice Quiz',
    description: 'Test your knowledge with multiple choice questions.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Naming Quiz',
    description: 'Identify and name different places around Bayside.',
  },
  // Add more quizzes as needed
];

export default function Gallery() {
  return (
    <div className="gallery-container">
      {quizzes.map((quiz, index) => (
        <div className="quiz-card" key={index}>
          <img src={quiz.image} alt={quiz.title} />
          <hr />
          <div className="quiz-info">
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
