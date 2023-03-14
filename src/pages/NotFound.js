import { Link } from "react-router-dom";
const NotFound = () => {
    return  ( <div className="flex items-center text-text flex-col justify-center w-[100%] h-[100%] absolute">
    <h1 className="text-big" >Not Found</h1>
    <Link to="/" >  Go to Welcome Page</Link>
</div>  );
}
 
export default NotFound;