import { Link } from "react-router-dom";

function Header() {
  return (
    <div >
      <ul>
        <li>
          <Link to="/cats" >
          Cats
          </Link>
        </li>
        <li>
          <Link to="/dogs" >
          Dogs
          </Link>
        </li>
        <li>
          <Link to="/clients" >
          Add Clients
          </Link>
        </li>
        <li>
          <Link to="/users" >
          Users
          </Link>
        </li>
      </ul>
      <ul>
        <li></li>
      </ul>
    </div>
  );    
}

export default Header;
