import React from "react";
import {Heading, Text, HStack, Link, Select, VStack} from "@chakra-ui/react";
import {BsArrowReturnLeft} from "react-icons/bs";
const Stock = (): JSX.Element => {
  const options = ["1 unidad", "2 unidades", "3 unidades", "4 unidades", "5 unidades"];

  return (
    <VStack alignItems="flex-start" spacing={0}>
      <Text fontSize="lg" fontWeight="bold">
        Stock disponible
      </Text>
      <HStack alignItems="center" spacing={3}>
        <Text>Cantidad:</Text>
        <Select border="0" placeholder="1 unidad">
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </Select>
      </HStack>
    </VStack>
  );
};

export default Stock;
