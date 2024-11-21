import {useState} from 'react';
import { NavLink } from 'react-router-dom';

function DogCard({setNav}){
    return(
        <NavLink className='DogCard slide-in-right' to={`/dog`}>
            Personal
        </NavLink>
    );
}
export default DogCard;