import GetAsset from "../components/GetAsset";
import UseAxios from "../hooks/Useaxios";
import { Link } from "react-router-dom";
const Activities = () => {
  const { data, loading } = UseAxios({
    url: "http://localhost:4000/api/v1/activities",
  });

  return (
    <article className="bg-purple flex mb-12 flex-col items-center">
      {loading ? (
        <div
          className="absolute top-52 left-40  w-20 h-20 rounded-full animate-spin
        border-y border-solid border-black border-t-transparent"
        ></div>
      ) : (
        data &&
        data.map((item) => (
          <Link className="mt-30 relative " to={`/aktivitetsDetalje/${item.id}`}>
            <GetAsset assetID={item.id} />
            <div className="rounded-bl-2xl rounded-tr-2xl absolute -translate-y-12 mb-5 bg-pink  bg-opacity-75 w-full z-20">
              <h1>{item.name}</h1>
              <p> {item.minAge} - {item.maxAge} </p>
            </div>
          </Link>
        ))
      )}
    </article>
  );
};

export default Activities;
