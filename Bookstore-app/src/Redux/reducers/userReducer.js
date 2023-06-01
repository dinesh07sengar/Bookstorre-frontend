import React from 'react'
import {  Register_Successfull,Register_Fail,Login_succesfull,Login_Fail} from "../actionType"


const initial = {
    Registermsg:"",
    Token:"",
    isAuth:false
}

export const Userreducer = (state = initial, action) => {
    switch (action.type) {

        case Register_Successfull: {
            return {
                ...state, Registermsg:action.payload
            }
        }
        case Register_Fail: {
            return {
                ...state, Registermsg:"registeration failed"
            }
        }
        case Login_succesfull: {
            return {
                ...state, Token: action.payload,isAuth:true
            }
        }
        case Login_Fail: {
            return {
                ...state, isAuth:false
            }
        }
      

        default:
            return state;
    }
}
