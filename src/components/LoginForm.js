import axios from "axios";

const LoginForm = () => {
  async function submitHandler(e) {
    e.preventDefault();
    const formular = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    const res = await axios.post("http://localhost:4000/auth/token", formular);
    console.log(res.data);

    console.log(formular);
  }
  return (
    <form
      className="z-20 absolute flex flex-col gap-3 mt-32 "
      onSubmit={submitHandler}
    >
      <h1 className="text-white text-big">Login</h1>
      <label>
        <input
          type="text"
          name="username"
          placeholder="Brugernavn"
          className="p-2"
        />
      </label>
      <label>
        <input
          type="password"
          name="password"
          placeholder="Adgangskode"
          className="p-2"
        />
      </label>
      <label className="flex items-center justify-center text-white">
        <p>remember me</p>
        <input type="checkbox" name="remember" />
      </label>
      <button
        className="bg-purple text-white drop-shadow-md pr-7 pl-7"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
