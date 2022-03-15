import React,{useState} from 'react'
import './styledTotal.css'
// import InputSpinner from 'react-bootstrap-input-spinner'  

function Total({price}) {

    const [cont, setCont] = useState(1);

  return (
    
    <section className='main-total-container'>
       
     <div className='input-container'>
       <button className='menos' onClick={cont > 1?()=>setCont(cont - 1):()=>setCont(1)}>-</button>
         <input type='text' value={cont}></input>
       <button className='mas'  onClick={()=>setCont(cont + 1)}>+</button>  
     </div>

      <div className='precio-container'>
         <h4>Total Price: </h4><p>  {` $ ${(price * cont/100) }`}</p>
      </div>

   </section>
  )
}

export default Total