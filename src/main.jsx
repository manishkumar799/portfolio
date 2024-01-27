import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ErrorPage from "./components/ErrorPage";
import Project from "./components/Projects";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio/projects",
    element: <Project/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
