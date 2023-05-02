import React from "react";
import {VStack, HStack, Text, StackDivider, Link} from "@chakra-ui/react";
import {AiOutlineRight} from "react-icons/ai";

import get from "../../product/mock";

const Path: React.FC = () => {
  const producto = get.product;

  return (
    <HStack alignItems="flex-end" fontSize="14px" justifyContent="space-between" mt=".5rem">
      <VStack alignItems="flex-start" spacing={4}>
        <HStack>
          <Text fontWeight="800">También puede interesarte:</Text>
          <HStack
            divider={
              <StackDivider
                borderColor="blackAlpha.500"
                h="5px"
                pos="relative"
                top="9px"
                transform="rotate(90deg)"
              />
            }
          >
            {producto.suggestions.map((x: string) => {
              return (
                <Link key={x} variant="unstyled">
                  {x}
                </Link>
              );
            })}
          </HStack>
        </HStack>
        <HStack
          divider={<StackDivider borderColor="blackAlpha.500" h="12px" pos="relative" top="5px" />}
        >
          <Link variant="unstyled">Volver</Link>
          <HStack spacing={1}>
            <Link>Deportes y Fitness</Link>
            <AiOutlineRight color="rgba(0,0,0,.7)" fontSize="12px" />
            <Link>Fútbol</Link>
            <AiOutlineRight color="rgba(0,0,0,.7)" fontSize="12px" />
            <Link>Ropa y calzado</Link>
            <AiOutlineRight color="rgba(0,0,0,.7)" fontSize="12px" />
            <Link>Botines</Link>
          </HStack>
        </HStack>
      </VStack>
      <HStack
        divider={<StackDivider borderColor="blackAlpha.500" h="12px" pos="relative" top="5px" />}
      >
        <Link>Compartir</Link>
        <Link>Vender uno igual</Link>
      </HStack>
    </HStack>
  );
};

export default Path;
