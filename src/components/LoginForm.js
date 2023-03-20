import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import useCookie from "react-use-cookie";
import { TokenContext } from "../context/TokenProvider";
import 'react-toastify/dist/ReactToastify.css';
const LoginForm = () => {
  const [, setTokenCookie] = useCookie("user-token", "");
  const [, setLoading] = useState(false);
  const {token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();
  

  async function submitHandler(e) {
    e.preventDefault();
    
    try {
      setLoading(true);
      const formular = {
        username: e.target.username.value,
        password: e.target.password.value,
      };
      const res = await axios.post(
        "http://localhost:4000/auth/token",
        formular
      );

      if (res.status === 200) {
        toast.success("Logged in")
        if (e.target.remember.checked) {
          const miliseconds = res.data.validUntil - Date.now();
          const validFor = miliseconds / (1000 * 60 * 60 * 24);
          setTokenCookie(JSON.stringify(res.data), {
            days: validFor,
            SameSite: "Strict",
          });
          setToken(res.data);
        }
        navigate("/")
      }
    } catch (error) {
      toast.error("You have an error")
    } finally {
      setLoading(false);
    
      
      
    }
  }
  useEffect(() => {
    if(token){
    navigate("/kalender")
    }
  }, [token, navigate]);
  
  return (
    <form
      className="z-20 absolute flex flex-col gap-3 mt-72 "
      onSubmit={submitHandler}
    >
      <ToastContainer theme="dark"/>
      <h1 className="text-grey text-big">Log in</h1>
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
      <label className="flex items-center justify-center text-grey">
        <input type="checkbox" name="remember" />
        <p>Husk mig</p>
      </label>
      <button
        className="bg-purple text-grey drop-shadow-md shadow-black rounded-l px-7 text-small"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
