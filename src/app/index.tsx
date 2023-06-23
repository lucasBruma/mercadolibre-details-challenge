import React from "react";
import {Container, Stack, Button, Text} from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Routes />
      </Container>
      <Footer />
    </>
  );
};

export default App;
