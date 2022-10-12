import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQue from "../QuizQue/QuizQue";

const QuizQues = () => {
  const quizQue = useLoaderData();
  const { name, questions } = quizQue.data;

  return (
    <div className="mt-24">
      <div>
        <h2 className="text-center text-2xl  font-medium">
          Quiz of {name}
        </h2>
      </div>
      <div className="p-5 rounded-2xl">
        {questions.map((question) => (
          <QuizQue key={question.id} que={question}></QuizQue>
        ))}
      </div>
    </div>
  );
};

export default QuizQues;
