import React from 'react'
import styles from "@/styles/about.module.css"
import Navbar from '@/component/navbar'

function About() {
  return (
  <>
  <Navbar/>
  <h2 className={styles.about}>About Us</h2>
  <p className={styles.para}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus possimus mollitia et optio, error veniam consectetur accusantium necessitatibus, eos modi temporibus ipsam quos blanditiis. Ea voluptatibus accusamus facere. Nihil labore, expedita eos totam incidunt quis illo, autem alias nesciunt dicta at non, quia officia. Itaque eos tenetur facere.
  </p>

  <h3 className='styles.subhead'>Our Mission</h3>
  <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae impedit neque id dolores repellat, eveniet commodi iusto natus asperiores repellendus architecto, a blanditiis optio esse culpa quasi aliquam. Ex, atque!</p>

  <h3 className='styles.subhead'>
    Meet Our Team Members
  </h3>
  <p className={styles.para}>
    <ul>
      <li>
       Tasmiyah Hussain - founder
    
      </li>
      <li>saqib - manager
    - Ali - Co founder</li>

    <li>  Ali- Co-founder</li>
    </ul>
  </p>

  <h3 className='styles.subhead'>OUR SERVICES</h3>
  <p className={styles.para}>
  <ul >
          <li>Web & Mobile development</li>
          <li>Web Applications & Mobile Applications</li>
          <li>Error and Bug fixing</li>
          <li>SEO Ranking</li>
        </ul>
  </p>
       
  </>
  )
}

export default About