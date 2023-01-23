import { useLocation, Navigate, Outlet} from "react-router";
import { useTypedSelector } from "../hooks/hooksRedux";
import { RootState } from "../store/store";
export default function RequireAuth(){
    const location=useLocation()
    const token=useTypedSelector(state=> state.authorization.token)
    console.log(token)
    return (
        token
        ? 
        <Outlet/>
        :
        <Navigate to='/' state={{from: location}} replace/>
    )
}