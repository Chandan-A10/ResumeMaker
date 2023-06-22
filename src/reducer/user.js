import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:[{mobile:'1234567899',isAuth:false,cvs:[]}]
}

const userSlice=createSlice({
    name:'Users',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.users.push({mobile:action.payload,cvs:[],isAuth:true})
            console.log(state)
        },
        reqLogin:(state,action)=>{
            state.users.forEach((x)=>{
                if(x.mobile===action.payload){
                    x.isAuth=true
                }
            })
        },
        reqLoggout:(state,action)=>{
            state.users.forEach((x)=>{
                if(x.mobile===action.payload){
                    x.isAuth=false
                }
            })
        },
        setCv:(state,action)=>{
            console.log(action.payload)
            state.users.forEach((x)=>{
                if(x.mobile===action.payload.mobile){
                    x.cvs.push(action.payload.user)
                }
            })
        },

    }
})

export default userSlice.reducer
export const {reqLoggout,setCv,reqLogin,addUser}=userSlice.actions