import React from 'react'
import img7 from './images/img-7.png'


const Philosofy = () => {
  return (
    <div>
         <div class="philosophy_section layout_padding">
         <div class="container">
            <h1 class="philosophy_taital">Our Philosophy</h1>
            <p class="philosophy_text">It is a long established fact that a reader will be distracted by the readable</p>
         </div>
         <div class="philosophy_section_2 layout_padding">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-md-6 padding_0">
                     <div class="philosophy_box_main">
                        <div class="philosophy_box">
                           <div class="philosophy_left">
                              <h1 class="number_text">01</h1>
                           </div>
                           <div class="philosophy_right">
                              <h3 class="quick_text">Quick in Response</h3>
                           </div>
                        </div>
                        <div class="philosophy_box">
                           <div class="philosophy_left">
                              <h1 class="number_text">02</h1>
                           </div>
                           <div class="philosophy_right">
                              <h3 class="quick_text">Satisfaction Guarantee</h3>
                           </div>
                        </div>
                        <div class="philosophy_box">
                           <div class="philosophy_left">
                              <h1 class="number_text">03</h1>
                           </div>
                           <div class="philosophy_right">
                              <h3 class="quick_text">Expert & Professional</h3>
                           </div>
                        </div>
                        <div class="philosophy_box">
                           <div class="philosophy_left">
                              <h1 class="number_text">04</h1>
                           </div>
                           <div class="philosophy_right">
                              <h3 class="quick_text">Professional Approach</h3>
                           </div>
                        </div>
                        <div class="philosophy_box">
                           <div class="philosophy_left">
                              <h1 class="number_text">05</h1>
                           </div>
                           <div class="philosophy_right">
                              <h3 class="quick_text">High Quality Work</h3>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6 padding_0">
                     <div class="image_7"><img src={img7} /></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Philosofy