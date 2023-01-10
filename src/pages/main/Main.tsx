import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { UsersList } from "../../userList";
import "./Main.css";

function Main() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<UsersList[]>([
    {
      email: "",
      picture: {
        large: "",
        medium: "",
        thumbnail: "",
      },
      name: {
        first: "",
        last: "",
        title: "",
      },
      dob: {
        age: 0,
      },
      login: {
        username: "",
      },
    },
  ]);
  const [pageUsers, setPageUsers] = useState<UsersList[]>([
    {
      email: "",
      picture: {
        large: "",
        medium: "",
        thumbnail: "",
      },
      name: {
        first: "",
        last: "",
        title: "",
      },
      dob: {
        age: 0,
      },
      login: {
        username: "",
      },
    },
  ]);

  useEffect(() => {
    const loadUsers = async () => {
      await fetch("https://randomuser.me/api/?results=50")
        .then((resp) => resp.json())
        .then((data) =>{ setUsers(data.results.slice(0,5))
        console.log(data.results)
        setPageUsers(data.results)});
        
      console.log();
    };

    setPageUsers(users);
    setUsers(pageUsers.slice(0,5));

    loadUsers();
  }, []);



  function advancePage({setPage}: { setPage: Dispatch<SetStateAction<number>> }) {
    if ( page < 10 ) {
      setUsers(pageUsers.slice((0+page*5), ((page+1)*5)))
      setPage(page+1);
      console.log(page);
    }
  }

  function returnPage({setPage}: { setPage: Dispatch<SetStateAction<number>> }) {
    if (page > 1) {
      setUsers(pageUsers.slice(((page-2)*5), ((page-1)*5)));
      setPage(page-1);
      console.log(page);
      console.log(pageUsers);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {users.map((user, i) => {
          return (

            <div className="cards" key={i}>
              <img src={user.picture.large} />
              <p>{user.name.title + ". " + user.name.first + " " + user.name.last}</p>
              <p>{user.dob.age} years</p>
              <p>username: {user.login.username}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
      </header>
      <div>
        <button className="returnButton" onClick={() => returnPage({ setPage })}> {page} </button>
        <button className="fowardButton" onClick={() => advancePage({ setPage })}> {page+1} </button>
      </div>
    </div>
  );
}

export default Main;
