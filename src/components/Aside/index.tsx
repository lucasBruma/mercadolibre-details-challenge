import React from "react";
import {Box, VStack, HStack, StackDivider} from "@chakra-ui/react";

import ProductAside from "../ProductAside";

const Aside = (): JSX.Element => {
  return (
    <VStack spacing={0} w="100%">
      <ProductAside />
    </VStack>
  );
};

export default Aside;
