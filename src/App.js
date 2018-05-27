import React, { Component } from 'react';
import HomePage from './componets/hompage/HomePage'
import Contenido from './componets/contenido/Contenido'
import { Helmet } from 'react-helmet'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Helmet>
              <title>Asturias</title>
          </Helmet>
          <HomePage/>
          <Contenido/>
      </div>
    );
  }
}

export default App;
