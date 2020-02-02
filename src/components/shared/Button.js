import styled from "styled-components";

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
`;

export default Button;
