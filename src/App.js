import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(
        (users) => this.setState(
          () => { return { monsters: users }; },
          () => { console.log(this.state); }
        )
      );
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id} style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
                <h3 style={{ margin: '0px 4px 0px 24px', fontWeight: '300' }}>{monster.id + ' - '}</h3>
                <h2 style={{ margin: '0px 4px 0px 0px', fontWeight: '500' }}>Name: </h2>
                <h3 style={{ margin: '24px 8px', fontWeight: '350' }}>{monster.name}</h3>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
