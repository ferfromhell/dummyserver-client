import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  componentDidMount() {
    fetch("/test")
    .then(res => {
      if (!res.ok) { throw res }
      console.log("1st res");
      console.log(res);
      return res.json()
      })
    .then( (result => {
      console.log("2st res");
      console.log(result);
      this.setState({ servStat: result.text})
    }))
    .catch(err => console.log(err))
  }
  render() {
    const {servStat} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { servStat }
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
        </header>
      </div>
    );
  }
}

export default App;
