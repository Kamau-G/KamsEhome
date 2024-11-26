import {useState} from 'react';

function DevViewCard3({setNav}){
    const toggleText = () => {
        document.getElementById('textDVC3').hidden = 
        (document.getElementById('textDVC3').hidden) ? false:true;
    }
    return(
        <div className='DevViewCard3 slide-in-left' onClick={function(){}}>
            <text>
                <br/>
                <h2>Greetings,</h2>
                my name is <strong>Kamau</strong>, pronounced Kahmahow and it means silent warrior. Silent as I may be
                my
                consistency, ambition, and adaptability speak volumes.<br/>
                <h2>Strengths</h2>
                <p>
                    Consistency;
                    firmness of constitution or character
                    maintaining a training schedule of 3 days per week for over a year has familiarized me with the
                    attribute of consistency, and its need for daily functions. Consistency is what makes our planet
                    habitable and its process serves to bring all things into balance.
                    Ambition;
                    desire to achieve a particular end
                    having the opportunity to initiate and maintain two micro-businesses has allowed me to demonstrate
                    my desire to achieve self-appointed goals. It has given me great insight into what it takes to bring
                    a product or service to market. The sheer amount of things needing to be done for a business is
                    all-encompassing. I tip my hat to the micro-business community.
                </p>
                <h2>Goals</h2>
                <p>
                    Personal
                    A big personal goal of mine is to maintain my calisthenics training protocol. It is truly liberating
                    to feel physically capable of doing the things I want to do every day. Falling in love with the
                    journey rather than the results has been key to maintaining and I am sure it will come in handy in
                    the future.
                    Academic
                    My biggest goal at the moment when it comes to my education is to achieve my AAS in Software
                    Development. Then continue to attain my Bachelor's Degree in Artificial Intelligence and/or Machine
                    Learning. Finishing my studies at the University of Oregon.

                </p>
                <h2>Achievements</h2>
                <p>
                    Home Ownership<br/>
                    One of my biggest achievements in life has been purchasing a home at the age of 25. I understand what homeownership means to the BIPOC community and to be the youngest in my family was a great feeling.  To this day I am still humbled to think that through consistency, commitment, and long-term thinking I was able to attain this recognizable milestone.

                </p>

            </text>
        </div>
    );
}

export default DevViewCard3;
