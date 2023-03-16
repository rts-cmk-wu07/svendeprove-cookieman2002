import { useContext, useEffect, useState } from "react";
import DefaultCalender from "../components/DefaultCalender";
import InstructorCalender from "../components/InstructorCalender";
import { TokenContext } from "../context/TokenProvider";
import axios from "axios";
import UseAxios from "../hooks/Useaxios";

const Calendar = () => {
    const {token} = useContext(TokenContext)
    const [instructor, setInstructor] = useState(false);
    const [userList, setUserList] = useState();
    
    
    useEffect(() => {
            if(token.role === "instructor"){
                setInstructor(true)
            }
        }, [token]);
        const {data, loading} = UseAxios({
            url: `http://localhost:4000/api/v1/users/${token.userId}`,
            headers: {
            Authorization: `Bearer ${token && token.token}`
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
            
            const res = await axios.get(`http://localhost:4000/api/v1/activities/${rosterActivityId[0]}`, {headers: {'Authorization': 'Bearer '+token.token}})
            
            setUserList(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
        
            
            })()
            
        }, []);


    return ( <div className="bg-purple h-screen">
        {instructor ? <div className="bg-purple text-grey flex mb-12 flex-col items-center gap-5 justify-center">
        </div>  : <DefaultCalender userToken={token}/>}
    </div> );
}
 
export default Calendar;