import React from 'react'
import './styledTotal.css'
// import InputSpinner from 'react-bootstrap-input-spinner'  

function Total() {
  return (
    
    <section className='main-total-container'>
       
 
     <button className='menos' >-</button>
       <input type='text' value={1}></input>
     <button className='mas'>+</button>  

   </section>
  )
}

export default Total