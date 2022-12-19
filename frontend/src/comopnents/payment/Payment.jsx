import {
  Button,
  Box,
  VStack,
  HStack,
  Input,
  Checkbox,
  Text,
  Img,
  Heading,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Navigate, useNavigate} from "react-router-dom"

function Payment() {
  const toast = useToast()
  const position = 'top'
  const [cart, setCart] = useState([]);
  const [debit, setDebit] = useState(true);
  const [cash, setCash] = useState(false);
  const [upi, setUpi] = useState(false);
  const [finalPrice,setFinalPrice]= useState(0)
  const navigate = useNavigate();
  useEffect(() => {
    const fundata = async () => {
      let res = await axios.get("https://messhobackend-production.up.railway.app/cart");
      setCart(res.data)
      console.log(res.data)

    }
    fundata()
   
  }, []);
  const toasted=()=>{
     navigate('/')
              toast({
                title:'Order Succesfull',
                position: 'bottom',
                isClosable: true,
              })
  }

  useEffect(() => {
    let sum = cart.reduce(function (accumulator, curValue) {
      return accumulator + Number(curValue.price);  
  }, 0)
  setFinalPrice(sum-200)
  console.log(sum,"+++++")
  },[cart])
 
  // setMrp(sum)


  console.log(cart);
  return (
    <div style={{ marginTop: "100px" }}>
      <Box display="flex" p="8%" h="auto">
        <Box h="auto" w="70%" display="flex" border="1px solid grey">
          <Box w="40%" h="100%">
            <Box color="grey.100" m="0" p="0" border="1px solid grey">
              <Button
                w="294px"
                h="70px"
                onClick={() => {
                  setUpi(false);
                  setDebit(true);
                  setCash(false);
                }}
              >
                Debit/Credit Card
              </Button>
              <Button borderTop="1px solid grey" w="294px" h="70px">
                Wallet
              </Button>

              <Button
                borderTop="1px solid grey"
                w="294px"
                h="70px"
                onClick={() => {
                  setUpi(true);
                  setDebit(false);
                  setCash(false);
                }}
              >
                UPI
              </Button>
              <Button borderTop="1px solid grey" w="294px" h="70px">
                Net Banking
              </Button>
              <Button
                borderTop="1px solid grey"
                w="294px"
                h="70px"
                onClick={() => {
                  setUpi(false);
                  setDebit(false);
                  setCash(true);
                }}
              >
                Cash on Delivery
              </Button>
            </Box>
          </Box>

          {debit ? (
            <Box w="60%" h="100%" ml="2%" mr="2%">
              <VStack>
                <Input
                  mb="23px"
                  h="45px"
                  placeholder="Card Number"
                  border="0"
                  borderBottom="1px solid grey"
                />
                <HStack mb="43x" display="flex">
                  <Input
                    type="month"
                    placeholder="month/year"
                    mr="15px"
                    border="0"
                    borderBottom="1px solid grey"
                  />
                  <Input
                    placeholder="CVV"
                    type="password"
                    w="30%"
                    border="0"
                    borderBottom="1px solid grey"
                  />
                </HStack>
                <Input
                  mt="34px"
                  h="45px"
                  placeholder="Enter Name"
                  border="0"
                  borderBottom="1px solid grey"
                />
              </VStack>
              <Box textAlign="left" mt="23px">
                <Checkbox>Save card details for later</Checkbox>
                <Text mt="23px" lineHeight="23px" fontSize="15px">
                  This transaction you make is totally secure. We don't save
                  your
                </Text>
                <Text lineHeight="23px">CVV number.</Text>
              </Box>
              <Button mt="23px" fontSize="23px" h="43px" w="100%" >
                pay
              </Button>
            </Box>
          ) : (
            ""
          )}
          {cash ? (
            <Box>
              <Text mt="16px" ml="15px" fontSize="18px">
                Cash Collection Charges: Costs ₹ 20 Extra
              </Text>
              <Button  mt="23px" ml="15px" w="110%" 
             onClick={() =>toasted()}
            >
                Pay
              </Button>
            </Box>
          ) : (
            ""
          )}
          {upi ? (
            <Box p="2%">
              <Input
                h="45px"
                placeholder="Card Number"
                border="0"
                borderBottom="1px solid grey"
              />
              <Text color="grey">
                UPI ID is in the format of 9999932832@bank or username@bank
              </Text>
              <Box textAlign="left" mt="23px">
                <Checkbox>Save card details for later</Checkbox>
              </Box>
              <Button mt="23px" fontSize="23px" h="43px" w="100%">
                pay
              </Button>
            </Box>
          ) : (
            ""
          )}
        </Box>

    
        <Box
          p="2%"
          textAlign="left"
          h="auto"
          w="35%"
          borderLeft="1px solid black"
          ml="20px"
          mt="-40px"
        >
          <Text mt="-23px">Delivering order to Satyam Kumar</Text>
          <Text mb="23px">hfdh, rsyh hjtr, North 24 Parganas, West..</Text>
          <hr color="grey" />
          <Text fontSize="17px" mt="17px">
            You are paying for these items
          </Text>

          {cart.map((el)=>(
            <Box display="flex" color="grey" >
            <Img
              w="45px"
              h="45px"
              src="https://images.bewakoof.com/t320/men-s-black-itachi-of-the-sharingan-graphic-printed-t-shirt-546231-1664521718-1.jpg"
              alt=""
            />
            <Box ml="13px" mb="20px">
              <Text mr="0" pr="0" fontSize="12px">
                Men's Black Itachi Of The Sharingan Gra...
              </Text>
              <Text>
                Estimated delivery by
                <span style={{ color: "green" }}>15 October 2022</span>
              </Text>
            </Box>
          </Box>
         ) )}
          
          <hr color="grey" />
          <Text mt="23px" fontSize="20px" color="black" fontWeight="semibold">
            Price Summary
          </Text>
          <Box display="flex" justifyContent="space-between" mt="19px" mb="7px">
            <Text>Total MRP (Incl. of taxes) </Text>
            <Text>{finalPrice+200}</Text>
          </Box>
          <Box display="flex" justifyContent="space-between" mt="14px" mb="7px">
            <Text>Shipping Charges </Text>
            <Text>Free</Text>
          </Box>
          <Box display="flex" justifyContent="space-between" mt="14px" mb="7px">
            <Text>Discount on MRP </Text>
            <Text mb="23px">200</Text>
          </Box>
          <hr />
          <Box display="flex" justifyContent="space-between" mt="14px" mb="7px">
            <Text fontSize="18px">Final amount</Text>
            <Text fontSize="18px">{finalPrice}</Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Payment;
