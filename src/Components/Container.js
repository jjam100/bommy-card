// Components/Container.js
import styled from "styled-components";

const Container = styled.div`
  display: block;
  width: 310px;
  margin: 0 auto;

  @media screen and (min-width: 881px) {
    width: 880px;
  }
  @media screen and (max-width: 880px) and (min-width: 531px) {
    width: 530px;
  }
`;

export default Container;
