import {useState} from 'react';

function DogViewCard2({setNav}){
    const toggleText = () => {
        document.getElementById('textDVC2').hidden = 
        (document.getElementById('textDVC2').hidden) ? false:true;
    }
    return(
        <div className='DogViewCard2 slide-in-top' onClick={toggleText}>
            <div id='textDVC2'  hidden>
                Card 2
            </div>
        </div>
    );
}
export default DogViewCard2;