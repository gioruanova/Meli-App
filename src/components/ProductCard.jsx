import React from "react";
import {
  CardContainer,
  ProductName,
  ProductCurrentAmount,
  ProductPrevAmount,
  FlexContainer,
  ProductImage,
  Discount1,
  FlexContainer2,
  Discount2,
  Envio,
  Separator,
  SeparatorContainer,
  MostSell,
} from "./Styles";

import test1 from "../img/test1.webp";
import Icons from "./Icons";

export const ProductCard = () => {
  return (
    <FlexContainer>
      <CardContainer>
        <ProductImage src={test1} alt="productimage"></ProductImage>
        <SeparatorContainer>
          <Separator />
        </SeparatorContainer>

        <FlexContainer2>
          <Discount2>
            25%
            <span> off</span>
          </Discount2>
        </FlexContainer2>

        <ProductName>Fumigadora de 2 cuerpos desmotable</ProductName>
      </CardContainer>
    </FlexContainer>
  );
};
