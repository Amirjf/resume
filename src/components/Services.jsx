import React from 'react'
import ServiceItem from './ServiceItem'

function Services() {
    return (
        <>
        <h3 className="pt-5 pb-5 text-white">My Services</h3>
          <ServiceItem title={'Web Development'} description={'I started designing wordpress websites from 2018 and now I have designed more than 150 sites for about 3 years and I have always tried to design my sites uniquely'} />
          <ServiceItem title={'Graphic Design'} description={'I do not have much experience in graphic design, but from the very beginning when i started web design, I started working with Photoshop, which helped me to have an acceptable knowledge of Photoshop.'} />
          <ServiceItem title={'SEO'} description={'During the time I was designing websites, I did SEO for several websites and gained good experience in this field. But after a while I decided to focus on site design and moved away from SEO'} />
          <ServiceItem title={'Front-End Developer'} description={'For 8 months, I worked as a front-end developer intern at Drop Company, taking several HTML, CSS, Js, and React courses, and developed several admin panels as a practice with React.'} />
          <ServiceItem title={'sadklsa'} description={'sadsad Drop Company, taking several HTML, CSS, Js, and React courses, and developed several admin panels as a practice with React.'} />
          </>
    )
}

export default Services
