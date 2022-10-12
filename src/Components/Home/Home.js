import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import QuizName from "./../QuizName/QuizName";

const Home = () => {
  const quizList = useLoaderData();
  return (
    <div className="my-16">
      <Header></Header>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 mx-5 mt-10 gap-5">
        {quizList.data.map((quiz) => (
          <QuizName key={quiz.name} quiz={quiz}></QuizName>
        ))}
      </div>
    </div>
  );
};

export default Home;
