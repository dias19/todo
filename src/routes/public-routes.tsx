import { Route } from "react-router-dom";
import Login from "../components/authorization/login";
import RegisterUser from "../components/authorization/register";
export const PublicRoutes = [
    <Route path='/' element={<Login />} />,
    <Route path='/register' element={<RegisterUser />} />
]