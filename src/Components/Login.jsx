import { useState } from "react"
import { Button, Card, Input } from "antd"
import { addUser,reqLogin } from "../reducer/user"
import { useDispatch, useSelector } from "react-redux"
import { loginStyles } from "../assests/styles/loginStyle"
import { createSearchParams, useNavigate } from "react-router-dom"


export const Login=()=>{
    const [value, setvalue] = useState('')
    const navigator=useNavigate()
    const dispatch=useDispatch()
    const users=useSelector(state=>state.users)

    const handleClick=()=>{
        if(value === ""){
            document.getElementById("error")?.removeAttribute("hidden");
            return;
        }
        const userFound = users.find((user)=>user.mobile===value);
        if(!userFound){
            dispatch(addUser(value));
        }else{
            console.log('found')
            dispatch(reqLogin(userFound.mobile));
        }
        navigator({ pathname: "/otp", search: createSearchParams({ mobile: value }).toString() });
        return;
    }
    return(
        <>
        <div style={loginStyles.container}>
            <Card title='Enter Number' style={loginStyles.card} headStyle={loginStyles.title}>
                <Input style={loginStyles.input} type="number" placeholder="+91 000-000-0000" onChange={(e)=>setvalue(e.target.value)}></Input>
                <Button style={loginStyles.button} onClick={handleClick}>Submit</Button>
            </Card>
        </div>
        </>
    )
}