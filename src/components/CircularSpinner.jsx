import React from "react";
import PropTypes from "prop-types";

//import style from style component
import styled, { keyframes } from "styled-components";

const rotate = (direction) => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(${direction});
  }
`;

const StyledSVG = styled.svg`
  animation: ${(props) => rotate(props.direction)} ${(props) => props.speed}
    linear infinite;
  color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
`;

function CircularSpinner({
  color = "#D97292",
  opacity = 0.5,
  speed = "2s",
  direction = "-360deg",
  size = "100",
}) {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      speed={speed}
      direction={direction}
      viewBox="0 0 110 110"
    >
      <path
        fill={color}
        d="M110 55c0 30.376-24.624 55-55 55S0 85.376 0 55 24.624 0 55 0s55 24.624 55 55Zm-92.85 0c0 20.904 16.946 37.85 37.85 37.85S92.85 75.904 92.85 55 75.904 17.15 55 17.15 17.15 34.096 17.15 55Z"
        opacity={opacity}
      />
      <path
        fill={color}
        d="M101.425 55c4.736 0 8.643-3.862 7.908-8.54A54.999 54.999 0 0 0 63.54.667C58.862-.068 55 3.84 55 8.575c0 4.736 3.887 8.478 8.502 9.542a37.843 37.843 0 0 1 18.262 10.119 37.85 37.85 0 0 1 10.119 18.262C92.947 51.113 96.689 55 101.425 55Z"
      />
    </StyledSVG>
  );
}
CircularSpinner.propTypes = {
  color: PropTypes.string,

  opacity: PropTypes.number,
  speed: PropTypes.string,

  direction: PropTypes.string,
  size: PropTypes.string,
};

export default CircularSpinner;
