import { ChangeEvent, useState } from "react";
import CodesList from "../../components/codesList";

async function fetchData(this: any) {
  const response = await fetch(`https://http.cat/404`);
}

function Cats({}) {
  const [code, setcode] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setcode(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <input list="codes" onChange={handleChange} />
      <datalist id="codes">
        <CodesList/>
      </datalist>
      <img src={`https://http.cat/${code}`} />
    </div>
  );
}

export default Cats;
