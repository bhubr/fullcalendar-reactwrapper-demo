import React, { Component } from 'react';
import ExampleComponent from './ExampleComponent'



// Façon habituelle d'écrire un composant React
class App extends Component {
  render() {
    return (
      <div className="App">
        <ExampleComponent />
      </div>
    );
  }
}

export default App;
