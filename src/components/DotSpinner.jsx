import React from "react";

import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const jump = keyframes`
	0%, 60%, 100% {
		transform: initial;
	}

	30% {
		transform: translateY(-15px);
	}
  
`;
const StyledSVG = styled.svg`
  color: ${(props) => props.color};
`;

const StyledCircle = styled.circle`
  animation: ${jump} ${(props) => props.duration} 1.3s linear infinite;

  &:nth-child(1) {
    animation-delay: 0;
  }
  &:nth-child(2) {
    animation-delay: -1.1s;
  }
  &:nth-child(3) {
    animation-delay: -0.9s;
  }
`;
//delay between each child
function DotSpinner({
  colors = ["#22333B", "#EAE0D5", "#C6AC8F"],
  count = colors.length,

  radius = "8",
}) {
  const dots = Array.from({ length: count });

  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width={count * 20 * 20}
      height="100"
      viewBox="0 0 100 100"
      fill="none"
    >
      {dots.map((dot, index) => (
        <StyledCircle
          cx={(index + 1) * 20}
          cy="49.5"
          r={radius}
          fill={colors[index]}
          key={index}
        />
      ))}
    </StyledSVG>
  );
}

DotSpinner.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  duration: PropTypes.string,
  width: PropTypes.number,
};

export default DotSpinner;
