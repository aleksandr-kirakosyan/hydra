import React from 'react'
import Cards from '../../components/cards/Cards'
import './why.css'
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';
import card4 from '../../assets/card4.png';


function Why() {
  return (
    <div className='why'>
        <div className='why__top'>
            <div className='why__top-title'>
                <h1>
                    WHY BUILD
                </h1>
                <div className='why__top-title_arrowtext'>
                    <p>
                        WITH HYDRA?
                    </p>
                    <svg width="228" height="100" viewBox="0 0 228 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M198.833 50L157.167 50M198.833 50L182.167 66.6667M198.833 50L182.167 33.3334" stroke="#C0B7E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M157.5 50H0" stroke="#C0B7E8" stroke-width="3"/>
                    </svg>
                </div>
            </div>
            <div className='why__top-text'>
                <p>
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </p>
            </div>
        </div>
        <div className='why__bottom'>
            <Cards className='why__bottom-card' image={card1} title='SIMULATION' content='Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.' />
            <Cards className='why__bottom-card' image={card2} title='EDUCATION'  content='Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus  libero justo laoreet sit amet vitae.' />
            <Cards className='why__bottom-card' image={card3} title='SELF-CARE'  content='Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus  libero justo laoreet sit amet vitae.' />
            <Cards className='why__bottom-card' image={card4} title='OUTDOOR'    content='Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus  libero justo laoreet sit amet vitae.' />
        </div>
    </div>
  )
}

export default Why