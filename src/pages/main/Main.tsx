
import { useState, useEffect } from 'react';
import './Main.css';

function Main() {
  // const [authenticated, setauthenticated] = useState(null);
  // useEffect(() =>{
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setauthenticated(loggedInUser);
  //   }
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        <a href='/dashboard'>samba</a>
      </header>
    </div>
  );
}

export default Main;
