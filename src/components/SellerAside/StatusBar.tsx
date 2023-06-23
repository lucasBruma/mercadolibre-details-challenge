import React from "react";
import {Heading, Text, HStack, Link, Box, VStack} from "@chakra-ui/react";
import {BiMedal} from "react-icons/bi";

const colors: string[] = ["#fff0f0", "#fff5e8", "#fffcda", "#f1fdd7", "#39b54a"];

const StatusBar = (): JSX.Element => {
  return (
    <HStack alignItems="flex-start" spacing={3} w="100%">
      {colors.map((color, index) => (
        <Box key={index} bgColor={color} h="12px" w="20%" />
      ))}
    </HStack>
  );
};

export default StatusBar;
