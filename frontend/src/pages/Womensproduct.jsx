import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import "./mensprod.css";
import { Flex } from "@chakra-ui/react";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import Navfilter from "../comopnents/Navfilter";
import Product from "../comopnents/Product";
import { Link } from "react-router-dom";
const Womensproduct = () => {
  const [female, setfemale] = useState([]);
  function getdata() {
    axios
      .post("https://messhobackend-production.up.railway.app/products/gender", {
        gender: "female",
      })
      .then((r) => setfemale(r.data));
  }
  useEffect(() => {
    getdata();
  }, []);

  console.log(female);

  function handleclickblue (){
    const ans =  female.filter((data)=>data.color==="blue")
    setfemale(ans)
  }
  function handleclickwhite (){
    const ans =  female.filter((data)=>data.color==="white")
    setfemale(ans)
  }
  function handleclickred (){
    const ans =  female.filter((data)=>data.color==="red")
    setfemale(ans)
  }
  function handleclickblack (){
    const ans =  female.filter((data)=>data.color==="black")
    setfemale(ans)
  }
  function handleclicktshirt (){
    const ans =  female.filter((data)=>data.category==="tshirt")
    setfemale(ans)
  }
  function handleclickkurta (){
    const ans =  female.filter((data)=>data.category==="kurti")
    setfemale(ans)
  }
  function handleclickjeans (){
    const ans =  female.filter((data)=>data.category==="jeans")
    setfemale(ans)
  }
  function handleclicksmall (){
    const ans =  female.filter((data)=>data.size==="l")
    setfemale(ans)
  }
  function handleclickmedium (){
    const ans =  female.filter((data)=>data.size==="xl")
    setfemale(ans)
  }


  return (
    <Flex w="80%" margin="auto" marginTop="200px">
      {/* <Navfilter /> */}

     

      <Accordion width="30%"  allowMultiple>
      <Heading>Filter</Heading>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            Category
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList className="Acordli" listStyleType="none">

          <ListItem> <Button onClick={handleclicktshirt}  >tshirt</Button> </ListItem>
            <ListItem> <Button onClick={handleclickkurta}  >kurti</Button> </ListItem>
            <ListItem> <Button onClick={handleclickjeans}  >jeans</Button> </ListItem>

      
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Color
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList className="Acordli" listStyleType="none">
          <ListItem> <Button onClick={handleclickblue}  >Blue</Button> </ListItem>
            <ListItem> <Button onClick={handleclickwhite}  >white</Button> </ListItem>
            <ListItem> <Button onClick={handleclickred}  >Red</Button> </ListItem>
            <ListItem> <Button onClick={handleclickblack}  >black</Button> </ListItem>
         
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Size
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList className="Acordli" listStyleType="none">
          <ListItem> <Button onClick={handleclicksmall}  >l</Button> </ListItem>
            <ListItem> <Button onClick={handleclickmedium}  >xl</Button> </ListItem>
           
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Colour
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList className="Acordli" listStyleType="none">
            <ListItem>Men</ListItem>
            <ListItem>Women</ListItem>
            <ListItem>Unisex</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Design
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList className="Acordli" listStyleType="none">
            <ListItem>Men</ListItem>
            <ListItem>Women</ListItem>
            <ListItem>Unisex</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Fit
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList className="Acordli" listStyleType="none">
            <ListItem>Men</ListItem>
            <ListItem>Women</ListItem>
            <ListItem>Unisex</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
     

      <div className="menproddiv">
        {female.map((data) => {
          return (
            <Link to={`/product/${data._id}`}>
              <div>
                <Product
                  prod_image={data.image}
                  prod_title={data.title}
                  prod_brand={data.brand}
                  prod_desc={data.name}
                  prod_price={data.price}
                  prod_strikeprice={data.strikeprice}
                  prod_tribe={data.tribe}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </Flex>
  );
};

export default Womensproduct;
