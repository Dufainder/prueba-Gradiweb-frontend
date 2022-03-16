import React,{useState, useEffect} from 'react';
import './styledAddButtons.css';


export default function AddButtons({producto, inputCart}) {

  
const handleFavourite = ()=>{

  let setFavourite= !'state' 
  console.log(inputCart, 'desde buttons favorite')
}

const handleCart = ()=>{

  let setFavourite= !'state' 
  console.log(inputCart, 'desde buttons cart')
}


  return (
    <section className='main-addButtons-container'>
        
        <div className='add-Buttons-favourite' onClick={()=>handleFavourite()} >Add to favourite</div>
        <div className='add-Buttons-cart'>Add to cart</div>
       
    </section>
  )
}
