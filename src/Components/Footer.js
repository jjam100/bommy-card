import React from "react";
import styled from "styled-components";
import theme from "./theme";

const FooterWrapper = styled.footer`
  text-align: center;

  #devider {
    display: block;
    width: 100px;
    height: 3px;
    border: none;
    box-shadow: none;
    background-color: ${theme.color.beige};
  }

  #copyright {
    font-family: sans-serif;
    #instagram-link i {
      font-weight: 800;
      font-style: italic;

      &:hover {
        color: ${theme.color.beige};
      }
    }
  }
`;

const Footer = (props) => (
  <FooterWrapper>
    <hr id="devider" />
    <p id="copyright">
      Copyright (c) 2020 <a href="http://www.jjam100.xyz/">JJAM100</a>.
      <br />
      😻 with
      <a
        href="https://www.instagram.com/cat__bommy/"
        target="_blank"
        rel="noopener noreferrer"
        id="instagram-link"
      >
        <i>@cat_bommy</i>
      </a>
    </p>
  </FooterWrapper>
);

export default Footer;
