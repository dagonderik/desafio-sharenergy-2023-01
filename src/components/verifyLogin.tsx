import { Navigate } from "react-router-dom";
import { User } from "../user";


function verifyLogin(data: string) {
  const loginInfo: User = JSON.parse(data);
  if (
    loginInfo.username === "desafiosharenergy" &&
    loginInfo.password === "sh@r3n3rgy"
  ) {
    if (loginInfo.remember){
      window.localStorage.setItem("token", "logedIn");
    }
    return true;
  } else {
    return alert("Login e/ou senha incorretos");
  }
}

export default verifyLogin;
