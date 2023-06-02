import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Box,
  Image,
  Heading,
} from '@chakra-ui/react'

export const Bookdetail = ({ onClose, isOpen ,state}) => {
  return (
    <div>
          <Modal isOpen={isOpen} onClose={onClose}
         data-cy="chakra-modal">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{state.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              
                <Image src={state.image} w={"100%"}/>
                <Heading as={"h2"}>{state.title}</Heading>
              
                <Text fontWeight={"bold"} fontSize={"20px"}>Author :<span style={{fontWeight:"normal"}}>{state.author}</span> </Text>
                <Text  fontWeight={"bold"} fontSize={"20px"}>Story : <span style={{fontWeight:"normal"}}>{state.description}</span> </Text>
              
            <Text  fontWeight={"bold"} fontSize={"20px"}>
                Lenguage : <span style={{fontWeight:"normal"}}> {state.len}</span> 
            </Text>
            <Text  fontWeight={"bold"} fontSize={"20px"}>
                Price : &#8377;<span style={{fontWeight:"normal"}}> {state.price}</span> 
            </Text>
            
          </ModalBody>
            <ModalBody>
                
           
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </div>
  )
}
