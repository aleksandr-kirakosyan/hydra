import React from 'react'
import Spline from '@splinetool/react-spline';
import './howto.css'

function Howto() {
  return (
    <div className='howto' id='howto'>
        <div className='howto__top'>
            <div className='howto__top-title'>
                <h1>
                    HOW CAN WE
                </h1>
                <div className='howto__top-title_arrowtext'>
                    <p>SHOW YOU</p>
                    <svg width="228" height="100" viewBox="0 0 228 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M198.833 49.9999L157.167 49.9999M198.833 49.9999L182.167 66.6666M198.833 49.9999L182.167 33.3333" stroke="#C0B7E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M157.5 50H0" stroke="#C0B7E8" stroke-width="3"/>
                    </svg>
                </div>
            </div>
            <div className='howto__top-text'>
                <p>
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </p>
            </div>
        </div>
        <div className='howto__bottom'>
            <div className='howto__bottom-border' />
            <center>
                <p>Manipulate with your cursor</p>
            </center>
            <Spline className='spline' scene='https://prod.spline.design/r7EwgwG7PnwzJmb0/scene.splinecode' />
        </div>
    </div>
  )
}

export default Howto