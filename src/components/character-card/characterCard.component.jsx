import React from 'react';

import './characterCard.stylesheet.scss'

export const CharacterCard = (props) => (
   <div className="card-container">
      
       <h2>{props.character.name}</h2>
       <ul>
          <li>height:{props.character.height}</li>
          <li>mass: {props.character.mass}</li>
          <li>created: <small>{props.character.created}</small></li>
          <li>updated:<small>{props.character.edited}</small></li>
       </ul>
       <button onClick={props.getThePlanet} value={props.character.homeworld}>HOMEWORLD</button>
   </div>
)
