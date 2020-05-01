// Components/GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const globalStyles = createGlobalStyle`
  ${reset};

  ${"" /* 폰트 cdn*/}

  @import url(${theme.font.cdn});

  html{
    ${"" /* 기본 폰트사이즈 지정 : rem 사용 */}
    font-size: 16px;

    ${"" /* 윈도우에서 렌더링 시, 웹폰트가 깔끔하게 보이게 하기 위한 설정 */}
    -webkit-text-size-adjust: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  body{
    font-family: ${theme.font.family};
    background-color: ${theme.color.white};
  }

  ${"" /* 타이포 */}

  h1{
    font-size: 3rem;
    font-weight: 700;
    color: ${theme.color.black};
  }

  h2{
    font-size: 2.3rem;
    font-weight: 700;
    color: ${theme.color.black};
  }

  h3{
    font-size: 1.5rem;
    font-weight: 400;
    color: ${theme.color.black};
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    color: ${theme.color.black};
    line-height: 1.2rem;
  }

  small {
    font-size: 0.8rem;
    font-weight: 300;
    color: ${theme.color.grayD};
  }

  a {
    text-decoration: none;
    color: ${theme.color.grayD};
  }

`;

export default globalStyles;
