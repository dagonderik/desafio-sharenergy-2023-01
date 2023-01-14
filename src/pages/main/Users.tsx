import { Avatar, Divider, Pagination, Row } from "antd";
import styles from "./Users.module.css";
import Card from "antd/es/card";
import Meta from "antd/es/card/Meta";
import { Col } from "antd/es/grid";
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
  const [pageNumber, setPageNumber] = useState(1);
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
        `https://randomuser.me/api/?nat=br&seed=1234&page=${1}&results=12`
      )
        .then((resp) => resp.json())
        .then((data) => {
          setUsers(data.results);
          setFilteredUsers(data.results);
        });
    };

    loadUsers();
  }, []);

  function pageChange(page: number, pageSize: number) {
    setPageNumber(page);
    const loadUsers = async () => {
      await fetch(
        `https://randomuser.me/api/?nat=br&page=${page}&results=${pageSize}&seed=1234`
      )
        .then((resp) => resp.json())
        .then((data) => {
          setUsers(data.results);
          setFilteredUsers(data.results);
        });
    };

    loadUsers();
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
        <Row justify="space-around">
          {filteredUsers.map((user, i) => {
            return (
              <Col className="cards" span={5} key={i}>
                <Card
                  id={styles.card}
                  cover={
                    <img
                      id={styles["cover-img"]}
                      src={user.picture.large}
                      alt={user.name.first}
                    />
                  }
                  bordered={true}
                >
                  <Meta
                    title={
                      user.name.title +
                      ". " +
                      user.name.first +
                      " " +
                      user.name.last
                    }
                  />
                  <Meta description={`${user.dob.age} Years`} />
                  <Meta description={user.login.username} />
                  <Meta description={user.email} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </header>
      <footer>
        <Pagination
          defaultCurrent={pageNumber}
          defaultPageSize={12}
          onChange={pageChange}
          total={48}
        />
      </footer>
    </div>
  );
}

export default Users;
