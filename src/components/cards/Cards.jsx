import React from 'react';
import './cards.css';

function Cards({image, title, content}) {
  return (
    <div className='card'>
        <div className='card_image'>
            <img src={image} alt='cards'/>
        </div>
        <div className='card_title'>
            <h1>{title}</h1>
        </div>
        <div className='card_content'>
            <p>{content}</p>
        </div>
        <button>TRY IT NOW</button>
    </div>
  )
}

export default Cards