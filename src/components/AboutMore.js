import React from 'react'
import building from './images/building.jpg'

const AboutMore = () => {
  return (
    <div>
        <div className="about_section layout_padding">
            <div className="container-fluid">
                <h1>A bit of history</h1>
                <p>With the Second Industrial Revolution in the early 20th century, elevators and cranes made high rise buildings and skyscrapers possible, while heavy equipment and power tools decreased the workforce needed. Other new technologies were prefabrication and computer-aided design.

Trade unions were formed to protect construction workers' interests and occupational safety and health. Personal protective equipment such as hard hats and earmuffs also came into use, and have become mandatory at most sites.

From the 20th century, governmental construction projects were used as a part of macroeconomic stimulation policies, especially during the Great Depression (see New Deal). For economy of scale, whole suburbs, towns and cities, including infrastructure, are often planned and constructed within the same project (called megaproject if the cost exceeds US$1 billion), such as Brasília in Brazil, and the Million Programme in Sweden.

By the end of the 20th century, ecology, energy conservation and sustainable development had become important issues of construction.

</p>
            <img src={building} alt="building" width={400} height={400} />
            <p>There is no established academic discipline of construction history but a growing number of researchers and academics are working in this field, including structural engineers, archaeologists, architects, historians of technology and architectural historians. Although the subject has been studied since the Renaissance and there were a number of important studies in the nineteenth century, it largely went out of fashion in the mid-twentieth century. In the last thirty years there has been an enormous increase in interest in this field, which is vital to the growing practice of building conservation.</p>

            </div>
         </div>
    </div>
  )
}

export default AboutMore