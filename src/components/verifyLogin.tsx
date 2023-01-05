import { Navigate } from "react-router-dom";
import { User } from "../user";


function verifyLogin(data: string) {
  const loginInfo: User = JSON.parse(data);
  if (
    loginInfo?.username === "desafiosharenergy" &&
    loginInfo.password === "sh@r3n3rgy"
  ) {
    return <Navigate to="dashboard" />
  } else {
    return alert("Login e/ou senha incorretos");
  }
}

export default verifyLogin;
