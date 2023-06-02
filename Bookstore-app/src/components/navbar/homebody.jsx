import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    InputGroup,
    Input,
    Box,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import {BiSearch} from 'react-icons/bi'
  
  
  export default function Homebody() {
  
      const [searchIn , setSearchIn] = useState('');
  
  
    return (
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1575220360526-be964710f279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          //   m={'0 20rem'}
          width={"100%"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.900, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"#dbd9ce"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Escape into captivating stories that transport you to new realms...
            </Text>
            <Box w={'100%'} pt={"30"}>
              <InputGroup
                bg='blackAlpha.700'
                color="#dbd9ce"
                p={6}
                borderRadius={15}
                width="80%"
                m="auto"
              >
                {/* <Search2Icon bg='transparent' boxSize={8} m={2} /> */}
                <BiSearch color="#dbd9ce" size={'3rem'} />
                <Input
                  // onChange={handleSerchIn}
                  ml={10}
                  variant="unstyled"
                  fontWeight={600}
                  size="lg"
                  fontSize={20}
                  type="text"
                  placeholder="What is Your fav. Book ?"
                />
              </InputGroup>
            </Box>
          </Stack>
        </VStack>
      </Flex>
    );
  }
  