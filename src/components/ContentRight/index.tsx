import React from "react";
import {Box, VStack, HStack, StackDivider} from "@chakra-ui/react";

import Warranty from "./Warranty";
import PaymentMethods from "./PaymentMethods";

const ContentRight = (): JSX.Element => {
  return (
    <VStack
      border="1px solid rgba(0,0,0,.1)"
      borderRadius=".5rem"
      divider={<StackDivider />}
      px="1rem"
      py="2rem"
      spacing={4}
      w="100%"
    >
      <Warranty />
      <PaymentMethods />
    </VStack>
  );
};

export default ContentRight;
