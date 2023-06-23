import React from "react";
import {Container, Stack, Button, Text} from "@chakra-ui/react";
import Swal from "sweetalert2";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Routes from "./routes";

const App: React.FC = () => {
  React.useEffect(() => {
    Swal.fire({
      title: "¡Atención!",
      text:
        "Esta web NO es el sitio oficial de Mercado Libre. Se trata de un challenge de Programación. NO es un intento de phishing hacia los usuarios que la visitan.",
      icon: "warning",
      confirmButtonText: "¡Entendido!",
      confirmButtonColor: "#3484fa",
      backdrop: "rgba(0, 0, 0, 0.8)",
    });
  }, []);

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
