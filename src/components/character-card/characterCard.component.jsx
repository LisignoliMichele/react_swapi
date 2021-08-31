import React from 'react';


export const CharacterCard = (props) => (
   <div className="card-container">
       <h2>{props.character.name}</h2>
       <ul>
          <li>height: {props.character.height}</li>
          <li>mass: {props.character.mass}</li>
          <li>created: <small>{props.character.created}</small></li>
          <li>updated:<small>{props.character.edited}</small></li>
       </ul>
       <div onClick={() => console.log('ciao')}>PLANET</div>
   </div>
)
