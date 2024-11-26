import {useState} from 'react';

function DevViewCard2({setNav}){
    const toggleText = () => {
        document.getElementById('textDVC2').hidden = 
        (document.getElementById('textDVC2').hidden) ? false:true;
    }
    return(
        <div id='dvCard2' className='DevViewCard2 ' onClick={function () {
        }}>
            <h2>Metronome</h2>
            
        </div>
    );
}

export default DevViewCard2;