import React from "react";
import {Heading, Text, HStack, Link, Select, VStack, Icon} from "@chakra-ui/react";
import {BsShieldCheck} from "react-icons/bs";
import {AiOutlineTrophy} from "react-icons/ai";

const Footer = (): JSX.Element => {
  return (
    <VStack alignItems="flex-start" color="blackAlpha.600" fontSize="14px" spacing={3}>
      <HStack alignItems="center" spacing={3}>
        <Icon as={BsShieldCheck} />
        <Text>
          <Link>Compra protegida</Link>, recibí el producto que esperabas o te devolvemos tu dinero
        </Text>
      </HStack>
      <HStack alignItems="center" spacing={3}>
        <Icon as={AiOutlineTrophy} />
        <Text>
          <Link>Mercado Puntos</Link>, sumás 12 puntos.
        </Text>
      </HStack>
    </VStack>
  );
};

export default Footer;
