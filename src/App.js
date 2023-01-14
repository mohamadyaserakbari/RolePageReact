import React, { Component } from 'react';
import './App.css';
import './components/card-list/card-list.component'
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      serachField: ''
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

  onSearchChange = (event) => {
    const serachField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { serachField };
    });
  }
  render() {
    const { monsters, serachField } = this.state;
    const { onSearchChange } = this;
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(serachField);
    });
    return (
      <div className='App'>
        <input
          style={{ width: '50%', height: '40px', borderRadius: '12px', marginTop: '32px', padding: '0px 16px' }}
          placeholder='Search Monster Name'
          className='search-box'
          type={'search'}
          onChange={(onSearchChange)}
        />
        {
          filterMonsters.map((monster) => {
            return (
              <div key={monster.id} style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
                <h3 style={{ margin: '0px 4px 0px 24px', fontWeight: '300' }}>{monster.id + ' - '}</h3>
                <h3 style={{ margin: '0px 4px 0px 0px', fontWeight: '500' }}>Name: </h3>
                <h3 style={{ margin: '24px 8px', fontWeight: '350' }}>{monster.name}</h3>
              </div>
            );
          })
        }
        <CardList />
        <h1>HeLooooooooo</h1>
      </div>
    );
  }
}

export default App;
