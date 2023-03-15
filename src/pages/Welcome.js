import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundImage from "../mockup/splash-image.jpg"

function Welcome() {
const navigate = useNavigate()
sessionStorage.setItem("key", "false")
function handleClick(){
sessionStorage.setItem("key", "true")
navigate(0)
}


  return (
    <div>
      <div className="flex flex-col justify-center">
        <div className="relative">
          <img src={backgroundImage} className=" object-cover z-10 w-screen overflow-hidden h-screen" alt="" />
        </div>
          <div className="absolute z-20">
          <h1
            style={{ WebkitTextStroke: "1px black" }}
            className="ml-5 font-logoText1  text-big outline-4 text-opacity-0 font-bold text-black"
            >
            LANDRUS
          </h1>
          <h2
            style={{ WebkitTextStroke: "0.5px black" }}
            className="ml-5 text-big font-logoText2 text-pink"
            >
            DANS
          </h2>
          <div className="w-64 drop-shadow-lg shadow-black bg-purple h-5"/>
          
        </div>
        <motion.div
          className="self-center mt-24 absolute bottom-28"
          initial={{ marginLeft: -1000, translateY: 1000, scale: 10 }}
          animate={{ marginLeft: 0, translateY: 0, scale: 1 }}
          transition={{ delay: 1.5, ease: "easeInOut" }}
          
        >
          <button
            className="bg-purple rounded-xl p-2 pr-8 pl-8 text-white" onClick={handleClick}
          >
            Kom i gang
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Welcome;
