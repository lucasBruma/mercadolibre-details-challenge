import {Stack, Text, VStack, Link, HStack} from "@chakra-ui/react";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

import {ProductPicture} from "../../product/types";
import infoCarrousel from "../../product/prodsCarrousel";
import {CarrouselCard} from "../Carrousel/CarrouselCard";

//Data Carrousel

// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "../styles/Carrouselstyle.css";
import "./CarrouselStyles.css";

// import required modules
interface CarouselProps {
  slides: number;
}

const CarouselDetail = ({slides}: CarouselProps): JSX.Element => {
  const infoCards = infoCarrousel.infoCarrousel.pictures;

  return (
    <VStack mt={6} w={{base: "150px", md: 768, lg: "full"}}>
      <Text fontSize={24} ml={30} w={"full"}>
        Quienes compraron este producto también compraron{" "}
      </Text>
      <Stack marginTop={"30px !important"} overflowX="hidden" w="100%">
        <Swiper
          loop={true}
          modules={[Navigation]}
          navigation={true}
          slidesPerView={slides}
          spaceBetween={0}
          width={1200}
        >
          {infoCards?.map((info: ProductPicture) => (
            <SwiperSlide key={info.id}>
              <CarrouselCard infoCards={[]} infoParaElCard={info} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </VStack>
  );
};

export default CarouselDetail;
