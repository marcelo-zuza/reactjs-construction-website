import React from 'react'
import img3 from './images/img-3.png'
import img4 from './images/img-4.png'
import img5 from './images/img-5.png'
import img6 from './images/img-6.png'


const Project = () => {
  return (
    <div>
            <div className="project_section layout_padding">
         <div className="container">
            <h1 className="project_taital">Latest Projects</h1>
            <h3>See bellow our latest projects</h3>
    
         </div>
         <div className="project_section_2 layout_padding">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-sm-3">
                     <div><img src={img3} className="image_3"/></div>
                  </div>
                  <div className="col-sm-3">
                     <div><img src={img4} className="image_3"/></div>
                  </div>
                  <div className="col-sm-3">
                     <div><img src={img5} className="image_3"/></div>
                  </div>
                  <div className="col-sm-3">
                     <div><img src={img6} className="image_3"/></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Project