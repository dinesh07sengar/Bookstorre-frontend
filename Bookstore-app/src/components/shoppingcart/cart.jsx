import React, { useState, useEffect } from "react";
import {
  Drawer,
  
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
  ButtonGroup,
  Button,
  Stack,
  Text,
  Center,
  Flex,
} from '@chakra-ui/react'

import { Box } from "@chakra-ui/react";
import{BsFillArrowRightSquareFill} from "react-icons/bs"
import { Link } from "react-router-dom";


const ShoppingCart = () => {
  const[cartBook,setbook]=useState([])
  const[total,settotal]=useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  
useEffect(()=>{
  let cartdata= JSON.parse(localStorage.getItem("cart"))|| [];
 let Data=0
  cartdata?.map((el)=>{
    Data+=(Number(el.qty)* Number( el.price));
  })
  settotal(Data)
  setbook(cartdata)
  // if(cartBook){
    onOpen()

},[])
const remove=()=>{

}
const ApplyCoupon=()=>{

}
const handleclose=()=>{
  
  onOpen()

}

 


  return (
    <>
    <Box  w={"100%"}
            h={"100vh"}
            opacity={1}
            backgroundImage={
                "url(https://images.unsplash.com/photo-1575220360526-be964710f279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}>

             <Center mt={"10%"}><Stack maxW={"2xl"}  spacing={6}>
            <Text
              color={"#dbd9ce"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={{ base: "3xl", md: "4xl" }}
            >
              Escape into captivating stories that transport you to new realms...
            </Text>
            <Box w={'100%'} pt={"30"}>
             
                {/* <Search2Icon bg='transparent' boxSize={8} m={2} /> */}
                
                <Button
                  // onChange={handleSerchIn}
                  ml={10}
                  p={"30px 60px"}
                  variant="unstyled"
                  fontWeight={600}
                  size="lg"
                  fontSize={"30px"}
                  color={"white"}
                  bg={"whiteAlpha.600"}
                  colorScheme="whiteAlpha"
                  display={"flex"}
                  cursor={"pointer"}
                  border={"3px solid white"}
                  onClick={handleclose}
                  
                  
                >Click to open cart  <BsFillArrowRightSquareFill style={{marginLeft:"10px"}}/></Button>
            
            </Box>
          </Stack>
          </Center>

    </Box>
     
      <Drawer onClose={onClose} isOpen={isOpen} size={"sm"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader><Box bg="rgb(214 247 228);" display="flex" justifyContent="space-around" h="40px" fontSize="25px" alignItems="center"> CART <BsFillArrowRightSquareFill      cursor="pointer" fontSize="25px"/>
        </Box></DrawerHeader>
          <DrawerBody>
          {cartBook.length==0? <div style={{paddingTop:"10px", paddingLeft:"10px", color:"grey"}}> Your cart is currently empty.</div> : <>
        <Box id="cartItems" >
          
          <ul>
           {
            cartBook.map((el,index)=>{
              return <li key={el.id} style={{display:"flex", width:"100%", paddingRight:"7px" ,paddingLeft:"13px", marginBottom:"10px", paddingBottom:"15px" }}> 
                         
                         <img src={el.image} style={{width:"22%", marginRight:"18px"}} />
                         <span style={{display:"flex", flexDirection:"column", justifyContent:"space-between", paddingBottom:'14px'}}>
                         <p style={{fontSize:"15px", fontFamily:"Poppins, sans-serif" , fontWeight:500 }}> {el.title}</p><Box style={{display:"flex", justifyContent:"space-between",fontSize:"14px"}}><span><b>Author</b> : {el.author}</span>  <span><b>Price</b>  : &#8377; {(Number(el.qty)* Number( el.price))}</span></Box>
                         <Box display="flex" justifyContent="space-between" alignItems="center">
                         
                         {/* <Box display="flex" gap="7px" bg="#6f6f6f" borderRadius="6px" alignItems="center" h="25px" fontSize="21px" border="2px" w="73px" color="white" justifyContent="space-around" ><button onClick={()=>{DecreaseQTY(el.id,dispatch)}} style={{border:"none", paddingBottom:"9px",fontSize:"34px"}}  > -</button><span style={{border:"none", fontSize:"18px", color:"white"}}> {el.Qty} </span> <button onClick={()=>{IncreaseQTY(el.id,dispatch,Array)}} style={{border:"none",paddingBottom:"7px",fontSize:"26px"}}>+</button> </Box> */}
                         <Box display="flex" gap="7px"  borderRadius="6px" alignItems="center" fontSize="21px" border="none" w="73px" color="black" justifyContent="space-around" ><button className='CartButton' onClick={()=>{DecreaseQTY(el.id)}} style={{border:"none",fontSize:"23px",width:"26px",height:"32px",textAlign:"center"}} > -</button><span style={{border:"none", fontSize:"18px", color:"black", paddingTop:"4px"}}> {el.qty} </span> <button className='CartButton' onClick={()=>IncreaseQTY(el.id)} style={{fontSize:"23px",width:"26px",height:"32px", display:"flex" , justifyContent:"center", alignItems:"center"}}>+</button> </Box>
                         <button className='removebtn' style={{  borderRadius:"2px", padding:'1px',fontSize:"14px"}}onClick={()=>remove(el.id)} >REMOVE</button> </Box></span>
                     </li>
            })
           }
           </ul>
        </Box>
        <Box textAlign="center" pl="13px" pt="10px" pr="22px"  id="CartDescription">
            {/* <hr/> */}
            <span style={{  display:"flex", justifyContent:"space-between", textAlign:"center",fontSize:"17px", paddingLeft:"14px", paddingRight:"14px", color:"black", fontWeight:"500"}} > <span>MRP : </span> <span>&#8377; {total} </span>  </span>
            <span style={{  display:"flex", justifyContent:"space-between", textAlign:"center",fontSize:"14px", paddingLeft:"14px", paddingRight:"14px", color:"#d42d4a", fontWeight:"400"}} > <span>Product Discount : </span> <span>-  &#8377; 30 </span>  </span>
            <span style={{  display:"flex", justifyContent:"space-between", textAlign:"center",fontSize:"14px", paddingLeft:"14px", paddingRight:"14px", color:"grey", fontWeight:"600"}} > <span>Hooray! You saved -  &#8377; 30 on Product Discount</span>  </span>
            <span style={{  display:"flex", justifyContent:"space-between", textAlign:"center",fontSize:"17px", paddingLeft:"14px", paddingRight:"14px", color:"black", fontWeight:"600"}} > <span>Grand Total : </span> <span id="GDP">&#8377; {total-30} </span>  </span>
            <span style={{  display:"flex", justifyContent:"space-between", textAlign:"center",fontSize:"15px", paddingLeft:"14px", paddingRight:"14px", color:"black", fontWeight:"600"}} > <span>Apply Coupon</span> <span><input id="CouponInput" style={{border:"1px solid green", color:"green", paddingLeft:"12px", fontWeight:"500"}} type="text" placeholder='Enter Coupon' onKeyPress={ApplyCoupon}/></span>  </span>
            <span style={{  display:"flex", justifyContent:"flex-end", textAlign:"center",fontSize:"15px", paddingLeft:"14px", paddingRight:"14px", color:"black",paddingTop:"10px", paddingBottom:"10px", fontWeight:"600"}} > <span id="ApplyCopounText">No Coupon Applied </span>  </span>
           <Link  to="/payment" className='CartCPNYImg'  style={{background:"#2a7e06",color:"white", fontSize:"18px"}} bg="" color="white" fontSize="" >Proceed</Link> 
            
        </Box></>} 
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
};

export default ShoppingCart;
