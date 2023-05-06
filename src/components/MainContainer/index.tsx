import React from "react";
import {Box, VStack, HStack, StackDivider} from "@chakra-ui/react";

import Gallery from "../Gallery";
import Carrousel from "../Carrousel";
import Features from "../Features";
import Description from "../Description";
import QyA from "../QyA";

const MainContainer: React.FC = () => {
  return (
    <HStack
      background="#fff"
      borderRadius="5px"
      boxShadow="sm"
      justifyContent="space-between"
      mt={5}
      padding={5}
    >
      <VStack
        divider={<StackDivider alignSelf="center" borderColor="blackAlpha.200" width="97%" />}
        width="69%"
      >
        <Gallery />
        <Carrousel />
        <Features />
        <VStack>
          <Description />
          <QyA />
        </VStack>
      </VStack>
      <Box>Holi</Box>
    </HStack>
  );
};

export default MainContainer;
