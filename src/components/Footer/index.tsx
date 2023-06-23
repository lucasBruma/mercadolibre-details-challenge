import {Link, VStack, Text} from "@chakra-ui/react";
import React from "react";

const Footer = (): JSX.Element => {
  return (
    <VStack bgColor="white" color="blackAlpha.600" mt="3rem" py={8} w="100%">
      <Text>
        Desarrollado por{" "}
        <Link href="https://www.linkedin.com/in/lucas-brumatti-50bb9a1b3/" target="_blank">
          Lucas Brumatti
        </Link>
      </Text>
      <Text>
        ATENCIÓN: Esta web se trata de un challenge, no es un intento de phishing hacia los usuarios
        que la visitan.
      </Text>
    </VStack>
  );
};

export default Footer;
