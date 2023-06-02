import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { ActionCalls } from '../Redux/action'
import { Bookdetail } from './bookdetail'
import { Box, Button, Center, Flex, Heading, Image, Input, Select, SimpleGrid, Text, VStack, useDisclosure } from '@chakra-ui/react'

export const Allbooks = () => {
    const dispatch = useDispatch()
    const [state, setstate] = useState(null)
    const [data, setdata] = useState(null)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const Books = useSelector((state) => state.Bookreducer.Bookdata)
    useEffect(() => {
        setdata(Books)

    }, [Books])
    console.log(Books)
    const handlesort = (e) => {
        let val = e.target.value;
        console.log(val)
        let original= [...data];
        if (val == "lth") {
            
            let sorteddata = original.sort((a, b) => (a.price > b.price) ? 1 : -1)
            setdata(sorteddata)
        }
        else if (val == "htl") {
            let sorteddata = original.sort((a, b) => (a.price > b.price) ? -1 : 1)
            console.log(sorteddata);
            setdata(sorteddata)

        } else{
            console.log("yha aya")
            setdata(Books)
        }

    }
    const handlesearch=()=>{

    }
    const handleinput=()=>{

    }
    const handlecart=(ele)=>{
        let cartdata= JSON.parse(localStorage.getItem("cart"))|| [];
        console.log(ele);
        let obj = {...ele,qty:1}
        console.log(obj);
        cartdata.push(obj)
        localStorage.setItem(("cart"),JSON.stringify(cartdata));

    }
    const handlemondal = (ele) => {
        setstate(ele)
        onOpen()

    }
    useEffect(() => {
        dispatch(ActionCalls())

    }, [])


    return (
        <Box >
               
            <Box >
                <Box mr={"30%"} ml={"30%"} mb={"3%"}>
                    <Flex>
                    <Input placeholder='search your fav book' onChange={handleinput}/>
                    <Button onClick={handlesearch}>Search</Button></Flex>
                </Box>
           
                <Flex ml={"5%"} gap={"2%"} mr={"5%"} w={"88%"}>
                    <Box mb={"10px"} w={"50%"}>
                        <Select onChange={handlesort} bg={"white"}>
                            <option value={""} >sort by population</option>
                            <option value={"lth"}>low to high</option>
                            <option value={"htl"}>high to low</option>
                        </Select></Box>
                    <Box mb={"10px"} w={"50%"}>
                        <Select bg={"white"}>
                            <option value={""}>filter by language</option>
                            <option value={"Bengali"}>Bengali</option>
                            <option value={"Marathi"}>Marathi</option>
                            <option value={"Americas"}>America</option>
                            <option value={"Antarctic"}>Antartic</option>
                            <option value={"Europe"}>Europe</option>
                        </Select></Box>
                </Flex>
            </Box>
            <SimpleGrid p={"1.5%"} columns={[1, 2, 2, 4]} spacingX={"2%"} spacingY={"26px"} mr={"5%"} ml={"5%"}>
                {data?.map((ele, i) => {
                    return <Box key={i + 1} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} p={"1.5%"} h={"450px"} bg={'black'} border={"4px solid #fff"}>
                        <Image src={ele.image} />
                        <Center>
                            <Box color={"white"}>


                                <Heading size={"md"} m={"2%"} color={"white"}>{ele.title}</Heading >
                                <Text m={"2%"}>author : {ele.author}</Text>
                                <Text m={"2%"}>lenguage:{ele.len}</Text>
                                <Text m={"2%"}>price: &#8377;{ele.price}</Text>
                            </Box>
                        </Center>
                        <VStack>
                            <Button onClick={() => handlemondal(ele)} color={"black"} >More details</Button>
                            <Button color={"black"} onClick={()=>handlecart(ele)} m={"2%"}>Add to cart</Button></VStack>
                    </Box>
                })}


            </SimpleGrid>
            {state == null ? "" : <Bookdetail onClose={onClose} isOpen={isOpen} state={state} />}
        </Box>
    )
}
