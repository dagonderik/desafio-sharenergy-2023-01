import { Dispatch, SetStateAction, useState } from "react";
import Header from "../../components/header";
import "./Dogs.css";

function Dogs({}) {
  const [dog, setDog] = useState("");

  return (
    <div className="dogs-container">
      <div className="header-container">
        <Header/>
      </div>
      <h1 className="dog-title">Take you daily dose of dog</h1>
        <button className="dog-button" onClick={() => handleClick({ setDog })}>Refresh</button>
        {dog.includes("mp4") || dog.includes("webm") ? (
          <video className="dog-image" autoPlay loop src={`${dog}`}></video>
        ) : (
          <img className="dog-image" src={`${dog}`} />
        )}
    </div>
  );
}

function handleClick({ setDog }: { setDog: Dispatch<SetStateAction<string>> }) {
  fetch("https://random.dog/woof.json")
    .then((response) => response.json())
    .then((data) => {
      setDog(data.url);
    });
}

export default Dogs;
