import {Stack, Text, VStack, Link, HStack} from "@chakra-ui/react";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

import {ProductPicture} from "../../product/types";
import infoCarrousel from "../../product/prodsCarrousel";

import {CarrouselCard} from "./CarrouselCard";

//Data Carrousel

// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "../styles/Carrouselstyle.css";
import "./CarrouselStyles.css";

// import required modules

const Carrousel: React.FC = () => {
  const infoCards = infoCarrousel.infoCarrousel.pictures;

  return (
    <VStack mt={6} w={{base: "150px", md: 768, lg: "full"}}>
      <Text fontSize={24} ml={30} w={"full"}>
        Publicaciones del vendedor
      </Text>
      <Stack marginTop={"30px !important"} overflowX="hidden" w={800}>
        <Swiper
          loop={true}
          modules={[Navigation]}
          navigation={true}
          slidesPerView={3}
          spaceBetween={0}
          width={780}
        >
          {infoCards?.map((info: ProductPicture) => (
            <SwiperSlide key={info.id}>
              <CarrouselCard infoCards={[]} infoParaElCard={info} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
      <HStack
        alignItems={"start"}
        marginBottom={"30px !important"}
        paddingLeft={5}
        paddingTop={5}
        w={"full"}
      >
        <Link fontSize={14}>Ver más publicaciones del vendedor</Link>
      </HStack>
    </VStack>
  );
};

export default Carrousel;
