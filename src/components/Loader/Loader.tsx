import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 2;
`;

export default function Loader() {
  return (
    <StyledWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={38}
        height={38}
        stroke="#fff"
      >
        <script />
        <g
          transform="translate(1 1)"
          strokeWidth={2}
          fill="none"
          fillRule="evenodd"
        >
          <circle strokeOpacity={0.5} cx={18} cy={18} r={18} />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </StyledWrapper>
  );
}
