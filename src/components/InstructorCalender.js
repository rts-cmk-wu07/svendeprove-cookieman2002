import axios from "axios";
import { useEffect, useState } from "react";
import UseAxios from "../hooks/Useaxios";

const InstructorCalender = ({userToken}) => {
    const [userList, setUserList] = useState();
const {data, loading} = UseAxios({
    url: `http://localhost:4000/api/v1/users/${userToken.userId}`,
    headers: {
    Authorization: `Bearer ${userToken && userToken.token}`
    }
})
 
useEffect(() => {
    
    (async function(){
        if(!data) return
        const activity = data && data?.activities.map(item => ({roster: item.roster.activityId, userId: item.roster.userId }))
    
        
        // console.log("activity", activity && activity)
    
        try {
            const rosterActivityId = activity && activity.map(item => item.roster)
            // console.log(userToken.token)
    
    const res = await axios.get(`http://localhost:4000/api/v1/activities/${rosterActivityId[0]}`, {headers: {'Authorization': 'Bearer '+userToken.token}})
    
    setUserList(res.data)
    // console.log(res.data)
} catch (error) {
    console.log(error)
}

    
    })()
    
}, []);
console.log(userList ? userList : "stupid")
    return ( <div className="bg-purple text-grey flex mb-12 flex-col items-center gap-5 justify-center">
       hello
        </div> );
}
 
export default InstructorCalender;