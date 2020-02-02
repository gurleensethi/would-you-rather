import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  background: blueviolet;
  color: white;
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  transition: 0.3s;
  box-shadow: 1px 1px 5px rgb(220, 220, 220);

  &:hover {
    cursor: pointer;
    box-shadow: 1px 5px 15px rgb(200, 200, 200);
  }

  ${props => css`
    width: ${props.width}px;
  `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      box-shadow: none;

      &:hover {
        cursor: auto;
        box-shadow: none;
      }
    `}
`;

export default Button;
