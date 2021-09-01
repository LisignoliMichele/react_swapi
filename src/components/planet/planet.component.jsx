import React from 'react';

import './planet.stylesheet.scss';
import planet from './img/world2.gif';

const Planet = props => {
   return <div onClick={props.handleClose} className={props.active ? 'planet': 'hidden'} >
            <img src={planet}/>
            <p>name: {props.planet.name}</p>
            <p>Planet Diameter: {props.planet.diameter}</p>
            <p>Planet climate: {props.planet.climate}</p>
            <p>Planet population: {props.planet.population}</p>
         </div>
}
   
export default Planet