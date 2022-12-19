import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

import "./SimpleAccordion.css"
const Navfilter = () => {
  return (
    
    <Accordion width="30%"  defaultIndex={[0]} allowMultiple>
        <Heading>Filter</Heading>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Gender
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList className="Acordli" listStyleType= "none">
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
              Category
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList className="Acordli" listStyleType= "none">
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
              Size
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList className="Acordli" listStyleType= "none">
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
              Colour
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList className="Acordli" listStyleType= "none">
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
          <UnorderedList className="Acordli" listStyleType= "none">
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
          <UnorderedList className="Acordli" listStyleType= "none">
            <ListItem>Men</ListItem>
            <ListItem>Women</ListItem>
            <ListItem>Unisex</ListItem>
          
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>


    </Accordion>
  );
};

export default Navfilter;
