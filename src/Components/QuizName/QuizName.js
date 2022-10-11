import React from "react";

const QuizName = ({ quiz }) => {
  const { name, logo, id, total } = quiz;
  return (
    <div className="border-2 bg-slate-400 rounded-xl">
      <img src={logo} alt="" />
      <div className="my-4 px-4 flex justify-between items-baseline">
        <div>
          <h2 className="text-2xl font-medium">{name}</h2>
          <p>Total Que: {total}</p>
        </div>
        <div>
          <button className="bg-blue-500 text-white p-1 rounded-lg">
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizName;
