import React from "react";
import {VStack, Heading, Text, HStack, Icon} from "@chakra-ui/react";
import {BsArrowReturnRight} from "react-icons/bs";

import {QuestionsTypes} from "../../product/data";
interface Props {
  questions: QuestionsTypes[];
}
import "./answers.css";
const Answers = ({questions}: Props): JSX.Element => {
  return (
    <VStack alignItems="baseline" width="100%">
      <Heading fontSize="20px" fontWeight={600} mb={5}>
        Últimas realizadas
      </Heading>
      <VStack alignItems="baseline" spacing={6}>
        {questions.map((item, i) => {
          return (
            <VStack key={i} alignItems="baseline" width="100%">
              <HStack className="question" width="100%">
                <Text width="80%">{item.question} </Text>
                <Text
                  _hover={{color: "#2B6CB0"}}
                  className="reportQ"
                  color={"blue.400"}
                  cursor={"pointer"}
                  fontSize={14}
                >
                  Denunciar
                </Text>
              </HStack>

              <HStack alignItems="baseline" color="blackAlpha.600" paddingInlineStart={5}>
                <Icon as={BsArrowReturnRight} minH="16px" minW="16px" />
                <HStack className="answer" width="100%">
                  <Text width="80%">
                    {item.answer} {item.date}
                  </Text>
                  <Text
                    _hover={{color: "#2B6CB0"}}
                    className="reportA"
                    color={"blue.400"}
                    cursor={"pointer"}
                    fontSize={14}
                  >
                    Denunciar
                  </Text>
                </HStack>
              </HStack>
            </VStack>
          );
        })}
      </VStack>
    </VStack>
  );
};

export default Answers;
