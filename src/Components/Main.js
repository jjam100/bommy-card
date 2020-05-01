import React, { useState } from "react";
import styled from "styled-components";

import theme from "./theme";
import ShareIcon from "./share.svg";

import Card from "./Card";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;

  #card-text-input {
    margin: 5vh 0px;
    padding: 5px;
    width: 245px;
    font-size: 1rem;
    height: 6rem;
    border: 1px solid black;
    font-family: ${theme.font.family};
    outline: none;

    @media screen and (min-width: 880px) {
      margin: 0px 0px 0px 20px;
    }
    @media screen and (max-width: 880px) and (min-width: 530px) {
      margin: 0px 0px 0px 20px;
    }
  }
`;

const ShareButton = styled.button`
  flex-basis: 0;
  position: absolute;
  margin-top: 330px;
  margin-left: 120px;

  outline: none;
  cursor: pointer;

  width: 50px;
  height: 50px;
  border: 1px solid black;
  background-color: ${theme.color.white};
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 880px) {
    margin-left: -10px;
  }
  @media screen and (max-width: 880px) and (min-width: 530px) {
    margin-left: -15px;
  }

  img {
    margin-left: -3px;
  }
`;

const Main = (props) => {
  const [cardText, setCardText] = useState();
  const textCheck = (text) => {
    setCardText(text);
  };
  return (
    <MainWrapper>
      <Card text={cardText} />
      <ShareButton id="share-button">
        <img src={ShareIcon} alt="share" />
      </ShareButton>
      <textarea
        col="5"
        onChange={(e) => textCheck(e.target.value)}
        id="card-text-input"
        placeholder="글을 입력해 주세요."
      ></textarea>
    </MainWrapper>
  );
};

export default Main;