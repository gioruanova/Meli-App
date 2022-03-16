import React from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { Background, BodyTitle } from "../components/Styles";
import { FlexContainer } from "../components/Styles";

export const WebLayout = () => {
  return (
    <Background>
      <Header />
      <BodyTitle className="animate__animated animate__bounceIn animate__fast">Hot sale!!!</BodyTitle>
      <FlexContainer>
        <ProductCard />
      </FlexContainer>
      <Footer />
    </Background>
  );
};
