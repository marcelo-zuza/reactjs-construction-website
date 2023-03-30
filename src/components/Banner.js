import React from 'react'
import righticon from './images/right-icon.png'
import lefticon from './images/left-icon.png'
import bannerbg from './images/banner-bg.png'

const Banner = () => {
  return (
    <div>
        <div class="banner_section layout_padding">
         <div id="main_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <div class="container">
                     <h1 class="banner_taital">We Make Your Dream Home</h1>
                     <div class="btn_main">
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
    
  )
}

export default Banner