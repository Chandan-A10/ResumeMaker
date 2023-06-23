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
            state.users.forEach((x)=>{
                if(x.mobile===action.payload.mobile){
                    x.cvs.push(action.payload.user)
                }
            })
        },
        deletecv:(state,action)=>{
            state.users.forEach((x)=>{
                if(x.mobile===action.payload.mobile){
                    console.log(x)
                    x.cvs=x.cvs.filter((y)=>{
                        return y.id!==action.payload.id
                    })
                }
            })
        },

    }
})

export default userSlice.reducer
export const {deletecv,reqLoggout,setCv,reqLogin,addUser}=userSlice.actions