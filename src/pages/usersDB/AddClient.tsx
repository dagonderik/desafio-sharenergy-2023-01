import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cpf, setCPF] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
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
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
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
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Phone</label>
            <div className="control">
              <div className="select is-fullwidth">
                <input
                  type="text"
                  className="input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                ></input>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Address</label>
            <div className="control">
              <div className="select is-fullwidth">
                <input
                  type="text"
                  className="input"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                ></input>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">CPF</label>
            <div className="control">
              <div className="select is-fullwidth">
                <input
                  type="text"
                  className="input"
                  value={cpf}
                  onChange={(e) => setCPF(e.target.value)}
                  placeholder="CPF"
                ></input>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
