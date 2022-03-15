import React from "react";
import { FooterComponent, Links, FooterFont } from "./Styles";

export const Footer = () => {
  return (
    <FooterComponent className="animate__animated animate__bounceInLeft animate__fast">
      <FooterFont>
        Developed by{" "}
        <Links
          href="https://www.giorgioruanova.com/"
          target="_blank"
          rel="noreferrer"
          title="Giorgio Ruanova"
          aria-label="Giorgio Ruanova"
        >
          Giorgio Ruanova
        </Links>
      </FooterFont>
    </FooterComponent>
  );
};
