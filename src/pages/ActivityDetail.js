import { useParams } from "react-router";
import UseAxios from "../hooks/Useaxios";

const ActivityDetail = () => {
    const params = useParams()
    const {data, loading,} = UseAxios({
    url: `http://localhost:4000/api/v1/activities/${params.id}`
    })

    function registerHandler(){
    
    }

    return ( <article className="flex bg-purple h-screen flex-col">
        <div className="relative flex flex-col">
        <img src={data ? data.asset.url : ""} className="h-[60vh] object-cover z-10" alt="" />
        <div className="absolute bottom-32 mr-10 z-30 justify-self-end drop-shadow-xl shadow-black  right-0">
        <button onClick={registerHandler} className="bg-purple rounded-xl p-2 py-3 px-24   text-white">Tilmeld</button>
        </div>
        <section className="z-50 relative ml-10 flex flex-col text-grey font-normalText text-medium">
            {loading ? <div className=""></div> : data &&  <h1 className=""> {data.name} </h1> }
            <p>{data && data.minAge}-{data && data.maxAge} år </p>
            <p>{data && data.description}</p>
        </section>
        </div>
    </article> );
}
 
export default ActivityDetail;