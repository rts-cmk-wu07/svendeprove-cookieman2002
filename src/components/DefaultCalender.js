
import { Link } from "react-router-dom";
import UseAxios from "../hooks/Useaxios";

const DefaultCalender = ({ userToken }) => {
//   console.log("userid", userToken && userToken);
  const { data, loading } = UseAxios({
    url: `http://localhost:4000/api/v1/users/${userToken.userId}`,
    headers: {
    Authorization: `Bearer ${userToken && userToken.token}`
    },
  });


  return (
    <div className="bg-purple flex mb-12 flex-col items-center justify-center">
      <h1 className="text-grey text-big self-start pl-5 pt-5">Kalender</h1>
      {loading ? <div>Loading</div> : data && data.activities.map(item => (
        <Link to={`/aktivitetsDetalje/${item.id}`} key={item.id} className="bg-grey rounded-lg " >
            <h2 className="text-big text-ellipsis ">{item.name}</h2>
            
            <p className="text-medium ">{item.weekday} {item.time}</p>

            </Link>
        ))}
    </div>
  );
};

export default DefaultCalender;
