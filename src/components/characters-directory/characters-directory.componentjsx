import React from 'react';

import CharacterContainer from '../chracters-container/charactersContainer.component';

class CharactersDirectory extends React.Component{

   constructor() {
     super();
 
     this.state = {
       characters: [],
     };
   }
 
 
   componentDidMount() {
     fetch('http://localhost:8000/api/people')
     .then(response => response.json())
     .then(response => this.setState({characters: response}))
   }
 
   render() {

     const {characters} = this.state;
     
     return (
         <CharacterContainer characters = {characters} />
     );
   }
 }

 export default CharactersDirectory;