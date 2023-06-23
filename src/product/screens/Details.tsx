import React from "react";

import {Product} from "../types";
import mock from "../mock";
import Path from "../../components/Path";
import MainContainer from "../../components/MainContainer";
import CarouselDetail from "../../components/CarouselDetail";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return (
    <>
      <Path />
      <MainContainer />
      <CarouselDetail slides={5} />
    </>
  );
};

export default DetailsScreen;
