import { useState, useEffect } from 'react';
import './App.css';
import './components/card-list/card-list.component'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';



const App = () => {
  const [serachField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([])
  const [stringField, setStringField] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const serachFieldStr = event.target.value.toLocaleLowerCase();
    setSearchField(serachFieldStr);
  }


  const filterMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(serachField);
  });

  return (
    <div className='App'>
      <h1 className='app-title'>Monster Company</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='Search monster' className='monster-search-box' />
      <CardList monsters={filterMonsters} />
    </div>
  );
}
export default App;

/*class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      serachField: ''
    };
  }

  render() {
    const { monsters, serachField } = this.state;
    const { onSearchChange } = this;
    
    return (

    );
  }
}

export default App;*/
