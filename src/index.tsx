import React from "react";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.css";
import "./index.css";
import Users from "./pages/users/Users";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Cats from "./pages/cats/Cats";
import Dogs from "./pages/dogs/Dogs";
import ClientList from "./pages/clients/ClientList";
import AddClient from "./pages/clients/AddClient";
import EditClient from "./pages/clients/EditUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "users",
    element: <Users />,
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
    path: "clients",
    element: <ClientList />,
  },
  {
    path: "add",
    element: <AddClient />,
  },
  {
    path: "edit/:id",
    element: <EditClient />,
  },
  {
    path: "*",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);
