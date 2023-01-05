import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import verifyLogin from "../../components/verifyLogin";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => verifyLogin(JSON.stringify(data));
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('main', {replace:true}), [navigate]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="username"
          {...register("username", { required: true })}
        />
        {errors.username && <span>This field is required</span>}
        <input
          placeholder="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>

      <button onClick={handleOnClick}> Aperte </button>
    </div>
  );
}

export default App;
