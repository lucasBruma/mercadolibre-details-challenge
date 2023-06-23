import React from "react";
import {Box, VStack, Link, Text} from "@chakra-ui/react";

import Status from "./Status";
import StatusBar from "./StatusBar";
import StatusInfo from "./StatusInfo";

const SellerAside = (): JSX.Element => {
  return (
    <VStack
      alignItems="flex-start"
      border="1px solid rgba(0,0,0,.1)"
      borderRadius=".5rem"
      p="1rem"
      py="2rem"
      spacing={5}
      w="100%"
    >
      <Text>Información sobre el vendedor</Text>
      <Status />
      <StatusBar />
      <StatusInfo />
      <Link fontSize="sm">Ver más datos de este vendedor</Link>
    </VStack>
  );
};

export default SellerAside;
