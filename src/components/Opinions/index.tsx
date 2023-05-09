import React from "react";
import {VStack, Heading, Text, HStack, Icon} from "@chakra-ui/react";
import {BsArrowReturnRight} from "react-icons/bs";

import Ratings from "../Ratings";

const Opinions = (): JSX.Element => {
  return (
    <VStack alignItems="flex-start">
      <Heading fontSize="24px" fontWeight={400} mb={5}>
        Opiniones del producto
      </Heading>
      <HStack>
        <Ratings />
      </HStack>
    </VStack>
  );
};

export default Opinions;
