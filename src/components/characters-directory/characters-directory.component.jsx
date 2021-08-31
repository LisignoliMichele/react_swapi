import React from 'react';

import CharacterContainer from '../chracters-container/charactersContainer.component';

import { Search } from '../search/search.component';

class CharactersDirectory extends React.Component{

   constructor() {
     super();
 
     this.state = {
       characters: [],
       search: '',
     };
   }
 
 
   componentDidMount() {
     fetch('http://localhost:8000/api/people')
     .then(response => response.json())
     .then(response => this.setState({characters: response}))
   }
 

   handelChange = event => {
    this.setState({ search: event.target.value });
    };

   render() {

    const { characters, search } = this.state;
    const filtredCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );

    //  const {characters} = this.state;
     
     return (
       <div>
         <Search placeholder='Find characters' handleChange={this.handelChange}/>
         <CharacterContainer characters = {filtredCharacters} />
         </div>
     );
   }
 }

 export default CharactersDirectory;