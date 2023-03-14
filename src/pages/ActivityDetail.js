import { useParams } from "react-router";
import UseAxios from "../hooks/Useaxios";

const ActivityDetail = () => {
    const params = useParams()
    const {data, loading,} = UseAxios({
    url: `http://localhost:4000/api/v1/activities/${params.id}`
    })

    return ( <article className="flex bg-purple h-screen flex-col">
        <div className="relative flex flex-col">
        <img src={data ? data.asset.url : ""} className="z-10" alt="" />
        <div className="absolute bottom-20 z-30 justify-self-end right-0">
        <button className="bg-purple rounded-xl p-2 pr-10 pl-10   text-white">Tilmeld</button>
        </div>
        <section className="z-50 relative flex flex-col text-white">
            <h1>{loading ? <div>loading</div> : data && data.name }</h1>
            <p>{data && data.minAge} - {data && data.maxAge} </p>
            <p>{data && data.description}</p>
            {console.log(data)}
        </section>
        </div>
    </article> );
}
 
export default ActivityDetail;