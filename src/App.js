// src/App.js
import React from "react";
import GlobalStyles from "./Components/GlobalStyles";

import firebase from "./util/fire";

import Container from "./Components/Container";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  firebase.analytics();
  return (
    <>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
      <GlobalStyles />
    </>
  );
}

export default App;
