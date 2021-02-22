import React, { Component } from 'react';
import MatchInfo from './components/MatchInfo';
import PlayerInfo from './components/PlayerInfo';
import Banner from './components/Banner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <Banner/>
        <MatchInfo/>
        <PlayerInfo/>
      </div>
    );
  }
}

export default App;
