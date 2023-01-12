import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./pages/main/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Cats from "./pages/cats/Cats";
import Dogs from "./pages/dogs/Dogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "main",
    element: <Main />,
  },
  {
    path: "cats",
    element: <Cats />,
  },
  {
    path: "dogs",
    element: <Dogs />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
