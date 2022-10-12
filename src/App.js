import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Main from './layouts/Main';
import Quiz from './Components/Quiz/Quiz';
import QuestionsDetail from './Components/QuestionsDetail';
import Error from './Components/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <Error></Error>,
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/statistics',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quiz',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: < Quiz ></Quiz >
        },
        {
          path: '/question/:id',
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <QuestionsDetail></QuestionsDetail>
        }

      ]

    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
