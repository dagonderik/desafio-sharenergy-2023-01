import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import './Dogs.css';

function Dogs({ }) {
  const [dog, setDog] = useState("");

  return (
    <div className="container">
      <h1>Take you daily dose of dog</h1>
      <div className="button-container">
        <button onClick={() => handleClick({ setDog })}>Refresh</button>
      
      <img className="image" src={`${dog}`} />
      </div>
    </div>
  );
}


function handleClick({ setDog }: { setDog: Dispatch<SetStateAction<string>> }) {
  fetch(
    'https://random.dog/woof.json'
  )
    .then((response) => response.json())
    .then((data) => {
      setDog(data.url);
      console.log(data.url)
    });
}

export default Dogs;
