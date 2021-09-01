import React from 'react';

import './planet.stylesheet.scss';
import planet from './img/world2.gif';

const Planet = props => {
   return <div onClick={props.handleClose} className={props.active ? 'planet': 'hidden'} >
            <img src={planet}/>
            <p>name: <br/><span>{props.planet.name}</span></p>
            <p>Planet Diameter: <br/><span>{props.planet.diameter}</span></p>
            <p>Planet climate: <br/><span>{props.planet.climate}</span></p>
            <p>Planet population: <br/><span>{props.planet.population}</span></p>
         </div>
}
   
export default Planet