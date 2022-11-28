// import { Component } from 'react';
import { useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box-component';

import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
  username: string;
  id: string;
  name: string;
  email: string;
}

//Functional components
const App = () => {

  const [searchField, setSearchValue] = useState(''); //returns an array of two values; [value, setValue callback].. the setValue callback is used to change the state of the value
  // const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // console.log('rendered')

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => setMonsters(users));

    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(()=> {
    const newfilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchValue(searchFieldString)
  };  
  
  // const onTitleChange = (event) => {
  //   const titleString = event.target.value.toLocaleLowerCase();
  //   setTitle(titleString)
  // };

  return (
    <div className="App">
      <h1 className='app-header'>Hoyeh Monsters</h1>
      {/* <h1 className='app-header'>{title}</h1> */}
      
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box'/>
      {/* <br/>
      <SearchBox onChangeHandler={onTitleChange} placeholder='set title' className='title-search-box'/> */}
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;

// Class Component
// class  App extends Component {
//   constructor(){
//     super(); //calls the constructor properties of the parent class into the present instance of component app

//     //This is used to initialize the class properties i.e the initial values of the state or data of the application
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
  
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState(() => { //Takes in 2 functional arguments, the first function has access to the state and it changes the state, the second is a callback function(optional) that is run after the first has been executed
//         return {monsters: users};
//       }))
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     })
//   };
  
//   render() {
//     // console.log(this.state.monsters)
    
//     //Destructuring methods and values to avoid repeition of 'this' keyword
//     const { monsters, searchField } = this.state; //Values
//     const { onSearchChange } = this;  //Methods
    
//     //Variable to contain filtered monsters
//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })

//     return (
//       <div className="App">
//         <h1 className='app-header'>Hoyeh Monsters</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box'/>
//         <CardList monsters={filteredMonsters} className='monster-card-list'/>
//       </div>
//     );
//   }
// }
