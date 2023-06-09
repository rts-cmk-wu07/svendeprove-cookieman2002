import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../context/TokenProvider";
import UseAxios from "../hooks/Useaxios";

const ActivityDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  const [signedUp, setSignedUp] = useState(false);
  const [userData, setUserData] = useState([]);
  const { data, loading, error } = UseAxios({
    url: `http://localhost:4000/api/v1/activities/${params.id}`,
  });
  const userIds = data && data.users.map((item) => item.id);
  useEffect(() => {
    if(token){
      if (userIds && userIds?.includes(token.userId)) {
        setSignedUp(true);
      }
    }
    
    
    
  }, [token, userIds]);
  function checkAge(){
  
    if(userData?.age > data?.maxAge){
      return true
    }
    if(userData?.age <= data?.minAge){
      return true
    }
    return false
  }
  useEffect(() => {
    
    if(token){
      (async function(){
        try {  
          const res = await axios.get(`http://localhost:4000/api/v1/users/${token.userId}`, {headers: {"Authorization": "Bearer "+token.token }})
          setUserData(res.data)
        } catch (error) {
          console.log(error)
        }
      })()
      
      
    }
    
  }, [token]);
  async function registerHandler() {
    if (token) {
      try {
         await axios.post(
          `http://localhost:4000/api/v1/users/${token.userId}/activities/${params.id}`,
          {},
          { headers: { Authorization: "Bearer " + token.token } }
          );
          setSignedUp(true);
        } catch (error) {
          console.log(error);
        }
      } else {
        navigate("/login");
      }
    }
    async function handleLeave() {
      try {
        const res = await axios.delete(
          `http://localhost:4000/api/v1/users/${token.userId}/activities/${params.id}`,
          { headers: { Authorization: "Bearer " + token.token } }
          );
          setSignedUp(false);
        } catch (error) {
          console.log(error);
        }
      }
      
      

      return (
        <article className="flex bg-purple h-screen flex-col">
          {error && <div className="text-medium flex justify-center">{error}</div> }
      <div className="relative flex flex-col">
        {loading ? <div className="absolute top-52 left-40  w-20 h-20 rounded-full animate-spin
        border-b border-solid border-pink border-t-transparent"></div> : <img
          src={data ? data.asset.url : ""}
          className="h-[60vh] object-cover z-10"
          alt=""
        />}
        
        <div className="absolute bottom-32 mr-10 z-30 justify-self-end drop-shadow-xl shadow-black  right-0">
    {checkAge() && ( <button
             
              className={signedUp? "hidden" :"bg-purple rounded-xl p-2 py-3 px-24 text-white"}
            >
            age restricted
            </button> )}
          {signedUp ? (
            <button
              onClick={handleLeave}
              className={"bg-purple rounded-xl p-2 py-3 px-24 text-white"}
            >
              Forlad
            </button>
          ) : (
            <button
              onClick={registerHandler}
              className={checkAge()? "hidden" : " bg-purple rounded-xl p-2 py-3 px-24 text-white"}
            >
              Tilmeld
            </button>
          )}
        </div>
        <section className="z-50 relative ml-10 flex flex-col text-grey font-normalText text-medium">
          {loading ? (
            <div className=""></div>
          ) : (
            data && <h1 className=""> {data.name} </h1>
          )}
          <p>
            {data && data.minAge}-{data && data.maxAge} år
          </p>
          <p>{data && data.description}</p>
        </section>
      </div>
    </article>
  );
};

export default ActivityDetail;
