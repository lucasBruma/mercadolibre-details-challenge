import {Text, VStack, Box, Image, StackDivider} from "@chakra-ui/react";
import React from "react";

import {ProductPicture} from "../../product/types";

// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./CarrouselStyles.css";
// import required modules

interface Props {
  infoCards: ProductPicture[];
  infoParaElCard: ProductPicture;
}
export const CarrouselCard: React.FC<Props> = ({infoParaElCard}) => {
  return (
    <VStack
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
      }}
      bgColor={"#fff"}
      border="1px solid"
      borderColor="blackAlpha.300"
      borderRadius="10px"
      divider={<StackDivider alignSelf="center" borderColor="blackAlpha.300" w={"full"} />}
      h={345}
      w={220}
    >
      <Box h={220} p={1}>
        <Image cursor="pointer" objectFit="contain" src={infoParaElCard.url} />
      </Box>
      <VStack alignItems={"start"} p={2}>
        <Text fontSize={24}>$ {infoParaElCard.price.toLocaleString("de-DE")}</Text>
        <Text
          fontSize={14}
          h={37}
          overflow={"hidden"}
          textAlign={"start"}
          textOverflow={"ellipsis"}
        >
          {infoParaElCard.title}
        </Text>
      </VStack>
    </VStack>
  );
};
