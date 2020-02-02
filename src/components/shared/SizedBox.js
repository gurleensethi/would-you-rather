import styled, { css } from "styled-components";

const SizedBox = styled.div`
  display: inline-block;
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
`;

export default SizedBox;
