import {useState} from 'react';

function DevViewCard3({setNav}){
    const toggleText = () => {
        document.getElementById('textDVC3').hidden = 
        (document.getElementById('textDVC3').hidden) ? false:true;
    }
    return(
        <div className='DevViewCard3 slide-in-left' onClick={function(){}}>
            <text>
            <h1>Greetings! Kamau Here:</h1>

            Software engineer with 3 years of web managment experience and a strong foundation in full stack development, positive communication, and problem solving. I'm committed to delivering innovative and data driven software applications.<br/><br/>

            I've honed my skills in designing, developing, deploying and maintaining data driven web applications. With my continued education culminating into an AAS in Software Development as well as two certifications one in Front End Development and the other as a Database Specialist.<br/><br/>

            My professional goals include contributing my skills to meaningful projects and exploring opportunities in applications dealing with large data sets and user bases.<br/><br/>

            I bring a strong work ethic, characterized by persistence, consistency, and a positive energy. These qualities, combined with my technical proficiency and hunger for knowledge make me a valuable asset to many organization.
            </text>
        </div>
    );
}
export default DevViewCard3;
