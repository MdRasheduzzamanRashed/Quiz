import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import QuizQue from "../QuizQue/QuizQue";

const QuizQues = () => {
  const quizQue = useLoaderData();
  const { name, questions } = quizQue.data;

  return (
    <div>
      <div>
        <h2 className="text-center text-2xl mt-5 font-medium">
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
