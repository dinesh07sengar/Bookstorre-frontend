import React, { useEffect, useState } from 'react'
  import  "./book.css"
import { useDispatch, useSelector } from "react-redux"
import { ActionCalls } from '../Redux/action'
import {
   Text,
    Box,
    Image,
    Heading
   
  } from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { SimpleGrid } from '@chakra-ui/react'


export const Book = () => {
    const dispatch = useDispatch()
    const[data,setdata] = useState([])

    const Books = useSelector((state) => state.Bookreducer.Bookdata)
    console.log(Books)
    useEffect(()=>{
        dispatch(ActionCalls())


    },[])
  return (
    <Box>
        <div id='container'>
            {Books?.map((ele)=>{
                return  <div className='card'>
                <img src ={ele.image} className='card_img' alt='first'/>
                <div className='card_body'>
                    <div className='card-title'><h5 >{ele.title}</h5></div>
                    <div className='card-info'>
                    <p >{ele.description}</p></div>
                    <div><button className='card-btn'>addtocart</button></div>
                </div>
            </div>
            })}
           
        </div>

     
          
        

           



       
    </Box>
  )
}
