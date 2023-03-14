import axios from "axios";
import { useEffect, useState } from "react";

export default function UseAxios({url, headers = {}, method = "GET"}){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        (async function(){
            if(!url) return
            try {
                setLoading(true)
                const res = await axios({url, headers, method})
                setData(res.data)
            } catch (error) {
                setError("du har fået en error")
                console.error(error)
            }
            finally{
                setLoading(false)
            }
        })()
        /* eslint-disable-next-line */
    }, [url]);

    return {data, loading, error}
}