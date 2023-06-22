import React from "react";
import {Box, VStack, HStack, StackDivider} from "@chakra-ui/react";

import Gallery from "../Gallery";
import Carrousel from "../Carrousel";
import Features from "../Features";
import Description from "../Description";
import QyA from "../QyA";
import Aside from "../Aside";

const MainContainer: React.FC = () => {
  return (
    <HStack
      alignItems="flex-start"
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
      <Aside />
    </HStack>
  );
};

export default MainContainer;
