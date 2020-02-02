import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 40px;
`;

class NotFound extends React.Component {
  render() {
    return <Container>404 Page Not Found!</Container>;
  }
}

export default NotFound;
