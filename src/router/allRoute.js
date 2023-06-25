import Editor from "../Components/Editor/Editor"
import { CVPage } from "../Pages/CVPage"
import { DashboardPage } from "../Pages/DashboardPage"
import { LoginPage } from "../Pages/LoginPage"
import { OTPpage } from "../Pages/OTPpage"

export const PublicRoute=[
    {
        path:'/',
        element:<LoginPage/>
    },
    {
        path:'/tmp',
        element:<Editor/>
    }
]

export const PrivateRoute=[
    {
        path:'/otp',
        element:<OTPpage/>
    },
    {
        path:'/dashboard',
        element:<DashboardPage/>
    },
    {
        path:'/cv',
        element:<CVPage/>
    }
]