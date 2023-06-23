import React from "react";
import {
  Container,
  Stack,
  Box,
  VStack,
  HStack,
  Image,
  Text,
  Input,
  StackDivider,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import {AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai";
import {SlLocationPin, SlBell} from "react-icons/sl";
import {BiUser, BiChevronDown} from "react-icons/bi";
import {Menu, MenuButton, MenuList, MenuItem, MenuGroup} from "@chakra-ui/react";

import logo from "../../assets/MyLogo.png";

const Navbar: React.FC = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" py="0.375rem">
        <Container maxWidth="container.xl" paddingX={0}>
          <VStack alignItems="flex-start">
            <HStack justifyContent="space-between" spacing="75px" w="100%">
              <Image src={logo} />
              <HStack
                background="white"
                borderRadius="3px"
                boxShadow="md"
                divider={<StackDivider />}
                flex={2}
                px="15px"
                py="10px"
              >
                <Input placeholder="Buscar productos, marcas y más..." variant="unstyled" />
                <Icon as={AiOutlineSearch} color="gray.400" fontSize="1.4rem" />
              </HStack>
              <Image
                flex={1}
                src="https://http2.mlstatic.com/D_NQ_773701-MLA54334638216_032023-OO.webp"
                w="340px"
              />
            </HStack>
            <HStack justifyContent="space-between" spacing="40px" w="100%">
              <HStack cursor="pointer">
                <Icon as={SlLocationPin} fontSize="23px" />
                <VStack alignItems="flex-start" spacing={-1}>
                  <Text variant="light">Enviar a Lucas</Text>
                  <Text variant="semidark">Emiliano Martínez 1010</Text>
                </VStack>
              </HStack>
              <HStack flex={2} spacing="15px">
                <Menu isOpen={isOpen}>
                  <MenuButton
                    _hover={{color: "blackAlpha.900"}}
                    color="blackAlpha.600"
                    fontSize="14px"
                    onClick={onOpen}
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                  >
                    Categorías
                    <Icon as={BiChevronDown} marginInlineStart="2px" />
                  </MenuButton>
                  <MenuList
                    backgroundColor="#333"
                    border="none"
                    color="white"
                    marginLeft="-5rem"
                    marginTop="6px"
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                  >
                    <Stack justifyContent="center" paddingY="1em">
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Vehiculos
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Inmuebles
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Supermercado
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Tecnología
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Hogar y Muebles
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Electrodomésticos
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Herramientas
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Construccion
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Deportes y Fitness
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Accesorios para Vehículos
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Moda
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Juegos y Juguetes
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Bebés
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Belleza y Cuidado Personal
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Salud y Equipamento Médico
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Hogar, Muebles y Jardín
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Agro
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Productos Sustentables
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Servicios
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Más vendidos
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Tiendas oficiales
                      </MenuItem>
                      <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                        Ver más categorías
                      </MenuItem>
                    </Stack>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuGroup>
                    <Stack color="blackAlpha.600" direction="row" fontSize="14px" spacing={4}>
                      <MenuButton _hover={{color: "blackAlpha.900"}}>Ofertas</MenuButton>
                      <MenuButton _hover={{color: "blackAlpha.900"}}>Historial</MenuButton>
                      <MenuButton _hover={{color: "blackAlpha.900"}}>Supermercado</MenuButton>
                      <MenuButton _hover={{color: "blackAlpha.900"}}>Moda</MenuButton>
                      <MenuButton _hover={{color: "blackAlpha.900"}}>Vender</MenuButton>
                      <MenuButton _hover={{color: "blackAlpha.900"}}>Ayuda</MenuButton>
                    </Stack>
                  </MenuGroup>
                </Menu>
              </HStack>
              <Menu>
                <MenuGroup>
                  <HStack color="blackAlpha.800" fontSize="14px" spacing={5}>
                    <MenuButton _hover={{color: "blackAlpha.900"}}>
                      <HStack spacing={1}>
                        <Icon as={BiUser} fontSize="24px" marginRight="8px" />
                        <HStack spacing={0}>
                          <Text>Lucas</Text>
                          <Icon as={BiChevronDown} marginInlineStart="5px" />
                        </HStack>
                      </HStack>
                    </MenuButton>
                    <MenuButton _hover={{color: "blackAlpha.900"}}>Mis compras</MenuButton>
                    <MenuButton _hover={{color: "blackAlpha.900"}}>
                      Favoritos
                      <Icon as={BiChevronDown} />
                    </MenuButton>
                    <Icon as={SlBell} fontSize="20px" fontWeight="light" />
                    <Icon as={AiOutlineShoppingCart} fontSize="24px" />
                  </HStack>
                </MenuGroup>
              </Menu>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Stack>
  );
};

export default Navbar;
