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
            axios.get("http://localhost:4900/books")
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
             axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=ce0659c825d9b20b83594dba4f3043c8&language=en-US&page=1")
                 .then((d) => {
                     console.log(d)
                     dispatch(Registeration_Successfull(d))
                 })
                 .catch((er) => {
                    dispatch(Registeration_Fail())
                     console.log("error in Top Movies" + er)
                 })
         }
        const Login = (dispatch,data) => {
            axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=ce0659c825d9b20b83594dba4f3043c8&language=en-US&page=1")
                .then((d) => {
                    console.log(d)
                    dispatch(Loginsuccesfull(d))
                })
                .catch((er) => {
                    dispatch(LoginFail())
                    console.log("error in Upcoming Movies " + er)
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