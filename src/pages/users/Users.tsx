import { ChangeEvent, useState } from "react";
import UserList from "../usersDB/UserList";


function Users({}) {

  return (
    <div className="container">
        <UserList></UserList>
    </div>
  );
}

export default Users;
