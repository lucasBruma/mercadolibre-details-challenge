import React from "react";
import {VStack, Heading, Text, HStack, Icon} from "@chakra-ui/react";
import {BsArrowReturnRight} from "react-icons/bs";

import BoxQuestion from "../BoxQuestion";
import BoxAnswer from "../BoxAnswer";
import {QuestionsTypes} from "../../product/data";
interface Props {
  questions: QuestionsTypes[];
}
// import "./answers.css";
const Answers = ({questions}: Props): JSX.Element => {
  const [showReport, setShowReport] = React.useState(false);

  return (
    <VStack alignItems="baseline" width="100%">
      <Heading fontSize="20px" fontWeight={600} mb={5}>
        Últimas realizadas
      </Heading>
      <VStack alignItems="baseline" spacing={6}>
        {questions.map((item, i) => {
          return (
            <VStack key={i} alignItems="baseline" width="100%">
              <BoxQuestion question={item.question} />
              <BoxAnswer answer={item.answer} date={item.date} />
            </VStack>
          );
        })}
      </VStack>
    </VStack>
  );
};

export default Answers;
