import React from "react";
import {Box, VStack, HStack, StackDivider, Text, Heading} from "@chakra-ui/react";

import Gallery from "../Gallery";
import Carrousel from "../Carrousel";
import Features from "../Features";
import get from "../../product/mock";

const Description: React.FC = () => {
  const producto = get.product;

  return (
    <VStack alignItems="flex-start" px={5} py={8}>
      <Heading fontSize="24px" fontWeight={400} mb={5}>
        Descripción
      </Heading>
      <Text color="blackAlpha.700" fontSize="20px" fontWeight="400" whiteSpace="pre-wrap">
        {producto.descriptions[0].text}
      </Text>
    </VStack>
  );
};

export default Description;
