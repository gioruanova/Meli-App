import { isMobile } from "react-device-detect";
import styled from "styled-components";

export const HeaderComponent = styled.div`
  display: flex;
  background-color: #fff159;
  justify-content: center;
  text-align: start;
  align-items: center;
`;

export const FooterComponent = styled(HeaderComponent)`
  display: flex;
  background-color: #fff159;
  justify-content: center;
  text-align: start;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  color: #333;
  padding: 1rem;
  margin: 0;
`;
export const HeaderImage1 = styled.img`
  width: auto;
  height: 5rem;
`;
export const HeaderImage2 = styled(HeaderImage1)`
  height: 2rem;
`;

export const FooterFont = styled.h1`
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #333;
  padding: 1rem;
  margin: 0;
  font-style: italic;
  font-family: "Roboto", sans-serif;
`;
export const Links = styled.a`
  font-size: 0.9rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: 1s;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  &:hover {
    color: #7e7e9c;
  }
`;

export const Background = styled.div`
  background-color: #e7e7e7;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  position: relative;
`;

// ----------------

export const CardContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  margin: 2rem 1rem;
  width: auto;
  border-radius: 0.3rem;
  height: auto;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    box-shadow: rgb(98 98 98 / 25%) 10px 22px 22px,
      rgb(109 109 109 / 24%) 18px 20px 42px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};

  justify-content: center;
  text-align: start;
`;

export const FlexContainer2 = styled(FlexContainer)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: start;
  align-items: center;
  justify-content: start;
`;

export const ProductImage = styled.img`
  width: auto;
  height: 8rem;
  margin-bottom: 1rem;
  align-self: center;
`;
export const SeparatorContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Separator = styled.hr`
  width: 100%;
  position: relative;
  border: 1px solid #e2d7d7;
`;

export const ProductPrevAmount = styled.p`
  text-transform: capitalize;
  font-size: 0.8rem;
  margin: 0;
  color: grey;
  text-decoration: line-through;
  font-family: "Roboto", sans-serif;
`;

export const ProductCurrentAmount = styled.p`
  text-transform: capitalize;
  font-size: 1.5rem;
  margin: 0;
  padding-right: 1rem;
  font-family: "Roboto", sans-serif;
`;

export const Discount1 = styled.p`
  color: #00a650;
  text-transform: uppercase;
  font-size: 1rem;
  margin: 0;
  border-radius: 0.2rem;
  width: fit-content;
  font-family: "Roboto", sans-serif;
`;
export const Discount2 = styled(Discount1)`
  color: white;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin: 0;
  width: 2rem;
  text-align: center;
  background-color: #ea710f;
  padding: 0.1rem 0.6rem;
  word-break: break-word;
  font-family: "Roboto", sans-serif;
`;

export const MostSell = styled(Discount1)`
  color: white;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin: 0;
  text-align: center;
  background-color: #ea710f;
  padding: 0.1rem 0.2rem;
  word-break: break-word;
  font-family: "Roboto", sans-serif;
`;

export const Envio = styled(Discount1)`
  color: white;
  text-transform: none;
  font-size: 0.8rem;
  margin: 0.5rem 0;
  background-color: #00a650;
  padding: 0.1rem 0.5rem;
  border-radius: 0.2rem;
`;



export const ProductName = styled.p`
  text-transform: capitalize;
  font-size: 0.8rem;
  margin: 0.5rem 0;
  color: grey;
  font-family: "Roboto", sans-serif;
`;
