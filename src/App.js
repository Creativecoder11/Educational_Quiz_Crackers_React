import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Component/Layouts/Main';
import Topics from './Component/Topics/Topics';
import Home from './Component/Home/Home';
import TopicsQuestion from './Component/TopicsQuestion/TopicsQuestion';
import Statistics from './Component/Statistics/Statistics';
import Blog from './Component/Blog/Blog';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path:'/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/topics',
          loader: ()=> fetch(`https://openapi.programming-hero.com/api/quiz/`),
          element:<Topics></Topics>
        },
        {
          path:'/question/:id',
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <TopicsQuestion></TopicsQuestion>
        },
        {
          path: "/statistic",
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Statistics></Statistics>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        }
      ] 
    },
    {
      path: '*',
      element:<ErrorPage/>
    }
  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
