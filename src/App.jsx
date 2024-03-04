import { useState } from "react";
import "./App.css";
import reactQuestions from "./data";
import { nanoid } from "nanoid";

function App() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const { id, question, answer } = reactQuestions[index];

  const checkNumber = (number) => {
    if (number > reactQuestions.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reactQuestions.length - 1;
    }
    return number;
  };
  const nextQuestion = () => {
    setShowAnswer(false);
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevQuestion = () => {
    setShowAnswer(false);
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomQuestion = () => {
    setShowAnswer(false);
    let randomNumber = Math.floor(Math.random() * question.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    let newIndex = randomNumber % question.length;
    setIndex(checkNumber(randomNumber));
  };

  return (
    <>
      <main>
        <article className="card">
          <section className="section">
            <div className="question" key={nanoid()}>
              <p>{question}</p>
            </div>
            <div className="answer">{showAnswer && <p>{answer}</p>}</div>
          </section>
          <div className="buttons">
            <div>
              <div>
                <button
                  className="answerBtn btn"
                  onClick={() => setShowAnswer(!showAnswer)}
                >
                  {showAnswer ? "Hide " : "Show "} Answer
                </button>
              </div>
              <button className="prev btn" onClick={prevQuestion}>
                prev
              </button>
              <button className="next btn" onClick={nextQuestion}>
                next
              </button>
            </div>
            <div>
              <button className="random btn" onClick={randomQuestion}>
                random question
              </button>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
export default App;
