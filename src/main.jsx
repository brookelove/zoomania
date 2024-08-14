import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Auth from './pages/Auth.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import Landing from './pages/Landing.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'auth',
        element: <Auth />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)