import React from "react";
import { toast, ToastContainer } from "react-toastify";
import Option from "../Options/Option";

const QuizQue = ({ que }) => {
  const { question, options, correctAnswer, id } = que;
  const result = (option) => {
    if (option === correctAnswer) {
      toast("Your answer is correct");
    } else {
      toast("Your answer is incorrect");
    }
  };
  const showResult = () => {
    toast(correctAnswer, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="border-2 my-3 rounded-2xl">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex justify-between bg-yellow-200 rounded-t-2xl pl-4 pr-1">
        <h2 className="  text-xl font-medium py-3">Que: {question}</h2>
        <div onClick={showResult}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-3">
        {options.map((option) => (
          <Option option={option} key={option} result={result}></Option>
        ))}
      </div>
    </div>
  );
};

export default QuizQue;
