import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    // children: [
    //   {
    //     index: true,
    //     element: <About />,
    //   },
    //   {
    //     path: 'portfolio',
    //     element: <Portfolio />,
    //   },
    //   {
    //     path: 'contact',
    //     element: <Contact />,
    //   },
    //   {
    //     path: 'resume',
    //     element: <Resume />,
    //   },
    // ],
  },
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)