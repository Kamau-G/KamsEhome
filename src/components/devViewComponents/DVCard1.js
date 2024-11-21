import {useState} from 'react';

function DevViewCard1({handleOnMouseEnter, handleOnMouseLeave}){
    const toggleText = () => {
        document.getElementById('textDVC1').hidden = 
        (document.getElementById('textDVC1').hidden) ? false:true;
    }
    // const handleOnMouseEnter =()=>{
    //     document.getElementById('DevViewCard0').style.minWidth = '10vw';
    //     document.getElementById('DevViewCard2').style.minWidth = '10vw';
    //     document.getElementById('DevViewCard3').style.minWidth = '10vw';
    //     document.getElementById('DevViewCard1').style.minWidth = '70vw';
    //     }
    // const handleOnMouseLeave= () =>{
    //     document.getElementById('DevViewCard0').style.minWidth = '25vw';
    //     document.getElementById('DevViewCard2').style.minWidth = '25vw';
    //     document.getElementById('DevViewCard3').style.minWidth = '25vw';
    //     document.getElementById('DevViewCard1').style.minWidth = '25vw';
    // }
    return(
        <div className='DevViewCard1 ' onClick={function(){}} onMouseEnter={function(){}} onMouseLeave={function(){}}>
        </div>
            
    );
}
export default DevViewCard1;