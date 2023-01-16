import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import verifyLogin from "../../components/verifyLogin";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    try {
      if (verifyLogin(JSON.stringify(data))) navigate("/users");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("token") == "logedIn") navigate("/users");
  });

  return (
    <div className="Login-app">
      <div className="Login-container">
        <h1 className="Login-title">User Login</h1>
        <hr className="Login-divider" />
        <form className="Login-form" onSubmit={handleSubmit(onSubmit)}>
          <label>User:</label>
          <input
            className="Login-input"
            placeholder="Username"
            {...register("username", { required: true })}
          />
          {errors.username && <span>This field is required</span>}
          <label>Password:</label>
          <input
            className="Login-input"
            placeholder="●●●●●●●●●"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
          <div>
            <input
              className="Login-checkbox"
              type="checkbox"
              id="remember"
              {...register("remember", { required: false })}
            />
            <label className="Login-remember" htmlFor="remember">
              {" "}
              Remember me{" "}
            </label>
          </div>
          <input className="Login-submit" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
