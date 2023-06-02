import {Book_Success,Book_Fail,Register_Successfull,Register_Fail,Login_succesfull,Login_Fail} from "./actionType"
import axios from "axios"



const BookSuccess=(payload)=>{
    return({
        type:Book_Success,
        payload
    })
}
const BookFail=(payload)=>{
    return({
        type:Book_Fail,
        payload
        
    })

}
const Registeration_Successfull=(payload)=>{
    return({
        type:Register_Successfull,
        payload
        
    })

}
const Registeration_Fail=()=>{
    return({
        type:Register_Fail,
          
    })

}
const Loginsuccesfull=(payload)=>{
    return({
        type:Login_succesfull,
        payload
           
    })

}
const LoginFail=()=>{
    return({
        type:Login_Fail,
          
    })

}



export const ActionCalls = (data,method) => {
    return function (dispatch) {
        const Getbooks = (dispatch) => {
            axios.get("https://sapphire-goldfish-vest.cyclic.app/books")
                .then((d) => {
                    console.log(d)
                    dispatch(BookSuccess(d.data))
                })
                .catch((er) => {
                    dispatch(BookFail(er))
                    console.log("error in Movies popular" + er)
                })

        }
         const Registeration = (dispatch,data) => {
             axios.get("https://sapphire-goldfish-vest.cyclic.app/user/register")
                 .then((d) => {
                     console.log(d)
                     dispatch(Registeration_Successfull(d))
                 })
                 .catch((er) => {
                    dispatch(Registeration_Fail())
                     console.log("er" + er)
                 })
         }
        const Login = (dispatch,data) => {
            axios.get("https://sapphire-goldfish-vest.cyclic.app/user/login")
                .then((d) => {
                    console.log(d)
                    dispatch(Loginsuccesfull(d))
                })
                .catch((er) => {
                    dispatch(LoginFail())
                    console.log("error in post " + er)
                })
        }
       

       if (method=="register") {
        Registeration(dispatch,data)
        
       }
       else if(method=="login"){
        Login(dispatch,data)
       }
       else{
        Getbooks(dispatch)
       }

    }
}