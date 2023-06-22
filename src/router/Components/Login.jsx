import { Button, Card, Input } from "antd"
import { loginStyles } from "../../assests/styles/loginStyle"
import { useState } from "react"
import { createSearchParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addUser,reqLogin } from "../../reducer/user"


export const Login=()=>{
    const [value, setvalue] = useState('')
    const navigator=useNavigate()
    const dispatch=useDispatch()
    const users=useSelector(state=>state.users)
    console.log(users)

    const handleChange=(e)=>{
        setvalue(e.target.value)
    }
    const handleClick=()=>{
        if(value===''){
            document.getElementById('error')?.removeAttribute('hidden')
        }
        else{
            let flag=true
            Object.values(users).forEach((x)=>{
                if(x.mobile===value){
                    dispatch(reqLogin(x.mobile))
                    flag=false;
                }
            })
            {(flag) && dispatch(addUser(value))}
            navigator({pathname:'/otp',search:createSearchParams({mobile:value}).toString()})
        }
    }
    return(
        <>
        <div style={loginStyles.container}>
            <Card title='Enter Number' headStyle={{fontFamily:'arimo',fontSize:'30px'}}>
                <Input type="number" placeholder="+91" onChange={handleChange}></Input>
                <Button onClick={handleClick}>Submit</Button>
            </Card>
        </div>
        </>
    )
}