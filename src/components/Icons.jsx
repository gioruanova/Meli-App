import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

const IconWrapper = styled.div`
margin:0;
border-radius:20rem;
background-color:white;

  svg {
    display: flex;
    align-items: center;
    fill: #00a650;
    width: 3.5rem;
    height: 1.5rem;
    stroke: #00a650;
  `;

const IconWrapper2 = styled(IconWrapper)`
position: absolute;
top:-0.5rem;
right:0.5rem;
z-index:9999;

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
