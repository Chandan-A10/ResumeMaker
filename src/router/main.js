import { Route, Routes } from "react-router-dom";
import { PublicRoute,PrivateRoute } from "./allRoute";

export const MyRoute=()=>{
    return(
        <Routes>
            {PublicRoute.map((route)=>{
                return <Route key={Date.now()} exact path={route.path} element={route.element}></Route>
            })}
            {PrivateRoute.map((route)=>{
                return <Route key={Date.now()} exact path={route.path} element={route.element}></Route>
            })}
        </Routes>
    )
}