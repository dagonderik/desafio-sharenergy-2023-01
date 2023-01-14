import { ChangeEvent, useState } from "react";
import CodesList from "../../components/codesList";
import Header from "../../components/header";
import "./Cats.css";

function Cats({}) {
  const [code, setCode] = useState("0");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="cat-page">
      <div className="header-container">
        <Header />
      </div>
      <h1 className="cats-title">
        Select an HTML code to see a related kitty pic
      </h1>
      <input
        className="cats-input"
        placeholder="Type an HTML code"
        list="codes"
        onChange={handleChange}
      />
      <datalist id="codes">
        <CodesList />
      </datalist>
        {code && <img className="cats-image" src={`https://http.cat/${code}`} />}
    </div>
  );
}

export default Cats;
