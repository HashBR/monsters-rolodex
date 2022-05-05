import './App.css';
import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

function App() {

  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState("")
  const [filteredMonster, setFilteredMonster] = useState(monsters)

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setMonsters(users))
  },[])  

  useEffect(() => {
    const newFilteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().indexOf(searchField) !== -1
    )
    setFilteredMonster(newFilteredMonster)
  }, [monsters, searchField])

  const onSearchChange = (e) => {
    setSearchField(e.target.value.toLowerCase())
  }

  

  return (
    <div className="App">
      <h1 className='app-title'>People Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="Search monsters" className="monsters-search-box"/>
      <CardList monsters={filteredMonster}/>
    </div>
  );
}

export default App;