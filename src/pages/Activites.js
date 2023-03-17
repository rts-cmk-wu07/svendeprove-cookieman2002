import GetAsset from "../components/GetAsset";
import UseAxios from "../hooks/Useaxios";
import { Link } from "react-router-dom";
const Activities = () => {
  const { data, loading } = UseAxios({
    url: "http://localhost:4000/api/v1/activities",
  });

  return (
    <div className="bg-purple flex mb-12 flex-col items-center justify-center">
      <h1 className="text-grey text-big self-start pl-5 pt-5">Aktiviteter</h1>
      {loading ? (
        <div
          className="absolute top-52 left-40  w-20 h-20 rounded-full animate-spin
        border-b-8 border-solid border-pink border-t-transparent"
        ></div>
      ) : (
        data &&
        data.map((item) => (
          <Link className="mt-30 relative w-[90%] m-auto" to={`/aktivitetsDetalje/${item.id}`} key={item.id}>
            <GetAsset assetID={item.id} />
            <div className="rounded-bl-2xl rounded-tr-2xl absolute  bottom-0 left-0 bg-pink  bg-opacity-75 ml-10 w-[80.5%] z-20">
              <h1>{item.name}</h1>
              <p> {item.minAge} - {item.maxAge} </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Activities;
