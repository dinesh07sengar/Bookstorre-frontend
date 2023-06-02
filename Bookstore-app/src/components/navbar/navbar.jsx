// import { HamburgerIcon, PhoneIcon, Search2Icon } from "@chakra-ui/icons";
import {
    Box,
    Center,
    Flex,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Spacer,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
  // import {IoIosArrowForward} from '@chakra-ui/icons'
  
  import React from "react";
  import { Link } from "react-router-dom";
  // import { PhoneNav } from "./PhoneNav";
  
  export const TestNavbar = () => {
    const navigate = useNavigate();
  
    return (
      <>
        <Center
          ml={"5rem"}
          // justifyContent={'center'}
          width={"90%"}
          position={"sticky"}
          top={0}
           zIndex={1}
          display={["none", "none", "none", "block"]}
        >
          <Flex
            // position={"fixed"}
            justify={"space-between"}
            zIndex={1}
            alignItems={"center"}
            bg={"transparent"}
            style={{ transition: "all 300ms ease " }}
          >
            <Box m={"2rem"}>
              <Text
                cursor={"pointer"}
                color={"white"}
                fontSize={"4rem"}
                fontWeight={"bold"}
              >
                <span
                  style={{
                    color: "#fede51",
                    background:
                      "linear-gradient(to right, #ff9a8b, #fb7299)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Bookups
                </span>
              </Text>
            </Box>
            <Stack
              bg={"transparent"}
              direction={"row"}
              spacing="24px"
              _hover={{ ".nav_text": { opacity: 1 } }}
            >
              <Flex
                bg={"transparent"}
                style={{ transition: "all 200ms ease " }}
                _hover={{
                  transform: "scale(1.1)",
                  zIndex: "2",
                  fontWeight: "900",
                  background: "linear-gradient(to right, #ff00cc, #FFD700)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                cursor={"pointer"}
              >
                <Link to={"/"}>
                  <Text
                    className="nav_text"
                    ml={"1rem"}
                    fontSize={"2rem"}
                    fontWeight={"600"}
                    color={"white"}
                  >
                    Home
                  </Text>
                </Link>
              </Flex>
              <Flex
                bg={"transparent"}
                style={{ transition: "all 200ms ease " }}
                _hover={{
                  transform: "scale(1.1)",
                  zIndex: "2",
                  fontWeight: "800",
                  background: "linear-gradient(to right, #ff00cc, #FFD700)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                cursor={"pointer"}
              >
                <Link to={"/books"}><Text
                  className="nav_text"
                  ml={"1rem"}
                  fontSize={"2rem"}
                  fontWeight={"500"}
                  color={"white"}
                >
                  Bookshelf
                </Text></Link>
              </Flex>
              <Flex
                bg={"transparent"}
                style={{ transition: "all 200ms ease " }}
                _hover={{
                  transform: "scale(1.1)",
                  zIndex: "2",
                  fontWeight: "800",
                  background: "linear-gradient(to right, #ff00cc, #FFD700)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                cursor={"pointer"}
              >
                <Link to={"/cart"}><Text
                  className="nav_text"
                  ml={"1rem"}
                  fontSize={"2rem"}
                  fontWeight={"500"}
                  color={"white"}
                  display={"flex"}
                  align={"center"}
                  gap={"10px"}
                >
                  <AiOutlineShoppingCart fontSize={'3rem'} />
                  Cart
                </Text></Link>
              </Flex>
              <Flex
                bg={"transparent"}
                style={{ transition: "all 200ms ease " }}
                _hover={{
                  transform: "scale(1.1)",
                  zIndex: "2",
                  fontWeight: "800",
                  background: "linear-gradient(to right, #ff00cc, #FFD700)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                cursor={"pointer"}
              >
                <Link to={"/login"}><Text
                  className="nav_text"
                  ml={"1rem"}
                  fontSize={"2rem"}
                  fontWeight={"500"}
                  color={"white"}
                >
                  Join Us
                </Text></Link>
              </Flex>
              <Box
                bg={"#242424"}
                position={"sticky"}
                display={["block", "block", "block", "none"]}
                color={"blackAlpha.100"}
                p={"2%"}
              >
                <Flex>
                  <Box size={"35px"}>
                    {/* <HamburgerIcon fontSize={"35px"} /> */}
                  </Box>
                  <Spacer />
                  <Box>
                    <Image src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" />
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Flex>
        </Center>
        {/* <PhoneNav/> */}
      </>
    );
  };
  