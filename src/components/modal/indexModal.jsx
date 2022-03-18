import React from 'react'
import { handleModalChange } from '../redux/actions'
import { useDispatch} from 'react-redux';
import './styledModal.css'

export default function Modal({inputCart, modalState}) {

      
  const dispatch = useDispatch();
     const handleClose= ()=>{
      dispatch(handleModalChange(''))
   
     }



  return (
    <>

        
        <div className= 'modal-overlay'>
              
              <div className='modal-container'>
                <div className='modal-title'>
                  <h3>Added to {modalState}</h3>
                   <button className='modal-cerrar-button' onClick={()=>handleClose()}>
                  X</button>
                </div>
                   <div className='modal-image'>
                      <img  src={inputCart.image} alt='modal' ></img>
                   </div>


                  <div className='modal-container-information'>
                    <h2> {inputCart.title}</h2>
                    <h2>Color :   {inputCart.color}</h2>
                    <h2> {inputCart.size !== ''? 'Size:':''} {inputCart.size}</h2>
                    <h2>Cant :   {inputCart.cant}</h2>
                    <h2>Price : $   {inputCart.price/100}</h2>
                    <p>id :   {inputCart.id}</p>
                  </div>

              </div>

        </div>

    </>
  )
}
