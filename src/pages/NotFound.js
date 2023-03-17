import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react"
const NotFound = () => {

    
    return  ( <div className="flex items-center text-text flex-col text-grey justify-center w-[100%] h-[100%] absolute">
        <FeatherIcon icon="meh" size="90"/> 
    <h1 className="text-big" >Not Found</h1>
    <Link to="/" >  Go to main Page</Link>
</div>  );
}
 
export default NotFound;