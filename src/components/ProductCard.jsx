import React, { useEffect, useState } from "react";
import {
  CardContainer,
  ProductName,
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

import axios from "axios";

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
  const totalDisc = Math.trunc(100 - (amount / prevamount) * 100);

  return (
    <>
      <CardContainer className="animate__animated animate__bounceIn animate__fast">
        <ProductImage src={picture} alt={id}></ProductImage>
        <SeparatorContainer>
          {truck && <Icons name="enviohoy" />}

          {colors && <Options>{colors} colores</Options>}
          <Separator />
        </SeparatorContainer>

        {mostsell >= 5200 && <MostSell>más vendido</MostSell>}

        {prevamount && (
          <ProductPrevAmount>${Math.trunc(prevamount)}</ProductPrevAmount>
        )}

        <FlexContainer2>
          <ProductCurrentAmount>${Math.trunc(amount)}</ProductCurrentAmount>

          {(prevamount && totalDisc >= 25 && (
            <DiscountOrange>
              {Math.ceil(totalDisc)}
              <span>% off</span>
            </DiscountOrange>
          )) ||
            (prevamount && (
              <DiscountGreen>
                {totalDisc}
                <span>% off</span>
              </DiscountGreen>
            ))}
        </FlexContainer2>
        <FlexContainer2>
          {!truck && <Envio>llega hoy</Envio>}
          {truck && <Envio>llega gratis hoy</Envio>}

          {!truck && <Icons name="fullenvio" />}
        </FlexContainer2>

        <ProductName>{title}</ProductName>
      </CardContainer>
    </>
  );
};

export function ProductCard() {
  const [data, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.mercadolibre.com/sites/MLA/search?q=oferta&limit=13")
      .then((res) => {
        setItem(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return data
    .slice(1, 4)
    .map((data) => (
      <Item
        key={data.id}
        id={data.id}
        title={data.title}
        picture={data.thumbnail}
        amount={data.price}
        prevamount={data.original_price}
        mostsell={data.sold_quantity}
        colors={""}
        truck={data.shipping.free_shipping}
        fastship1={data.shipping.local_pick_up}
        fastship2={data.shipping.local_pick_up}
        full={data.shipping.store_pick_up}
      />
    ));
}
