import { useContext, useEffect, useState } from "react";
import DefaultCalender from "../components/DefaultCalender";
import InstructorCalender from "../components/InstructorCalender";
import { TokenContext } from "../context/TokenProvider";

const Calendar = () => {
    const {token} = useContext(TokenContext)
    const [instructor, setInstructor] = useState(false);
    
    
    useEffect(() => {
            if(token.role === "instructor"){
                setInstructor(true)
            }
        }, [token]);
        


    return ( <div className="bg-purple h-screen">
        {instructor ? <InstructorCalender userToken={token}/>  : <DefaultCalender userToken={token}/>}
    </div> );
}
 
export default Calendar;