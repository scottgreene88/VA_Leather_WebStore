import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

import Header from "./components/Header";
import Container from "./components/Container";

const App = () => (
    <Router>
      <div>
        <Header />
        <Container />
      </div>
    </Router>
  );
  
  render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
