import {useState} from 'react';

function DogViewCard3({setNav}){
    const toggleText = () => {
        document.getElementById('textDVC3').hidden = 
        (document.getElementById('textDVC3').hidden) ? false:true;
    }
    return(
        <div className='DogViewCard3 slide-in-bottom' onClick={toggleText}>
            <div className={'textFields'}>The Pickler</div>
        </div>
    );
}
export default DogViewCard3;