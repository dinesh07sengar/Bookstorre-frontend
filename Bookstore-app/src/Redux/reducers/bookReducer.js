import React from 'react'
import { Book_Success,Book_Fail } from "../actionType"


const initial = {
    Bookdata: [],
   bookmsg:"data succesfully"
}

export const Bookreducer = (state = initial, action) => {
    switch (action.type) {

        case Book_Success: {
            return {
                ...state, Bookdata: action.payload
            }
        }
        case Book_Fail: {
            return {
                ...state, bookmsg: "error in api"
            }
        }
       

        default:
            return state;
    }
}
