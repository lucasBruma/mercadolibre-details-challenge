import React from "react";
import {Heading, Text, HStack, Link, Icon, VStack} from "@chakra-ui/react";
import {BsTruck} from "react-icons/bs";

const Returns = (): JSX.Element => {
  return (
    <HStack alignItems="flex-start" spacing={3}>
      <Icon as={BsTruck} color="primary.1000" fontSize="20px" mt="2px" />
      <VStack alignItems="flex-start" spacing={0}>
        <Text color="primary.1000">Devolución gratis</Text>
        <Text color="blackAlpha.600" fontSize="sm">
          Tenés 30 días desde que lo recibis
        </Text>
        <Link fontSize="sm">Conocer más</Link>
      </VStack>
    </HStack>
  );
};

export default Returns;
