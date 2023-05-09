import React from "react";
import {VStack, Progress, Text, HStack, Icon, Stack} from "@chakra-ui/react";
import {AiFillStar} from "react-icons/ai";

import {Review} from "../../product/types";

let review: Review[] = [
  {
    stars: "5",
    value: 100,
    people: 12,
  },
  {
    stars: "4",
    value: 10,
    people: 2,
  },
  {
    stars: "3",
    value: 2,
    people: 1,
  },
  {
    stars: "2",
    value: 0,
    people: 0,
  },
  {
    stars: "1",
    value: 0,
    people: 0,
  },
];
const Ratings = (): JSX.Element => {
  return (
    <VStack>
      <HStack spacing={5}>
        <Text color="#3483fa" fontSize="50px" fontWeight="bold">
          5.0
        </Text>
        <VStack alignItems="flex-start" spacing={0}>
          <HStack>
            <Icon as={AiFillStar} color="#3483fa" fontSize="20px" />
            <Icon as={AiFillStar} color="#3483fa" fontSize="20px" />
            <Icon as={AiFillStar} color="#3483fa" fontSize="20px" />
            <Icon as={AiFillStar} color="#3483fa" fontSize="20px" />
            <Icon as={AiFillStar} color="#3483fa" fontSize="20px" />
          </HStack>
          <Text color="blackAlpha.600" fontSize="14px">
            215 calificaciones
          </Text>
        </VStack>
      </HStack>
      <Stack spacing={0} w={"full"}>
        {review?.map((item) => (
          <HStack key={item.stars} h={"18px"}>
            <Progress
              borderRadius="2px"
              colorScheme={"blackAlpha"}
              marginTop="5px"
              size="xs"
              value={item.value}
              width={"179px"}
            />
            <HStack flex={1} justifyContent="space-between">
              <Text color="blackAlpha.500" fontSize={16} paddingLeft={"12px"}>
                {item.stars}
              </Text>
              <Icon as={AiFillStar} boxSize={"12px"} color="#BFBFBF" />
            </HStack>
          </HStack>
        ))}
      </Stack>
    </VStack>
  );
};

export default Ratings;
