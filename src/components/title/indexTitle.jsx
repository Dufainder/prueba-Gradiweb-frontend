import React from 'react'
import './styledTitle.css'

export default function Title({title, price, comparate}) {
  return (
    <section className='main-container-title'>
      
      <h3>by Nike x Alyx</h3>
      <h2>{title}</h2>
      <div className='container-precio'>
         <h2>{price}</h2><h3>{comparate} </h3>
      </div>


    </section>
  )
}
