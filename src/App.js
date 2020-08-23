import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list-components';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }



  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handlechang = (e) => {this.setState({searchField: e.target.value});}

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters friend</h1>
        <SearchBox placeholder="search monsters" handlechang={this.handlechang}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  }

export default App;
