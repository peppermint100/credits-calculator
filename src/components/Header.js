import React from "react";
import styled from "styled-components";

function Header({ content }) {
  return (
    <>
      <Title>{content}</Title>
    </>
  );
}

const Title = styled.h1`
  text-align: center;
`;

export default Header;
