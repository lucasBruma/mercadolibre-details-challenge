import React from "react";
import {Heading, Text, HStack, Link, Icon, VStack} from "@chakra-ui/react";
import {BiMedal} from "react-icons/bi";

const Status = (): JSX.Element => {
  return (
    <HStack alignItems="flex-start" spacing={3}>
      <Icon as={BiMedal} color="primary.1000" fontSize="20px" mt="2px" />
      <VStack alignItems="flex-start" spacing={0}>
        <Text color="primary.1000">MercadoLíder Platinum</Text>
        <Text color="blackAlpha.600" fontSize="sm">
          ¡Es uno de los mejores del sitio!
        </Text>
      </VStack>
    </HStack>
  );
};

export default Status;
