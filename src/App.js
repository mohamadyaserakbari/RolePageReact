import React, { Component } from 'react';
import './App.css';
import './components/card-list/card-list.component'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
        <SearchBox onChangeHandler={onSearchChange} placeholder='Search monster' className='monster-search-box' />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
