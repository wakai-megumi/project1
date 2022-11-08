// import React from 'react'

// function Herosection() {
//   return (
//     <div className='hero-container'>
//         <video srcs="/videos/video-1.mp4" autoPlay loop muted/>
//     </div>
//   )
// }

// export default Herosection

import React from 'react'
import {Button} from './Button';
import './Herosection.css';
import '../App.css';

const Herosection = () => {
    return (
        <div className='hero-container'>
            <h1>ADVENTURE AWAITS</h1>
            <p> What  are  you waiting for?</p>
              <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle ' />
                </Button>
               
                
              </div>
            <video src="./videos/video-1.mp4" autoPlay loop muted />
        </div>
    )
}

export default Herosection