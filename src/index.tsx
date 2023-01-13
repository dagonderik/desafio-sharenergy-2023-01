import React from "react";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.css";
import "./index.css";
import Main from "./pages/main/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Cats from "./pages/cats/Cats";
import Dogs from "./pages/dogs/Dogs";
import Users from "./pages/users/Users";
import EditUser from "./pages/usersDB/EditUsers";
import AddUser from "./pages/usersDB/AddUser";

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
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "add",
    element: <AddUser />,
  },
  {
    path: "edit/:id",
    element: <EditUser />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
    <RouterProvider router={router} />
);
