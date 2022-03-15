import React from "react";

import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { Background } from "../components/Styles";


export const WebLayout = () => {
  return (
    <Background>
      <Header />
      <Cards />
      <ProductCard/>
      <Footer/>
    </Background>
  );
};
