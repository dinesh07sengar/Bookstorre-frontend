import * as React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Checkbox,
  Link,
  Image,
  Flex,
  Box
} from '@chakra-ui/react';

const Login = () => {
  return (
    <Box  bg={"whiteAlpha.700"} mt={"-8%"}>
    <Stack minH="100vh" direction={{ base: 'column-reverse', md: 'row' }}>
      <Flex flex={1}>
        <Image alt="Cover image" objectFit="cover" opacity={0.2} src="https://upload.wikimedia.org/wikipedia/commons/a/a7/MADRID_060310_MXALX_105.jpg" />
      </Flex>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Sign in to your account</Heading>
          </Stack>
          <VStack
            as="form"
            spacing={8}
            boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
            h="max-content !important"
            bg={useColorModeValue('white', 'gray.700')}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
          >
            <VStack spacing={4} w="100%">
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input rounded="md" type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input rounded="md" type="password" />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justify="space-between" w="100%">
                <Checkbox colorScheme="green" size="md">
                  Remember me
                </Checkbox>
                <Link fontSize={{ base: 'md', sm: 'md' }}>Forgot password?</Link>
              </Stack>
              <Button
                bg="green.300"
                color="white"
                _hover={{
                  bg: 'green.500'
                }}
                rounded="md"
                w="100%"
              >
                Sign in
              </Button>
             <a href='https://sapphire-goldfish-vest.cyclic.app/check/google/auth'><Button
                bg="#EA4335"
                color="white"
                _hover={{
                  bg: 'orange'
                }}
                rounded="md"
               
                size={"lg"}
                w="100%"
              >
                Sign by google
              </Button></a> 
            </VStack>
          </VStack>
        </Stack>
      </Flex>
    </Stack>
    </Box>
  );
};

export default Login;