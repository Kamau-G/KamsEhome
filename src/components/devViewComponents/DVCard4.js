import {useState} from 'react';

function DevViewCard4({setNav}){
    const toggleText = (event) => {
        document.getElementById(event.target.id).hidden = 
        (document.getElementById(event.target.id).hidden) ? false:true;
    }
    return(
        <div id='dvCard4' className='DevViewCard4' onClick={function(){}}>
        </div>
    );
}
export default DevViewCard4;