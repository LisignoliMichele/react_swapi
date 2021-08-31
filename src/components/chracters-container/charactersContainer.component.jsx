import React from 'react';

import { CharacterCard } from '../character-card/characterCard.component';

const CharacterContainer = props => {
   return <div className='charactersContainer'>
      { props.characters.map(character => (
         <CharacterCard key={character.id} character={character} />
      ))}
   </div>
}

export default CharacterContainer;
