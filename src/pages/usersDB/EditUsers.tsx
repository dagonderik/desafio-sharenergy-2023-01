import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header";
import "./EditUsers.css";

const EditClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cpf, setCPF] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setPhone(response.data.phone);
    setAddress(response.data.address);
    setCPF(response.data.cpf);
  };

  const updateUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        phone,
        address,
        cpf,
      });
      navigate("/clients");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="users-container">
      <div className="header-container">
        <Header />
        <div className="main-contain  ">
          <div className="column is-half">
            <form onSubmit={updateUser}>
              <div className="field">
                <label className="label label-users">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label label-users">Email</label>
                <div className="control">
                  <input
                    type="email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label label-users">Phone</label>
                <div className="control">
                  <input
                    type="tel"
                    pattern="\([0-9]{2}\)[0-9]{5}-[0-9]{4}"
                    className="input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label label-users">Address</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label label-users">CPF</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={cpf}
                    onChange={(e) => setCPF(e.target.value)}
                    placeholder="CPF"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditClient;
