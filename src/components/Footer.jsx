import React from "react";
import { HeaderComponent, Links, FooterFont } from "./Styles";

export const Footer = () => {
  return (
    <HeaderComponent>
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
    </HeaderComponent>
  );
};
