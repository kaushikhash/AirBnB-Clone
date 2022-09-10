import React from 'react'
import group from '../image/Group1.png'

export default function hero() {
  return (
    <section>
        <img src={group} alt="" className='section--group'/>
        <div className='section--div'>
            <h1 className='section--h1'>Online Experiences</h1>
            <p className='section--p'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
        </div>
        
    </section>
  )
}



