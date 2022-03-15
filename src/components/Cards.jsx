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
  Truck,
} from "../components/Styles";

import test1 from "../img/test1.webp";
import test2 from "../img/test2.webp";
import test3 from "../img/test3.webp";
import Icons from "./Icons";

export const Cards = () => {
  return (
    <FlexContainer>
      {/* ---------------------CARD 1---------------------------- */}
      <CardContainer>
        <ProductImage src={test1} alt="productimage"></ProductImage>
        <SeparatorContainer>
          <Separator />
        </SeparatorContainer>
        <ProductPrevAmount>$7.000</ProductPrevAmount>

        <FlexContainer2>
          <ProductCurrentAmount>$5.099</ProductCurrentAmount>

          <Discount2>
            25%
            <span> off</span>
          </Discount2>
        </FlexContainer2>
        <FlexContainer2>
          <Envio>Llega hoy</Envio>

          <Icons name="fullenvio" />
        </FlexContainer2>

        <ProductName>Fumigadora de 2 cuerpos desmotanble</ProductName>
      </CardContainer>

      {/* ---------------------CARD 2---------------------------- */}
      <CardContainer>
        <ProductImage src={test2} alt="productimage"></ProductImage>

        <SeparatorContainer>
          <Icons name="enviohoy" />
          <Separator />
        </SeparatorContainer>

        <ProductPrevAmount>$7.000</ProductPrevAmount>

        <FlexContainer2>
          <ProductCurrentAmount>$5.099</ProductCurrentAmount>
          <Discount1>
            20%
            <span> off</span>
          </Discount1>
        </FlexContainer2>
        <ProductName>Fumigadora de 2 cuerpos desmotanble</ProductName>
      </CardContainer>

      {/* ---------------------CARD 3---------------------------- */}
      <CardContainer>
        <ProductImage src={test3} alt="productimage"></ProductImage>
        <SeparatorContainer>
          <Truck>3 colores</Truck>
          <Separator />
        </SeparatorContainer>
        <MostSell>Mas vendido</MostSell>
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
      </CardContainer>
    </FlexContainer>
  );
};
