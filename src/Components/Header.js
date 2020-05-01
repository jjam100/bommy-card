// Components/Header.js
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  text-align: center;

  #title {
    margin-top: 10vh;
    margin-bottom: 10px;
  }

  #description {
    margin-top: 6vh;
  }
`;

const Header = (props) => (
  <HeaderWrapper>
    <h1 id="title">봄이카드</h1>
    <span id="version">ver.1</span>
    <p id="description">봄이로 카드를 만들어보세요.</p>
  </HeaderWrapper>
);

export default Header;
