import React,{useState, useEffect} from 'react';
import {putId} from '../redux/actions';
import { useDispatch} from 'react-redux';
import './styledAddButtons.css';


export default function AddButtons({producto, inputCart}) {

const dispatch=useDispatch()

const handleFavourite = ()=>{

  if(inputCart.size !== '') {
    let variante = producto.variants.filter((item) => {
     return (item.options[0] === inputCart.color && item.options[1] === inputCart.size);
    })
     
    console.log(variante,'la variante')
     dispatch(putId(variante[0].id))
     console.log(inputCart, 'desde buttons cart')
   }

   else {

    dispatch(putId(producto.id))
   }

}




const handleCart = ()=>{

  if(inputCart.size !== '') {
   let variante = producto.variants.filter((item) => {
    return (item.options[0] === inputCart.color && item.options[1] === inputCart.size);
   })
    
   console.log(variante,'la variante')
    dispatch(putId(variante[0].id))
    console.log(inputCart, 'desde buttons cart')
  }

  else {

    dispatch(putId(producto.id))
   }


}


  return (
    <section className='main-addButtons-container'>
        
        <div className='add-Buttons-favourite' onClick={()=>handleFavourite()} >Add to favourite</div>
        <div className='add-Buttons-cart' onClick={()=>handleCart()}>Add to cart</div>
       
    </section>
  )
}
