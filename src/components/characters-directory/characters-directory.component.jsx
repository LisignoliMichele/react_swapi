import React from 'react';

import CharacterContainer from '../chracters-container/charactersContainer.component';
import Planet from '../planet/planet.component';

import { Search } from '../search/search.component';

class CharactersDirectory extends React.Component{

   constructor() {
     super();
 
     this.state = {
       characters: [],
       planet: [],
       search: '',
       active: false,
     };
   }
   
   componentDidMount() {
     fetch("https://swapi.dev/api/people")
     .then(response => response.json())
     .then(response => this.setState({characters: response.results}))
   }

  handleChange = event => {
  this.setState({ search: event.target.value });
  };

  handleClick = event => {
    const fetchData = async () => {
    const response = await fetch(event.target.value);
    const data = await response.json();
    this.setState({planet: data});
    const currentState = this.state.active;
    this.setState({ active: !currentState })
    }
    fetchData()
  }

  handleClose = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState })
  }


   render() {

    const { characters, search, planet, active } = this.state;
    const filtredCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );

     return (
       <div>
         <Search placeholder='Find characters' handleChange={this.handleChange}/>
         <CharacterContainer getThePlanet={this.handleClick} characters = {filtredCharacters} />
         <Planet handleClose={this.handleClose} planet = {planet} active = {active}/>
         </div>
     );
   }
 }

 export default CharactersDirectory;