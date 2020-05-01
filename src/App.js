// src/App.js
import React from "react";
import GlobalStyles from "./Components/GlobalStyles";

import Container from "./Components/Container";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Footer />
      </Container>
      <GlobalStyles />
    </>
  );
}

export default App;
