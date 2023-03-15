import { useEffect } from "react";
import UseAxios from "../hooks/Useaxios";

const InstructorCalender = ({userToken}) => {
console.log("userid", userToken)
const {data, loading} = UseAxios({
    url: `http://localhost:4000/api/v1/users/${userToken.userId}`,
    headers: {
    Authorization: `Bearer ${userToken && userToken.token}`
    }
})
useEffect(() => {
    console.log(data && data)
}, []);
    return ( <div className="bg-purple flex mb-12 flex-col items-center justify-center">
        <h1></h1>
        </div> );
}
 
export default InstructorCalender;