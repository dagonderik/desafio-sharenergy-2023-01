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
    <div className="container">
      <Header/>
      <h1>Select an HTML code to see a related kitty pic</h1>
      <input list="codes" onChange={handleChange} />
      <datalist id="codes">
        <CodesList />
      </datalist>
      {code && <img src={`https://http.cat/${code}`} />}
    </div>
  );
}

export default Cats;
