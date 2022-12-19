import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

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
import "./mensprod.css";
import { Flex } from "@chakra-ui/react";

import Navfilter from "../comopnents/Navfilter";
import Product from "../comopnents/Product";
import { Link } from "react-router-dom";
const Mensprod = () => {
  const [mens, setmens] = useState([]);
  function getdata() {
    axios
      .post("https://messhobackend-production.up.railway.app/products/gender", {
        gender: "male",
      })
      .then((r) => setmens(r.data));
  }
  useEffect(() => {
    getdata();
  }, []);

  function handleclickblue() {
    const ans = mens.filter((data) => data.color === "blue");
    setmens(ans);
  }
  function handleclickwhite() {
    const ans = mens.filter((data) => data.color === "white");
    setmens(ans);
  }
  function handleclickred() {
    const ans = mens.filter((data) => data.color === "red");
    setmens(ans);
  }
  function handleclicktshirt() {
    const ans = mens.filter((data) => data.category === "tshirt");
    setmens(ans);
  }
  function handleclickkurta() {
    const ans = mens.filter((data) => data.category === "kurta");
    setmens(ans);
  }
  function handleclicksmall() {
    const ans = mens.filter((data) => data.size === "l");
    setmens(ans);
  }
  function handleclickmedium() {
    const ans = mens.filter((data) => data.size === "xl");
    setmens(ans);
  }

  console.log(mens);
  return (
    <Flex w="80%" margin="auto" marginTop="200px">
      {/* <Navfilter /> */}

      <Accordion width="30%" allowMultiple>
        <Flex gap="3rem" >
        <Heading>Filter</Heading>
        <Button onClick={getdata} >Reset</Button>
        </Flex>
      
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
              <ListItem>
                {" "}
                <Button onClick={handleclicktshirt}>tshirt</Button>{" "}
              </ListItem>
              <ListItem>
                {" "}
                <Button onClick={handleclickkurta}>kurta</Button>{" "}
              </ListItem>
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
              <ListItem>
                {" "}
                <Button onClick={handleclickblue}>Blue</Button>{" "}
              </ListItem>
              <ListItem>
                {" "}
                <Button onClick={handleclickwhite}>white</Button>{" "}
              </ListItem>
              <ListItem>
                {" "}
                <Button onClick={handleclickred}>Red</Button>{" "}
              </ListItem>
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
              <ListItem>
                {" "}
                <Button onClick={handleclicksmall}>l</Button>{" "}
              </ListItem>
              <ListItem>
                {" "}
                <Button onClick={handleclickmedium}>xl</Button>{" "}
              </ListItem>
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
        {mens.map((data) => {
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

export default Mensprod;
