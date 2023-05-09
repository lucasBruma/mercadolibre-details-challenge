import React from "react";
import {VStack, Heading, Text, HStack, Icon} from "@chakra-ui/react";
import {BsArrowReturnRight} from "react-icons/bs";

import {QuestionsTypes} from "../../product/data";

const BoxQuestion = ({answer, date}: QuestionsTypes): JSX.Element => {
  const [showReport, setShowReport] = React.useState(false);

  return (
    <HStack
      alignItems="baseline"
      color="blackAlpha.600"
      paddingInlineStart={5}
      width="100%"
      onMouseEnter={() => setShowReport(true)}
      onMouseLeave={() => setShowReport(false)}
    >
      <Icon as={BsArrowReturnRight} minH="16px" minW="16px" />
      <HStack width="100%">
        <Text position="relative">
          {answer} {date}
          {"   "}
          <Text
            _hover={{color: "#2B6CB0"}}
            color={"blue.400"}
            cursor={"pointer"}
            display={showReport ? "inline-block" : "none"}
            fontSize={14}
            marginLeft="7px"
            marginTop="1px"
            position="absolute"
          >
            Denunciar
          </Text>
        </Text>
      </HStack>
    </HStack>
  );
};

export default BoxQuestion;
