import { useContext } from "react"
import { Navigate } from "react-router"
import { TokenContext } from "./TokenProvider"
const ProtectedRoute = ({children}) => {

    const {token} = useContext(TokenContext)

    return token ? children : <Navigate to="/login" />
}
export default ProtectedRoute