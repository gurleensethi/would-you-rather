import React from "react";
import styled, { css } from "styled-components";

const Avatar = styled(({ src, className }) => (
  <img src={src} alt="user avatar" className={className} />
))`
  ${({ size }) => css`
    border-radius: 50%;
    background: rgb(240, 240, 240);
    width: ${size || 50}px;
    height: ${size || 50}px;
    margin: 0;
    text-align: center;
    line-height: ${size || 50}px;
  `}
`;

export default Avatar;
