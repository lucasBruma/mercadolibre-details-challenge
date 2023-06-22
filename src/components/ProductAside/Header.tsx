import React from "react";
import {Heading, Text, StackDivider, HStack, Icon, Box} from "@chakra-ui/react";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";

const Header = (): JSX.Element => {
  const [liked, setLiked] = React.useState(false);

  return (
    <>
      <HStack divider={<StackDivider borderColor="gray.200" />}>
        <Text>Nuevo</Text>
        <Text>+100 vendidos</Text>
      </HStack>
      <HStack alignItems="flex-start">
        <Heading fontWeight="bold" size="lg">
          Botines Nike Tiempo Legend 8
        </Heading>
        {liked && (
          <Box mt="12px">
            <button onClick={() => setLiked(false)}>
              <Icon as={AiFillHeart} color="blue.500" fontSize="2xl" />
            </button>
          </Box>
        )}
        {!liked && (
          <Box mt="12px">
            <button onClick={() => setLiked(true)}>
              <Icon as={AiOutlineHeart} color="blue.500" fontSize="2xl" />
            </button>
          </Box>
        )}
      </HStack>
    </>
  );
};

export default Header;
