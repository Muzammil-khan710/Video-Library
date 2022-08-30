import { Outlet,Navigate,useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const Authroute = () => {
    const {token} = useAuth()
    const location = useLocation()

    let from = location?.state?.from?.pathname || "/"
    return token ? (
         <Navigate to={from} state={{from : location}} replace/>
    ) : (
        <Outlet/>
    )
}
