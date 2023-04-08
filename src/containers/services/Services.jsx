import React from 'react'
import './services.css'
import image2 from '../../assets/image2.png'

function Services() {
  return (
    <div className='services' id='services'>
        <div className='services__container'>
            <div className='services__container-top'>
                <div className='services__container-top_first'>
                    <h1>
                        INTRODUCTION
                    </h1>
                    <div className='services__container-top_first-arrowtext'>
                        <p>
                            TO HYDRA VR
                        </p>
                        <svg width="228" height="100" viewBox="0 0 228 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M198.833 50L157.167 50M198.833 50L182.167 66.6666M198.833 50L182.167 33.3333" stroke="#C0B7E8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M157.5 50H0" stroke="#C0B7E8" stroke-width="3"/>
                        </svg>
                    </div>
                </div>
                <div className='services__container-top_second'>
                    <p>
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                </div>
            </div>

            <div className='services__container-bottom'>
                <div className='services__container-bottom_image'>
                    <img src={image2} alt="image2" />
                </div>
                <div className='services__container-bottom_text'>
                    <div className='services__container-bottom-text_top'>
                        <h1>
                            ABOUT
                        </h1>
                        <p className='p'>
                            HYDRA VR
                        </p>
                    </div>

                    <p>
                        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                        sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                        retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                        n tempor.
                    </p>

                    <button>LET’S GET IN TOUCH</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services