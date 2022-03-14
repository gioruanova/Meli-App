import { isMobile } from "react-device-detect";
import styled from "styled-components";

export const HeaderComponent = styled.div`
  background-color: #fff159;
  text-align: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  color: #333;
  padding: 1rem;
  margin: 0;
`;

export const FooterFont = styled.h1`
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #333;
  padding: 1rem;
  margin: 0;
  font-style: italic;
`;
export const Links = styled.a`
  font-size: 0.9rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: 1s;
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
  height: 32rem;
  transition: 2s;
  &:hover {
    cursor: pointer;
    
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

export const Separator = styled.div`
  border-top: 0.5px solid #e2d7d7;
  padding: 1rem 0;
  width: 100%;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  margin-bottom: 1rem;
  align-self: center;
`;

export const ProductPrevAmount = styled.p`
  text-transform: capitalize;
  font-size: 0.8rem;
  margin: 0;
  color: grey;
  text-decoration: line-through;
`;

export const ProductCurrentAmount = styled.p`
  text-transform: capitalize;
  font-size: 1.5rem;
  margin: 0;
  padding-right: 1rem;
`;

export const Discount1 = styled.p`
  color: #00a650;
  text-transform: uppercase;
  font-size: 1rem;
  margin: 0;
  border-radius: 0.2rem;
  width: fit-content;
`;
export const Discount2 = styled(Discount1)`
  color: white;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin: 0;
  background-color: #ea710f;
  padding: 0.2rem 0.2rem;
  word-break: break-word;
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

export const Vendido = styled(Discount2)`
  text-transform: uppercase;
  background-color: #ea710f;
  padding: 0.2rem 0.2rem;
  font-size: 0.7rem;
  margin: 1rem 0;
`;

export const ProductName = styled.p`
  text-transform: capitalize;
  font-size: 0.8rem;
  margin: 0;
  color: grey;
`;
