import {Text, VStack, Box, Image, StackDivider} from "@chakra-ui/react";
import React from "react";

import {CardShop} from "../../product/data";

const Card = ({link, name, price, fees, shop}: CardShop): JSX.Element => {
  return (
    <VStack
      bgColor={"#fff"}
      borderRadius="10px"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      divider={<StackDivider alignSelf="center" borderColor="blackAlpha.300" w={"full"} />}
    >
      <VStack>
        <Box
          bgColor="#454545"
          borderTopRadius="5px"
          color="white"
          px="1rem"
          py="0.5rem"
          textAlign="center"
          w="100%"
        >
          <Text fontSize={"10px"} fontWeight={700}>
            {shop}
          </Text>
        </Box>
        <Box p={1}>
          <Image cursor="pointer" objectFit="contain" src={link} />
        </Box>
      </VStack>

      <VStack alignItems={"start"} fontSize={"12px"} px="12px" py={3} w="100%">
        <Text fontSize={"15px"}>{name}</Text>
        <Text>$ {price}</Text>
        <Text>{fees}</Text>
        <Text color="primary.1000">Envio gratis</Text>
      </VStack>
    </VStack>
  );
};

export default Card;
