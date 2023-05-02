import React from "react";
import {Box, Image} from "@chakra-ui/react";

type Props = {src: string; setSelectedImage: (name: string) => void; isActive: boolean};

const SmallPhoto = ({src, setSelectedImage, isActive}: Props): JSX.Element => {
  const handlerClick = () => {
    setSelectedImage(src);
  };

  return (
    <Box
      _hover={{outline: "2px solid #3483fa"}}
      borderRadius="4px"
      cursor="pointer"
      height="50px"
      margin-bottom="8px"
      outline={isActive ? "2px solid #34a0fa" : "1px solid rgba(0,0,0,.25)"}
      width="50px"
    >
      <Image
        height="100%"
        objectFit="contain"
        padding="3px"
        src={src}
        width="100%"
        onClick={handlerClick}
      />
    </Box>
  );
};

export default SmallPhoto;
