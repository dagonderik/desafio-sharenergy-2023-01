import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserDB } from "../../userDB";
import Header from "../../components/header";
import "./ClientList.css";

const ClientList = () => {
  const [users, setUser] = useState<UserDB[]>([
    {
      _id: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      cpf: "",
    },
  ]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="users-container">
      <div className="header-container">
        <Header />
        <Link to="/add" className="users-button button is-success">
          Add New
        </Link>
        <div className="table-container">
          <table className="table is-hoverable is-striped is-fullwidth ">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>CPF</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>{user.cpf}</td>
                  <td>
                    <div className="users-managing-buttons">
                      <Link
                        to={`/edit/${user._id}`}
                        className="button is-info is-small mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteUser(user._id)}
                        className=" button is-danger is-small"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientList;
