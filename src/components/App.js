import React, { Component } from 'react'
import LoadVideo from '../containers/LoadVideo'
// import VideoList from '../containers/VideosList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoadVideo />
        {/* <VideoList /> */}
      </div>
    );
  }
}

export default App;
