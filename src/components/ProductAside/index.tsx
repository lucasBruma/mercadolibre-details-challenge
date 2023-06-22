import React from "react";
import {VStack, Link, Button, HStack, Icon} from "@chakra-ui/react";
import {BsArrowReturnRight} from "react-icons/bs";

import {QuestionsTypes} from "../../product/data";

import Footer from "./Footer";
import Header from "./Header";
import Price from "./Price";
import Shipping from "./Shipping";
import Returns from "./Returns";
import Stock from "./Stock";

const ProductAside = (): JSX.Element => {
  return (
    <VStack
      alignItems="flex-start"
      border="1px solid rgba(0,0,0,.1)"
      borderRadius=".5rem"
      p="1rem"
      spacing={5}
    >
      <Link>Ver más productos marca Nike</Link>
      <Header />
      <Price />
      <Shipping />
      <Returns />
      <Stock />
      <VStack w="100%">
        <Button variant="blue" w="100%">
          Comprar ahora
        </Button>
        <Button variant="lightblue" w="100%">
          Agregar al carrito
        </Button>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default ProductAside;
