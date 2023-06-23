import React from "react";
import {Box, VStack, HStack, StackDivider} from "@chakra-ui/react";

import ProductAside from "../ProductAside";
import SellerAside from "../SellerAside";
import ContentRight from "../ContentRight";
import MercadoShops from "../MercadoShops";

const Aside = (): JSX.Element => {
  // const [fix, setFix] = React.useState(false);

  // const setFixed = () => {
  //   if (window.scrollY > 2073 && window.scrollY < 3450) {
  //     setFix(true);
  //   } else {
  //     setFix(false);
  //   }
  // };

  // window.addEventListener("scroll", setFixed);

  return (
    <VStack pos="relative" spacing={4} w="100%">
      <ProductAside />
      <SellerAside />
      <ContentRight />
      {/* <Box position={fix ? "fixed" : "relative"} top="1rem" w="330px"> */}
      <MercadoShops />
      {/* </Box> */}
    </VStack>
  );
};

export default Aside;
