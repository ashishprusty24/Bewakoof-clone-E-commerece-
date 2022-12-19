import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Productdetail.module.css";
const Productdetail = () => {
  const [data, setData] = useState({});
  const params = useParams();
  function getdata (){
 
    axios.get(`https://messhobackend-production.up.railway.app/products/${params.id}`)
    .then((r)=>setData(r.data[0]))
}
useEffect(()=>{
 getdata()
},[])
  

const handlecart = ()=>{
  // console.log(data)
  axios.post("https://messhobackend-production.up.railway.app/cart/",data).then((r)=>alert("succes"))
  .catch((e)=>alert("error"))
}
console.log(data);
  return (
    <Box marginTop="200px">
    <Flex gap= "50px" width= "80%"  margin= "auto">
      <Box width="45%">
        <Image
          src={data.image}
          width="100%"
          height="auto"
        ></Image>
      </Box>
      <Box width="45%">
        <Box className={styles.brand_container}>{data.brand}</Box>
        <Box className={styles.prod_name}>
          {data.title}
        </Box>
        <Box className={styles.prod_price}>
          Rs {data.price}
          <span className= {styles.prod_strikeprice} >{data.strikeprice}</span>
          <span className= {styles.prod_discount} >60% off</span>
        </Box>
        <Box className={styles.prod_tax}>inclusive of all taxes</Box>
        <Flex className={styles.prod_category} gap= "20px">
          <Box className= {styles.oversizediv} >OVERSIZE FIT</Box>
          <Box className= {styles.designdaydiv} >DESIGN OF THE DAY</Box>
        </Flex>
        <Box className={styles.prod_tribe}>
          Tribe members get an extra discount of Rs. 40 & FREE shipping.
          <Box  className= {styles.leranmorediv}>Learn more</Box>
        </Box>
        <Flex className={styles.prod_sizeguide} justifyContent="space-between" width= "80%">
          <span>Select Size</span>
          <span>Size guide</span>
        </Flex>
        <Flex className={styles.prod_size} width = "50%" gap= "10px" margin= "10px 0" >
          <Box>S</Box>
          <Box>M</Box>
          <Box>L</Box>
          <Box>XL</Box>
          <Box>2XL</Box>
          <Box>3XL</Box>
        </Flex>
        <Flex className={styles.prod_cart} gap ="8px" width= "80%" margin="10px 0" >
          <Box className={styles.addtocart} ><Button background= "#ffd84d"  onClick={handlecart} >Add to cart</Button></Box>
          <Box>Wishlist</Box>
        </Flex>


        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
         Save extra with 2 offers
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Get Rs.200 instant discount on your first Purchase above Rs.999
Coupon Code- <span>NEW-200</span><br />


Whistles! Get extra 20% cashback on prepaid orders above Rs.499
Coupon Code- <span>NEW-20</span>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
         Product description
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Get Rs.200 instant discount on your first Purchase above Rs.999
Coupon Code- <span>NEW-200</span><br />


Whistles! Get extra 20% cashback on prepaid orders above Rs.499
Coupon Code- <span>NEW-20</span>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </Box>
    </Flex>
    </Box>
  );
};

export default Productdetail;