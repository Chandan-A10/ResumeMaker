import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"
import { otpStyle } from "../../assests/styles/otpStyle"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export const OTP=()=>{
    let value=''
    const users=useSelector(state=>state.users)
    const navigator=useNavigate()
    const [search]=useSearchParams()
    const mobile=search.get('mobile')
    
    useEffect(()=>{
        let flag=true;
        if(mobile){
            users.forEach((x)=>{
                if(x.mobile===mobile && x.isAuth){
                    flag=false;
                }
            })
        }
        (flag)?navigator('/'):flag=false
    },[])

    const confirmOtp=()=>{
        console.log(value)
        if(value === process.env.REACT_APP_OTP){
            navigator({pathname:'/dashboard',search:createSearchParams({mobile:mobile}).toString()})
            return
        }
        else{
            value=''
        }
    }
    const handlefocus=(e,id)=>{
        if(e.target.value){
            value+=e.target.value
            document.getElementById(id)?.focus()
        }

    }

    return(
        <>
        <div style={otpStyle.conatainer}>
            <h1 style={otpStyle.heading}>ENTER OTP</h1>
        <div style={otpStyle.userInput}>
            <input style={otpStyle.input} type="number" max={9} onKeyUp={(e)=>handlefocus(e,'sec')}/>
            <input style={otpStyle.input} type="number" id="sec" max={9} onKeyUp={(e)=>handlefocus(e,'third')}/>
            <input style={otpStyle.input} type="number" id="third" max={9} onKeyUp={(e)=>handlefocus(e,'fourth')}/>
            <input style={otpStyle.input} type="number" id="fourth" max={9} onKeyUp={handlefocus}/>
        </div>
        <button style={otpStyle.button} onClick={confirmOtp}>Confirm</button>
        </div>
        </>
    )
}