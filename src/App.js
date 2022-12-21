import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monters: [
        {
          id: '1212a',
          name: 'Linda'
        },
        {
          id: '1213b',
          name: 'Frank'
        },
        {
          id: '1214c',
          name: 'Jack'
        },
        {
          id: '1215d',
          name: 'Daxty'
        }
      ]
    };
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.monters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
