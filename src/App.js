import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: "Ali",
    company: "YasNet"
  }

  handlePTag = () => {
    this.setState({ name: "Yaser", company: "Yaser-Work.Net" });
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Hi {this.state.name}, i work in {this.state.company}
          </p>
          <button onClick={this.handlePTag}>
            Click!
          </button>
        </header>
      </div>
    );
  }
}

export default App;
