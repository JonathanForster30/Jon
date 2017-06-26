import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dope from './components/Dope';
import Counter from './components/Counter';

class App extends Component {
  render() {
    const arr = [1,2,3,4,5];
    const comps = arr.map((number) => <Dope data={number} />);
    return (
      <div>
      Hello, world
    { comps }
    <Counter/>
      </div>
    );
  }
}

export default App;
