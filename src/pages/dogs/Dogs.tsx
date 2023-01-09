import { ChangeEvent, useState } from "react";

function Dogs({}) {
  const [dog, setDog] = useState("");

const handleClick = async function handleChange() {
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            // .then(robotList => {this.setState({robots: robotList})})
            .then(dogLink => setDog(dogLink))
        }
        console.log(dog)
}


  return (
    <div >
      <h1>Hello</h1>
      {/* <img src=""/> */}
      <button className="" onClick={handleClick}>Refresh</button>
    </div>
  );
}

export default Dogs;
