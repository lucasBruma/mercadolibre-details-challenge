import React from "react";
import {VStack, StackDivider, HStack, Text, Image} from "@chakra-ui/react";

const StatusInfo = (): JSX.Element => {
  return (
    <HStack
      alignItems="flex-start"
      divider={<StackDivider borderColor="blackAlpha.300" />}
      w="100%"
    >
      <VStack alignItems="center" justifyContent="center" w="100%">
        <Text fontSize="lg" h="27px">
          +500
        </Text>
        <Text fontSize="12px" textAlign="center">
          Ventas en los ultimos 60 dias
        </Text>
      </VStack>
      <VStack alignItems="center" justifyContent="center" w="100%">
        <Image
          height="27px"
          src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg"
          width="28px"
        />
        <Text fontSize="12px" textAlign="center">
          Brinda buena atencion
        </Text>
      </VStack>
      <VStack alignItems="center" justifyContent="center" w="100%">
        <Image
          height="27px"
          src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg"
          width="28px"
        />{" "}
        <Text fontSize="12px" textAlign="center">
          Despacha sus productos a tiempo
        </Text>
      </VStack>
    </HStack>
  );
};

export default StatusInfo;
