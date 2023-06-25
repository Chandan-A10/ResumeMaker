import { useSelector } from "react-redux"
import useAuthenticationCheck from "../utils/auth"
import { otpStyle } from "../assests/styles/otpStyle"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import { loginStyles } from "../assests/styles/loginStyle"

export const OTP=()=>{
    const users=useSelector((state)=>state.users)
    const [search]=useSearchParams()
    const navigator=useNavigate()
    const mobile=search.get('mobile')
    
    useAuthenticationCheck(mobile,users)

    const confirmOtp=()=>{

        const fir = document.getElementById("fir")?.value;
        const sec = document.getElementById("sec")?.value;
        const third = document.getElementById("third")?.value;
        const fourth = document.getElementById("fourth")?.value;
        const otpValue=fir+sec+third+fourth

        otpValue===process.env.REACT_APP_OTP?
        navigator({pathname:"/dashboard",search:createSearchParams({mobile }).toString()})
        :document.getElementById("h1").innerText = "Wrong OTP";
    }
    
    const handleFocus=(e,nextInputId)=>{
        document.getElementById("h1").innerText = "Enter OTP";
        const inputValue = e.target.value;
        if (inputValue && nextInputId) {
            document.getElementById(nextInputId)?.focus();
        }
    }

    return(
        <>
        <div style={loginStyles.container}>
        <div style={otpStyle.container}>
        <h1 style={otpStyle.heading} id="h1">ENTER OTP</h1>
        <div style={otpStyle.userInput}>
            <input style={otpStyle.input} type="number" id='fir' maxLength={1} onKeyUp={(e)=>handleFocus(e,'sec')}/>
            <input style={otpStyle.input} type="number" id="sec" maxLength={1} onKeyUp={(e)=>handleFocus(e,'third')}/>
            <input style={otpStyle.input} type="number" id="third" maxLength={1} onKeyUp={(e)=>handleFocus(e,'fourth')}/>
            <input style={otpStyle.input} type="number" id="fourth" maxLength={1} onKeyUp={handleFocus}/>
        </div>
        <button style={otpStyle.button} onClick={confirmOtp}>Confirm</button>
        </div>
        </div>
        </>
    )
}