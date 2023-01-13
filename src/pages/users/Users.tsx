import Header from "../../components/header";
import ClientList from "../usersDB/ClientList";


function Users({}) {

  return (
    <div className="container">
      <Header/>
        <ClientList></ClientList>
    </div>
  );
}

export default Users;
