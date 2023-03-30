import React from 'react'
import aboutimg from './images/about-img.png'

const About = () => {
  return (
    <div className="about_section layout_padding">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-6">
                  <div className="about_main">
                     <div className="about_taital">About company</div>
                     <p className="about_text">Building construction is the process of adding structures to areas of land, also known as real property sites. Typically, a project is instigated by or with the owner of the property (who may be an individual or an organisation); occasionally, land may be compulsorily purchased from the owner for public use.</p>
                     <div className="about_bt"><a href="/about/aboutmore">About More</a></div>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="about_img"><img src={aboutimg} /></div>
               </div>
            </div>
         </div>
      </div>
  )
}

export default About