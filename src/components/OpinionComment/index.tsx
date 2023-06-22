import React, {MouseEvent} from "react";
import {VStack, Heading, Text, HStack, Icon, Button} from "@chakra-ui/react";
import {BsArrowReturnRight} from "react-icons/bs";
import {
  AiFillStar,
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import {BsThreeDotsVertical} from "react-icons/bs";

import Ratings from "../Ratings";

interface Props {
  comment?: string;
  date?: string;
}

const OpinionComment = ({comment, date}: Props): JSX.Element => {
  const [count, setCount] = React.useState(0);
  const [likedComment, setLikedComment] = React.useState(false);
  const [dislikedComment, setDislikedComment] = React.useState(false);

  const handleLiked = (event: MouseEvent) => {
    if (dislikedComment) setDislikedComment(false);
    setLikedComment(true);
    if (count === 0) setCount(count + 1);
  };

  const handleDisliked = (event: MouseEvent) => {
    if (likedComment) setLikedComment(false);
    setDislikedComment(true);
    if (count != 0) setCount(count - 1);
  };

  return (
    <VStack alignItems="flex-start" spacing={4} w="100%">
      <HStack justifyContent="space-between" w="100%">
        <HStack spacing={1}>
          <Icon as={AiFillStar} color="#3483fa" fontSize="15px" />
          <Icon as={AiFillStar} color="#3483fa" fontSize="15px" />
          <Icon as={AiFillStar} color="#3483fa" fontSize="15px" />
          <Icon as={AiFillStar} color="#3483fa" fontSize="15px" />
          <Icon as={AiFillStar} color="#3483fa" fontSize="15px" />
        </HStack>
        <Text color="blackAlpha.600" fontSize="13px">
          {date}
        </Text>
      </HStack>
      <Text>{comment}</Text>
      <HStack justifyContent="space-between" w="100%">
        <HStack color="blackAlpha.600" w="100%">
          <Button borderRadius="20px" colorScheme="gray" variant="outline" onClick={handleLiked}>
            {!likedComment && (
              <Text fontSize="15px" mr={"5px"}>
                Es útil
              </Text>
            )}
            {!likedComment && <Icon as={AiOutlineLike} mr={"5px"} />}
            {likedComment && <Icon as={AiFillLike} mr={"5px"} />}
            {count}
          </Button>
          <Button borderRadius="20px" colorScheme="gray" variant="outline" onClick={handleDisliked}>
            {dislikedComment && <Icon as={AiFillDislike} />}
            {!dislikedComment && <Icon as={AiOutlineDislike} />}
          </Button>
        </HStack>
        <Button borderRadius="20px" colorScheme="gray" variant="none">
          <Icon as={BsThreeDotsVertical} color="blackAlpha.600" />
        </Button>
      </HStack>
    </VStack>
  );
};

export default OpinionComment;
