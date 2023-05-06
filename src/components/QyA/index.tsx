import React from "react";
import {
  Box,
  VStack,
  HStack,
  StackDivider,
  Text,
  Heading,
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

import Gallery from "../Gallery";
import Carrousel from "../Carrousel";
import Features from "../Features";
import get from "../../product/mock";
import Questions from "../Questions";
import Answers from "../Answers";
import {QuestionsTypes} from "../../product/data";

const faqs: string[] = [
  "Costo y tiempo de envío",
  "Guía de talles",
  "Devoluciones gratis",
  "Medios de pago y promociones",
  "Garantía",
  "Cuotas sin tarjeta",
];

const questionsAnswers: QuestionsTypes[] = [
  {
    question: "Hola como estas? Tienen stock?",
    answer: "Hola! Si, por supuesto!",
    date: "06/03/2023",
  },
  {
    question: "Hola, tenes talle 37?",
    answer:
      "¡Hola!, lamentamos informarte que no tenemos disponible el talle por el que preguntás. Podemos ofrecerte otros modelos similares ingresando a nuestra Tienda Oficial.",
    date: "24/04/2023",
  },
  {
    question: "Buenas noches .cuáles son los nros más grandes que te quedan?",
    answer: "¡Hola! El talle más grande que me queda es 43.",
    date: "28/04/2023",
  },
];

const QyA: React.FC = () => {
  const [questions, setQuestions] = React.useState<QuestionsTypes[]>(questionsAnswers);

  return (
    <VStack alignItems="baseline" px={5} py={8} spacing={10}>
      <Heading fontSize="24px" fontWeight={400}>
        Preguntas y respuestas
      </Heading>
      <VStack alignItems="baseline">
        <Heading fontSize="20px" fontWeight={600} mb={5}>
          ¿Qué querés saber?
        </Heading>
        <Flex direction="row" flexWrap="wrap" minHeight="110px" spacing={0}>
          {faqs.map((faq: string) => {
            return (
              <Button key={faq} fontSize="14px" h="35px" marginInlineEnd="10px" variant="lightblue">
                {faq}
              </Button>
            );
          })}
        </Flex>
      </VStack>
      <Questions questions={questions} setQuestions={setQuestions} />
      <Answers questions={questions} />
    </VStack>
  );
};

export default QyA;
