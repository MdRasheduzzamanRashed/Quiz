import React, { useEffect, useState } from "react";
import Option from "../Options/Option";

const QuizQue = ({ que }) => {
  const { question, options, correctAnswer, id } = que;
  const result = (option) => {
    if (option === correctAnswer) {
      alert("Your answer is correct");
    } else {
      alert("Your answer is incorrect");
    }
  };
  return (
    <div className="border-2 my-3 rounded-2xl">
      <h2 className="pl-4 rounded-t-2xl text-xl font-medium py-3 bg-yellow-200">
        Que: {question}
      </h2>
      <div className="grid grid-cols-2 gap-2 p-3">
        {options.map((option) => (
          <Option option={option} key={option} result={result}></Option>
        ))}
      </div>
    </div>
  );
};

export default QuizQue;
