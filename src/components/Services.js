import React from 'react'
import img1 from './images/img-1.png'
import img2 from './images/img-2.png'
import icon1 from './images/icon-1.png'
import icon2 from './images/icon-2.png'
import icon3 from './images/icon-3.png'

const Services = () => {
  return (
    <div>
        <div className="services_section layout_padding">
         <div className="container">
            <div className="services_taital">Our Services</div>
            <p className="services_text">This 26 years old company is in construction bussines building dreams</p>
         </div>
         <div className="services_section_2 layout_padding">
            <div className="container-fluid padding_0">
               <div className="box_main">
                  <div className="box_left">
                     <div className="box_left_main">
                        <div className="box_left_one">
                           <div className="image_1"><img src={img1} /></div>
                        </div>
                        <div className="box_right_one">
                           <div className="icon_1"><img src={icon1} /><span className="padding_left_10">architecture  Design</span></div>
                           <p className="long_text">The best professionals in the area</p>
                        </div>
                     </div>
                  </div>
                  <div className="box_middle">
                     <div className="box_left_main">
                        <div className="padding_10">
                           <div className="icon_1"><img src={icon2} /><span className="padding_left_10">professional team</span></div>
                           <p className="long_text">The best constructors in the nation</p>
                        </div>
                     </div>
                  </div>
                  <div className="box_right">
                     <div className="box_left_main">
                        <div className="box_right_one">
                           <div className="icon_1"><img src={icon3} /><span className="padding_left_10">Hi tech projects</span></div>
                           <p className="long_text">The most recent tecnhology</p>
                        </div>
                        <div className="box_left_one">
                           <div className="image_2"><img src={img2} /></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Services