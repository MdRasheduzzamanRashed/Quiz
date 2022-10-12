import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Statistics from "./Components/Statistics/Statistics";
import Blog from "./Components/Blog/Blog";
import Main from "./Main";
import Home from "./Components/Home/Home";
import QuizQues from "./Components/QuizQues/QuizQues";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/statistics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          loader: () => fetch("blog.json"),
          element: <Blog></Blog>,
        },
        {
          path: "/quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <QuizQues></QuizQues>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
