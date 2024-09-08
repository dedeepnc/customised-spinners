import React from "react";

import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const jump = keyframes`
  0%, 35%, 70%, 100% {
    transform: translateY(0);
  }
  35% {
    transform: translateY(-25px);
  }
`;
const StyledSVG = styled.svg`
  animation: ${jump} 2s linear infinite;
  color: ${(props) => props.color};
`;

const StyledCircle = styled.circle`
  animation: ${jump} 4s linear infinite;
  &:nth-child(1) {
    animation-delay: 0;
  }
  &:nth-child(2) {
    animation-delay: 1s;
  }
  &:nth-child(3) {
    animation-delay: 2s;
  }
`;
//delay between each child
function DotSpinner({ colors = [] }) {
  const defaultColors = ["#22333B", "#EAE0D5", "#C6AC8F"];

  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
    >
      <StyledCircle
        cx="23.5"
        cy="49.5"
        r="7.5"
        fill={colors[0] || defaultColors[0]}
      />
      <StyledCircle
        cx="49.5"
        cy="49.5"
        r="7.5"
        fill={colors[1] || defaultColors[1]}
      />
      <StyledCircle
        cx="75.5"
        cy="49.5"
        r="7.5"
        fill={colors[2] || defaultColors[2]}
      />
    </StyledSVG>
  );
}

DotSpinner.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default DotSpinner;
