import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import FeatherIcon from "feather-icons-react";
const Login = () => {
  return (
    <div className="bg-splash-image h-screen bg-cover object-contain">
      <Link to="/aktiviteter">
        <FeatherIcon
          className="rotate-[31deg]"
          icon="triangle"
          size="24"
          fill="purple"
          stroke="purple"
        />
      </Link>
      <div className="flex items-center flex-col">
        <LoginForm />
      </div>
      <div className=" rotate-45 bg-purple h-[40rem] object-contain opacity-40 w-64 mt-10"></div>
    </div>
  );
};

export default Login;
