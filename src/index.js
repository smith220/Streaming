import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Room from "./Room";
import './index.css'
import Landing from "./Landing";
import Login from "./Login";
import Signup from "./Signup";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>,
  },
  {
    path: '/Signup',
    element: <Signup/>,
  },
  {
    path: '/home',
    element: <Home/>,
  },
  {
    path:'/room/:id',
    element:<Room/>
  },
  {
 path:'/login',
 element:<Login/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

