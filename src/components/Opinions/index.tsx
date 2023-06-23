import React from "react";
import {VStack, Heading, Text, HStack, Icon, Button, StackDivider, Link} from "@chakra-ui/react";
import {BsArrowReturnRight} from "react-icons/bs";
import {BiUser, BiChevronDown} from "react-icons/bi";

import {Opinion} from "../../product/data";
import Ratings from "../Ratings";
import OpinionComment from "../OpinionComment";

const opinions: Opinion[] = [
  {
    comment:
      "A mi ahijado le gustaron, dice que le quedan cómodos, aparenta buena calidad en los materiales y para el uso que le va a dar viene muy bien!!.",
    date: "10 jun. 2023",
  },
  {
    comment: "El precio y la calidad muy buena.",
    date: "06 jun. 2023",
  },
  {
    comment: "Mí hijo muy feliz le quedan cómodos y muy buena calidad lo recomiendo.",
    date: "05 jun. 2023",
  },
];

const Opinions = (): JSX.Element => {
  return (
    <VStack alignItems="flex-start" w="full">
      <Heading fontSize="24px" fontWeight={400} mb={5}>
        Opiniones del producto
      </Heading>
      <HStack alignItems="flex-start" spacing={10} w="full">
        <Ratings />
        <VStack alignItems="flex-start" h="100%" spacing={7} w="100%">
          <HStack w="70%">
            <Button
              borderRadius="20px"
              fontSize="14px"
              h="35px"
              marginInlineEnd="10px"
              variant="lightblue"
            >
              <Text>Opiniones</Text>
              <Icon as={BiChevronDown} ml="5px" />
            </Button>
            <Button
              borderRadius="20px"
              fontSize="14px"
              h="35px"
              marginInlineEnd="10px"
              variant="lightblue"
            >
              <Text>Calificación</Text>
              <Icon as={BiChevronDown} ml="5px" />
            </Button>
          </HStack>
          <VStack divider={<StackDivider borderColor="gray.200" />} h="100%" spacing={6} w="100%">
            {opinions.map((opinion, index) => (
              <OpinionComment key={index} comment={opinion.comment} date={opinion.date} />
            ))}
          </VStack>
          <Link fontSize="14px">Mostrar todas las opiniones</Link>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Opinions;
