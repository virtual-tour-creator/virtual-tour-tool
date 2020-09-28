import React, { Component } from 'react';
import './App.css';
import PublicLibrary from './components/PublicLibrary';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return ( 
      <div className='App'>
        <PublicLibrary />
    </div>
    );
  }
}

export default App;