import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

const IconWrapper = styled.div`
padding: 0rem 0.2rem;

  svg {
    display: flex;
    align-items: center;
    fill: #00a650;
    width: 3.5rem;
    height: 1.5rem;
    stroke: #00a650;
  `;

const IconWrapper2 = styled(IconWrapper)`
padding: 0rem 0.2rem;
  svg {
     width: 1.5rem;
     height: 1.5rem;
     fill: white;
     padding:0.2rem;
     border: 2px solid #e2d7d7;
     border-radius:20rem;
  `;

export default function Icons({ name }) {
  switch (name) {
    case "fullenvio":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/_icons/full.svg" />
        </IconWrapper>
      );
    case "enviohoy":
      return (
        <IconWrapper2>
          <ReactSVG src="_assets/_icons/truck.svg" />
        </IconWrapper2>
      );

    default:
      return (
        <IconWrapper>
          <ReactSVG src="_icons/error.svg" />
        </IconWrapper>
      );
  }
}
