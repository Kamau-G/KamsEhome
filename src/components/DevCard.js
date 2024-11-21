import {useState} from 'react';
import { NavLink } from 'react-router-dom';
// onClick={(event)=>{setNav(0)}}
function DevCard({setNav}){
    return(
        <NavLink className='DevCard slide-in-left' to={`/dev`}>
            Professional
        </NavLink>
    );
}
export default DevCard;