// App.js
import React, { Component } from 'react';
import InfiniteScrolling from './components/InfiniteScrolling';
import './App.css';
import './sass/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InfiniteScrolling />
        <useFetchPhotos />
      </div>
    );
  }
}

export default App;
