import React from "react";
import {Heading, Text, StackDivider, Link, Icon, VStack} from "@chakra-ui/react";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";

const Price = (): JSX.Element => {
  return (
    <VStack alignItems="flex-start" spacing={2}>
      <VStack alignItems="flex-start" spacing={0}>
        <Text fontSize="3xl">$ 21.899</Text>
        <Text fontSize="md" maxW="200px">
          en 12x de $3.237
        </Text>
      </VStack>
      <Link fontSize="sm">Ver los medios de pago</Link>
    </VStack>
  );
};

export default Price;
