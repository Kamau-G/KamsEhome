import {useState} from 'react';

function DevViewCard4({setNav}){
    const toggleText = (event) => {
        document.getElementById(event.target.id).hidden = 
        (document.getElementById(event.target.id).hidden) ? false:true;
    }
    return(
        <div id='dvCard4' className='DevViewCard4' onClick={function () {
        }}>
            <h2>Other Projects</h2>
            
        </div>
    );
}

export default DevViewCard4;