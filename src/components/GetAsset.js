import UseAxios from "../hooks/Useaxios";

const GetAsset = ({ assetID }) => {
  const { data, loading, } = UseAxios({
    url: "http://localhost:4000/api/v1/assets/" + assetID,
  });
  return (
    <>
      
      {loading ? (
        <div
          className="absolute top-52 left-40 w-20 h-20 rounded-full animate-spin
    border-y border-solid  border-black border-t-transparent"
        ></div>
      ) : (
        <div className="m-auto  ml-10 relative mt-20">
        <img src={data ? data.url : ""} alt="activityImage" className="rounded-l-2xl rounded-tr-2xl  max-h-[320.65px] object-cover max-w-[300px] h-full w-full " />
        </div>
      )}
    </>
  );
};

export default GetAsset;
