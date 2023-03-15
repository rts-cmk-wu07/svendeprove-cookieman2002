import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import backgroundImage from "../mockup/splash-image.jpg"
import FeatherIcon from "feather-icons-react";
const Login = () => {
  return (
    <div className="relative w-[100%]">
      <div className="">
      <img src={backgroundImage} className=" object-cover z-10 w-full overflow-hidden h-screen" alt="" />
      </div>
      <Link to="/" className="absolute z-50 top-1 left-2">
        <FeatherIcon
          className="rotate-[31deg]"
          icon="triangle"
          size="24"
          fill="purple"
          stroke="purple"
        />
      </Link>
      <div className="flex items-center flex-col absolute z-50 top-0 right-1/2">
        <LoginForm />
      </div>
      <div className="backgroundBox z-40 h-screen absolute top-0 w-full"></div>
    </div>
  );
};

export default Login;
