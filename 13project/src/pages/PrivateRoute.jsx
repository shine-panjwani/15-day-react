import { useContext } from "react"
import { Outlet, useLocation, Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function PrivateRoute(){
    const {isAuth} = useContext(AuthContext)
    const location = useLocation();
    console.log(location);
    return isAuth ? (
        <Outlet/>
    ) : <Navigate to={"/login"} state={{from : location}} replace/>
}