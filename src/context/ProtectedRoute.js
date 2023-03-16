import { useContext, useEffect } from "react"
import { Navigate, useNavigate } from "react-router"
import { TokenContext } from "./TokenProvider"
const ProtectedRoute = ({children}) => {

    const {token} = useContext(TokenContext)
    const navigate = useNavigate()
    useEffect(() => {
        if(token){
        navigate(1)
        }
    }, []);

    return token ? children : <Navigate to="/login" />
}
export default ProtectedRoute