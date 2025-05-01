import './gallery.css';

const quizzes = [
  {
    image: 'https://t3.ftcdn.net/jpg/02/83/67/14/360_F_283671411_rnVfVGq0Tx4idIktvK8xMXZ5ztNtwG7e.jpg',
    title: 'Guess The Math Teacher',
    description: 'Test your knowledge of Bayside High School guessing which teacher is which! Can you guess the math teacher?',
  },
  {
    image: 'https://media.licdn.com/dms/image/v2/C5612AQG7TjrpKWUYqw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520180789399?e=2147483647&v=beta&t=FLUs73VfrQhrBYaMWnnI6rF-wQFNiwu0VGfXXPyKJQE',
    title: 'Naming Quiz',
    description: 'Put a name to the face! Guess the names of various teachers and students at Bayside High School.',
  },
  // Add more quizzes as needed
];

export default function Gallery() {
  return (
    <div className="gallery-container">
      {quizzes.map((quiz, index) => (
        <div className="quiz-card" key={index}>
          <img src={quiz.image} />
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
