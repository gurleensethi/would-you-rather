import styled, { css } from "styled-components";

const Divider = styled.div`
  ${({ width, height, vMargin, hMargin }) => css`
    width: ${width}px;
    height: ${height}px;
    background-color: lightgrey;
    margin: ${vMargin || 0}px ${hMargin || 0}px;
  `}
`;

export default Divider;
