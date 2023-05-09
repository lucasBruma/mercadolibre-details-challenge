import React from "react";
import {
  VStack,
  HStack,
  Heading,
  Button,
  Input,
  FormControl,
  Container,
  Box,
} from "@chakra-ui/react";

import {QuestionsTypes} from "../../product/data";
interface Props {
  setQuestions: (value: QuestionsTypes[]) => void;
  questions: QuestionsTypes[];
}

const Questions = ({setQuestions, questions}: Props): JSX.Element => {
  const ref = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = ref.current?.value as string;
    const condition = value !== undefined;
    const date = new Date();

    if (condition) {
      if (value.trim().length > 2) {
        setQuestions([
          {
            question: value,
            answer: "¡Hola! Nos pondremos en contacto contigo lo antes posible.",
            date: `${date.getDate()}/${String(date.getMonth() + 1).padStart(
              2,
              "0",
            )}/${date.getFullYear()}`,
          },
          ...questions,
        ]);
        ref.current!.value = "";
      }
    }
  };

  return (
    <VStack alignItems="baseline" width="100%">
      <Heading fontSize="20px" fontWeight={600} mb={5}>
        Preguntale al vendedor
      </Heading>
      <Box width="100%">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <HStack h="48px" spacing={3}>
              <Input ref={ref} h="100%" placeholder="Escribí tu pregunta..." />
              <Button borderRadius="md" h="100%" paddingX="2rem" type="submit" variant="blue">
                Preguntar
              </Button>
            </HStack>
          </FormControl>
        </form>
      </Box>
    </VStack>
  );
};

export default Questions;
