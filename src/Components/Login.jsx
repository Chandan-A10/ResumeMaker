import { useState } from "react"
import { Button, Card, Input,Modal } from "antd"
import { addUser,reqLogin } from "../reducer/user"
import { useDispatch, useSelector } from "react-redux"
import { loginStyles } from "../assests/styles/loginStyle"
import { createSearchParams, useNavigate } from "react-router-dom"
import Header from "./Header"

export const Login=()=>{
    const [value, setvalue] = useState('')
    const [isModalOpen,setModelOpen]=useState(false)
    const navigator=useNavigate()
    const dispatch=useDispatch()
    const users=useSelector(state=>state.users)

    const handleClick=()=>{
        if(value === "" || value.length!==10){
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

    const handleChange=(e)=>{
        setvalue(e.target.value)
        document.getElementById('error')?.setAttribute('hidden','hidden')
    }

    return(
        <>
        <div style={loginStyles.container}>
            <Header/>
            <Button style={{cursor:'pointer',position:'fixed',bottom:30,right:20,backgroundImage: 'linear-gradient(to right, #EC048A ,#FB5D6B)',color: 'white'}} size="large" onClick={()=>setModelOpen(true)} >Create Now!</Button>
            <Modal
                open={isModalOpen}
                onOk={handleClick}
                onCancel={()=>setModelOpen(false)}
            >
            <Card title='Enter Mobile  Number'  headStyle={loginStyles.title}>
                <Input addonBefore="+91"  type="number" onChange={handleChange}></Input>
                <p id="error" hidden style={{color:'red'}}>invalid mobile number</p>
            </Card>
            </Modal>
        </div>
        </>
    )
}