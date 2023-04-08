import React from 'react'
import './technologies.css'
import tech_main from '../../assets/tech_main.png'
import tech1 from '../../assets/tech1.png'
import tech2 from '../../assets/tech2.png'
import tech3 from '../../assets/tech3.png'
import tech4 from '../../assets/tech4.png'

function Technologies() {
    
  return (
    <div className='technologies' id='technologies'>
        <div className='technologies__top'>
            <div class="technologies__top-image">
                <img src={tech_main} alt="tech" />
                <div class="technologies__top-text">
                    <h1>
                        TECHNOLOGIES & HARDWARE
                    </h1>
                    <p>
                        USED BY HYDRA VR.
                    </p>
                </div>
            </div>
        </div>
        <div className='technologies__bottom'>
            <img src={tech1} alt="techbox" />
            <img src={tech2} alt="techbox" />
            <img src={tech3} alt="techbox" />
            <img src={tech4} alt="techbox" />
        </div>
    </div>
  )
}

export default Technologies