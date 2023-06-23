import React from "react";
import {Box, VStack, Text, Link} from "@chakra-ui/react";

const Warranty = (): JSX.Element => {
  return (
    <VStack alignItems="flex-start" spacing={4} w="100%">
      <Text fontSize="lg">Garantía</Text>
      <VStack alignItems="flex-start" spacing={2}>
        <Text>Compra protegida con Mercado Pago</Text>
        <Text color="blackAlpha.600" fontSize="sm">
          Recibi el producto que esperabas o te devolvemos tu dinero
        </Text>
      </VStack>
      <VStack alignItems="flex-start" spacing={2}>
        <Text>Garantía del vendedor</Text>
        <Text color="blackAlpha.600" fontSize="sm">
          Garantía de fábrica: 10 días
        </Text>
      </VStack>
      <Link fontSize="sm" pb="4">
        Conocer más sobre garantía
      </Link>
    </VStack>
  );
};

export default Warranty;
