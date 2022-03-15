import React from 'react'
import './styledTitle.css'

export default function Title({title, price, comparate}) {
  return (
    <section className='main-container-title'>
      
      <h3>by Nike x Alyx</h3>
      <h2>{title}</h2>
      <div className='container-precio'>
         <h2>{price/100}.00 </h2><h3> $ {comparate/100}.00 </h3>
      </div>

          <hr/>

    </section>
  )
}
