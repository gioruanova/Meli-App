import React from "react";
import {
  CardContainer,
  ProductName,
  FlexContainer,
  ProductImage,
  FlexContainer2,
  DiscountOrange,
  Separator,
  SeparatorContainer,
  ProductPrevAmount,
  ProductCurrentAmount,
  Envio,
  DiscountGreen,
  MostSell,
  Options,
} from "./Styles";
import Icons from "./Icons";
import { ProductsDetails } from "./Products";

export const Item = ({
  id,
  picture,
  title,
  discountOrange,
  amount,
  prevamount,
  discountGreen,
  mostsell,
  colors,
  truck,
  fastship1,
  fastship2,
  full,
}) => {
  return (
    <>
      <FlexContainer>
        <CardContainer>
          <ProductImage src={picture} alt={id}></ProductImage>
          <SeparatorContainer>
            {truck && <Icons name="enviohoy" />}

            {colors && <Options>{colors} colores</Options>}
            <Separator />
          </SeparatorContainer>

          {mostsell && <MostSell>mas vendido</MostSell>}

          <ProductPrevAmount>{prevamount}</ProductPrevAmount>

          <FlexContainer2>
            <ProductCurrentAmount>{amount}</ProductCurrentAmount>

            {discountOrange && (
              <DiscountOrange>
                {discountOrange}
                <span>% off</span>
              </DiscountOrange>
            )}

            {discountGreen && (
              <DiscountGreen>
                {discountGreen}
                <span>% off</span>
              </DiscountGreen>
            )}
          </FlexContainer2>
          <FlexContainer2>
            {fastship1 && <Envio>Llega hoy</Envio>}
            {fastship2 && <Envio>Llega gratis hoyy</Envio>}

            {full && <Icons name="fullenvio" />}
          </FlexContainer2>

          <ProductName>{title}</ProductName>
        </CardContainer>
      </FlexContainer>
    </>
  );
};

export default function ProductCard() {
  return ProductsDetails.map((e) => (
    <Item
      id={e.id}
      picture={e.picture}
      discountOrange={e.discountOrange}
      amount={e.amount}
      prevamount={e.prevamount}
      title={e.title}
      discountGreen={e.discountGreen}
      mostsell={e.mostsell}
      colors={e.colors}
      truck={e.truck}
      fastship1={e.fastship1}
      fastship2={e.fastship2}
      full={e.full}
    />
  ));
}
