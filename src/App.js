// App.js
import React, { Component } from 'react';
import FetchFlicker from './components/fetchImages';
import InfiniteScrolling from './components/infiniteScrolling';
import './App.css';
import './sass/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchFlicker />
        <InfiniteScrolling />
        {/* <FavoritePhotos /> */}
      </div>
    );
  }
}

export default App;
