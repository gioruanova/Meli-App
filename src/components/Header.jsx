import React from "react";
import { HeaderComponent, HeaderImage2, Links } from "../components/Styles";

import ml from "../img/ml.png";

export const Header = () => {
  return (
    <HeaderComponent className="animate__animated animate__bounceInDown animate__fast">
      <Links
        href="https://www.mercadolibre.com.ar/"
        target="_blank"
        rel="noreferrer"
        title="Mercado Libre"
        aria-label="Mercado Libre"
      >
        <HeaderImage2 src={ml}></HeaderImage2>
      </Links>
    </HeaderComponent>
  );
};
