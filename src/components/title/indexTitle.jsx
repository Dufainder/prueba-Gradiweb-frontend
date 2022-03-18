import React, {useEffect} from 'react';
import {putTitle, putImage} from '../redux/actions' 
import { useDispatch} from 'react-redux';
import './styledTitle.css'

export default function Title({title, price, comparate,images}) {

  const dispatch = useDispatch();


  useEffect(() => {
    if(title){

      let imagen = images[0]
      dispatch(putImage(imagen))
      dispatch(putTitle(title))
    }

},[title])  



  return (
    <section className='main-container-title'>
      
      <h3>by Nike x ALYX</h3>
      <h2>{title}</h2>
      <div className='container-precio'>
         <h2>$ {price/100}.00 </h2><h3> $ {comparate/100}.00 </h3>
      </div>

          <hr/>

    </section>
  )
}
