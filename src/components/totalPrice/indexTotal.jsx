import React from 'react'
import './styledTotal.css'
// import InputSpinner from 'react-bootstrap-input-spinner'  

function Total() {
  return (
    
    <section className='main-total-container'>
       
     <div className='input-container'>
       <button className='menos' >-</button>
         <input type='text' value={1}></input>
       <button className='mas'>+</button>  
     </div>

      <div className='precio-container'>
         <h4>Total Price: </h4><p> $ 570</p>
      </div>

   </section>
  )
}

export default Total