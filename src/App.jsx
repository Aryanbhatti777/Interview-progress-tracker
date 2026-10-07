
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Questions from './pages/Questions';
import AddQuestions from './pages/AddQuestions';
import { ToastContainer } from 'react-toastify';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <Dashboard/>
        },
        {
          path: "/questions",
          element: <Questions/>
        },
        {
          path: "/add",
          element: <AddQuestions/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer/>
    </>
  )
}

export default App;