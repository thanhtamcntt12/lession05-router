import React, { Component } from 'react';
import Nav from '../Nav/Nav';

import Footer from '../Footer/Footer';
import RouterURL from '../RouterURL/RouterURL';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav></Nav>
        <div className="container" id="main-content">
          <RouterURL>

          </RouterURL>
          <Footer></Footer>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
