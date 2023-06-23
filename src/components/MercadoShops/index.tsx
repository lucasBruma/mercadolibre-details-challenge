import React from "react";
import {Text, GridItem, VStack, Grid, Image, Container} from "@chakra-ui/react";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {AiFillStar} from "react-icons/ai";
import {CardsEffectEvents} from "swiper/types";

import {CardShop} from "../../product/data";

import Card from "./Card";

const cards: CardShop[] = [
  {
    link: "https://http2.mlstatic.com/D_Q_NP_652844-MLA54991533726_052023-AB.webp",
    name: "Botines de cuero Vacuno futbol 5",
    price: "7699",
    fees: "12x $1.627",
    shop: "CALZADOS ALLEN",
  },
  {
    link: "https://http2.mlstatic.com/D_Q_NP_610810-MLA53380809546_012023-AB.webp",
    name: "Botines niño, niña, adulto.",
    price: "7699",
    fees: "12x $1.627",
    shop: "CALZADOS ALLEN",
  },
  {
    link: "https://http2.mlstatic.com/D_Q_NP_610810-MLA53380809546_012023-AB.webp",
    name: "Botines Topper San Ciro V Papi",
    price: "7699",
    fees: "12x $1.627",
    shop: "CALZADOS ALLEN",
  },
  {
    link: "https://http2.mlstatic.com/D_Q_NP_919458-MLA69921814891_062023-AB.webp",
    name: "Botines Futbol, Futsal, indoor.",
    price: "7699",
    fees: "12x $1.627",
    shop: "CALZADOS ALLEN",
  },
];

const MercadoShops = (): JSX.Element => {
  return (
    <VStack borderRadius="20px" spacing={0} top="-35em" w="100%">
      <VStack
        alignItems="center"
        bgColor="#e82e8a"
        borderTopRadius=".5rem"
        pb="2rem"
        pt="1rem"
        spacing={0}
        w="100%"
      >
        <Image src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/shops-icon.svg" />
        <Text color="#fff" fontWeight="bold">
          Comprá en tiendas fuera de Mercado Libre
        </Text>
      </VStack>
      <Container bgColor="#f5f5f5" borderBottomRadius="10px">
        <Grid
          gap={6}
          position="relative"
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(2, 1fr)"
          top="-24px"
          width="100%"
        >
          {cards.map((card, index) => {
            return (
              <GridItem key={index} w="100%">
                <Card {...card} />
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </VStack>
  );
};

export default MercadoShops;
