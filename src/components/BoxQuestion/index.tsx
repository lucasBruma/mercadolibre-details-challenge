import React from "react";
import {VStack, Heading, Text, HStack, Icon} from "@chakra-ui/react";
import {BsArrowReturnRight} from "react-icons/bs";

import {QuestionsTypes} from "../../product/data";

const BoxQuestion = ({question}: QuestionsTypes): JSX.Element => {
  const [showReport, setShowReport] = React.useState(false);

  return (
    <HStack
      width="100%"
      onMouseEnter={() => setShowReport(true)}
      onMouseLeave={() => setShowReport(false)}
    >
      <Text position="relative">
        {question}{" "}
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
  );
};

export default BoxQuestion;
