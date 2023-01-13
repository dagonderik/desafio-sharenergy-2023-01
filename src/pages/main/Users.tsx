import {
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  ChangeEvent,
} from "react";
import Header from "../../components/header";
import { UsersList } from "../../userList";
import "./Users.css";

function Users() {
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

  const [filteredUsers, setFilteredUsers] = useState<UsersList[]>([
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
      await fetch(
        "https://randomuser.me/api/?nat=br&page=1&results=5&seed=1234"
      )
        .then((resp) => resp.json())
        .then((data) => {
          setUsers(data.results);
          setFilteredUsers(data.results);
        });
    };

    loadUsers();
  }, []);

  function advancePage({
    setPage,
  }: {
    setPage: Dispatch<SetStateAction<number>>;
  }) {
    setPage(page + 1);
    const loadUsers = async () => {
      await fetch(
        `https://randomuser.me/api/?nat=br&page=${page + 1}&results=5&seed=1234`
      )
        .then((resp) => resp.json())
        .then((data) => {
          setUsers(data.results);
          setFilteredUsers(data.results);
        });
    };

    loadUsers();
  }

  function returnPage({
    setPage,
  }: {
    setPage: Dispatch<SetStateAction<number>>;
  }) {
    if (page > 1) {
      setPage(page - 1);
      const loadUsers = async () => {
        await fetch(
          `https://randomuser.me/api/?nat=br&page=${
            page - 1
          }&results=5&seed=1234`
        )
          .then((resp) => resp.json())
          .then((data) => {
            setUsers(data.results);
            setFilteredUsers(data.results);
          });
      };

      loadUsers();
    }
  }

  function searchName(
    {
      setFilteredUsers,
    }: { setFilteredUsers: Dispatch<SetStateAction<UsersList[]>> },
    search: string
  ) {
    let tempList: UsersList[] = [];
    users.map((user, i) => {
      if (!tempList.includes(user)) {
        if (
          user.name.first.toLowerCase().includes(search) ||
          user.name.last.toLowerCase().includes(search)
        ) {
          tempList.push(user);
        } else {
          if (
            user.email.toLowerCase().includes(search) ||
            user.email.toLowerCase().includes(search)
          ) {
            tempList.push(user);
          } else {
            if (
              user.login.username.toLowerCase().includes(search) ||
              user.login.username.toLowerCase().includes(search)
            ) {
              tempList.push(user);
            }
          }
        }
      }
    });
    setFilteredUsers(tempList);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    if (e.target.value == "") {
      setFilteredUsers(users);
      console.log("alo");
    }
    searchName({ setFilteredUsers }, search);
  };

  return (
    <div className="App">
      <Header />
      <input onChange={handleChange} />
      <header className="App-header">
        {filteredUsers.map((user, i) => {
          return (
            <div className="cards" key={i}>
              <img src={user.picture.large} alt={user.name.first} />
              <p>
                {user.name.title +
                  ". " +
                  user.name.first +
                  " " +
                  user.name.last}
              </p>
              <p>{user.dob.age} years</p>
              <p>username: {user.login.username}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
      </header>
      <div>
        <button
          className="returnButton"
          onClick={() => returnPage({ setPage })}
        >
          {" "}
          {page}{" "}
        </button>
        <button
          className="fowardButton"
          onClick={() => advancePage({ setPage })}
        >
          {" "}
          {page + 1}{" "}
        </button>
      </div>
    </div>
  );
}

export default Users;
