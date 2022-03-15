import React from "react";
import {
  HeaderComponent,
  HeaderImage1,
  HeaderImage2,
  Links,
} from "../components/Styles";
import estudio from "../img/estudio.png";
import ml from "../img/ml.png";

export const Header = () => {
  return (
    <HeaderComponent>
      <Links
        href="https://www.mercadolibre.com.ar/"
        target="_blank"
        rel="noreferrer"
        title="Mercado Libre"
        aria-label="Mercado Libre"
      >
        <HeaderImage2 src={ml}></HeaderImage2>
      </Links>

      <Links
        href="https://www.estudioindex.com.ar/"
        target="_blank"
        rel="noreferrer"
        title="Estudio Index"
        aria-label="Estudio Index"
      >
        <HeaderImage1 src={estudio}></HeaderImage1>
      </Links>
    </HeaderComponent>
  );
};
