import React from "react";
import {Heading, Text, HStack, Link, Icon, VStack} from "@chakra-ui/react";
import {BsArrowReturnLeft} from "react-icons/bs";

const Shipping = (): JSX.Element => {
  return (
    <HStack alignItems="flex-start" spacing={3}>
      <Icon as={BsArrowReturnLeft} color="primary.1000" fontSize="20px" mt="2px" />
      <VStack alignItems="flex-start" spacing={0}>
        <Text color="primary.1000">Llega gratis el viernes</Text>
        <Link fontSize="sm">Ver más formas de entrega</Link>
      </VStack>
    </HStack>
  );
};

export default Shipping;
