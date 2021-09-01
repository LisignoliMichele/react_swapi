import React from 'react';

import './charactersContainer.stylesheet.scss'

import { CharacterCard } from '../character-card/characterCard.component';

const CharacterContainer = props => {
   return <div className='charactersContainer'>
      { props.characters.map(character => (
         <CharacterCard character={character} getThePlanet= {props.getThePlanet} key={character.name}/>
      ))}
   </div>
}

export default CharacterContainer;
