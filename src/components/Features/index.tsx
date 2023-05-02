import {Heading, Box, Grid} from "@chakra-ui/react";
import React from "react";

const Features: React.FC = () => {
  return (
    <Box my={8} px={4} w="100%">
      <Heading fontSize="24px" fontWeight={400}>
        Características principales
      </Heading>
      <Box my={8}>
        <Grid fontSize="16px" templateColumns="1fr 3fr">
          <Box bgColor="#EBEBEB" fontWeight={600} p={4}>
            Marca
          </Box>
          <Box bgColor="#F5F5F5" p={4}>
            Nike
          </Box>
          <Box bgColor="#F5F5F5" fontWeight={600} p={5}>
            Modelo
          </Box>
          <Box bgColor="#FFFFFF" p={4}>
            AT5881-010
          </Box>
          <Box bgColor="#EBEBEB" fontWeight={600} p={5}>
            Tipó de suela
          </Box>
          <Box bgColor="#F5F5F5" p={4}>
            No aplica
          </Box>
          <Box bgColor="#F5F5F5" fontWeight={600} p={5}>
            Tipo de superficie
          </Box>
          <Box bgColor="#FFFFFF" p={4}>
            Césped
          </Box>
          <Box bgColor="#EBEBEB" fontWeight={600} p={5}>
            Género
          </Box>
          <Box bgColor="#F5F5F5" p={4}>
            Niños
          </Box>
          <Box bgColor="#F5F5F5" fontWeight={600} p={5}>
            Edad
          </Box>
          <Box bgColor="#FFFFFF" p={4}>
            Niños
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
