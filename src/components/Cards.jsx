import React from "react";
import {
  CardContainer,
  ProductName,
  ProductCurrentAmount,
  ProductPrevAmount,
  FlexContainer,
  ProductImage,
  Separator,
  Discount1,
  FlexContainer2,
  Discount2,
  Envio,
  Vendido,
} from "../components/Styles";

import test from "../img/test.webp";

export const Cards = () => {
  return (
    <FlexContainer>
      {/* ---------------------CARD 1---------------------------- */}
      <CardContainer>
        <ProductImage src={test} alt="productimage"></ProductImage>

        <Separator>
          <ProductPrevAmount>$7.000</ProductPrevAmount>

          <FlexContainer2>
            <ProductCurrentAmount>$5.099</ProductCurrentAmount>

            <Discount2>
              25%
              <span> off</span>
            </Discount2>
          </FlexContainer2>
          <Envio>Llega hoy</Envio>
          <ProductName>Fumigadora de 2 cuerpos desmotanble</ProductName>
        </Separator>
      </CardContainer>

      {/* ---------------------CARD 2---------------------------- */}
      <CardContainer>
        <ProductImage src={test} alt="productimage"></ProductImage>

        <Separator>
          <ProductPrevAmount>$7.000</ProductPrevAmount>

          <FlexContainer2>
            <ProductCurrentAmount>$5.099</ProductCurrentAmount>
            <Discount1>
              20%
              <span> off</span>
            </Discount1>
          </FlexContainer2>
          <ProductName>Fumigadora de 2 cuerpos desmotanble</ProductName>
        </Separator>
      </CardContainer>

      {/* ---------------------CARD 3---------------------------- */}
      <CardContainer>
        <ProductImage src={test} alt="productimage"></ProductImage>

        <Separator>
          <Vendido>Mas vendido</Vendido>
          <ProductPrevAmount>$7.000</ProductPrevAmount>

          <FlexContainer2>
            <ProductCurrentAmount>$5.099</ProductCurrentAmount>
            <Discount1>
              21%
              <span> off</span>
            </Discount1>
          </FlexContainer2>
          <Envio>Llega gratis hoy</Envio>
          <ProductName>Fumigadora de 2 cuerpos desmotanble</ProductName>
        </Separator>
      </CardContainer>
    </FlexContainer>
  );
};
