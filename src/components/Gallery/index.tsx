import React from "react";
import {VStack, HStack, Flex, Image} from "@chakra-ui/react";

import {Picture} from "../../product/data";
import SmallPhoto from "../SmallPhoto";
import get from "../../product/mock";

const Gallery: React.FC = () => {
  const producto = get.product;
  const defaultImg = producto.pictures?.[0]?.url ?? ""; /*imagenes mock*/
  const [selected, setSelected] = React.useState<string>(defaultImg);

  return (
    <HStack
      alignItems="flex-start"
      fontSize="14px"
      justifyContent="space-between"
      mb=".5rem"
      mt=".5rem"
      width="100%"
    >
      <VStack width="50px">
        {producto?.pictures?.map((picture: Picture) => {
          return (
            <SmallPhoto
              key={picture.url}
              isActive={selected === picture.url}
              setSelectedImage={setSelected}
              src={picture.url}
            />
          );
        })}
      </VStack>
      <Flex alignContent="center" height="500px" justifyContent="center" width="700px">
        <Image flex={1} objectFit="contain" src={selected} />
      </Flex>
    </HStack>
  );
};

export default Gallery;
