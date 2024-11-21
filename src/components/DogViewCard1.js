import {useState} from 'react';

function DogViewCard1({setNav}){
    const toggleText = () => {
        document.getElementById('textDVC1').hidden = 
        (document.getElementById('textDVC1').hidden) ? false:true;
    }
    return(
        <div className='DogViewCard1 slide-in-bottom' onClick={toggleText}>
            <div id='textDVC1'  hidden>
                Card 1
            </div>
        </div>
            
    );
}
export default DogViewCard1;