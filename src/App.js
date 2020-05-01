// src/App.js
import React from "react";
import GlobalStyles from "./Components/GlobalStyles";

import Container from "./Components/Container";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <GlobalStyles />
    </>
  );
}

export default App;
