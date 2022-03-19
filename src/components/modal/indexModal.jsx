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
                  <div>
                  <h3>Added to {modalState}</h3><span className={modalState==='cart'? 'modal-icon-cart':'modal-icon-favorite' }></span>
                  </div>
                   <button className='modal-cerrar-button' onClick={()=>handleClose()}>
                  X</button>
                </div>
                   <div className='modal-image'>
                      <img  src={inputCart.color==='Red'? inputCart.image : 'https://cdn.shopify.com/s/files/1/0603/3031/1875/products/AQ9201-001_2_02f19028-dc92-4365-80e8-0f54b56023d6.jpg?v=1645715716'} alt='modal' ></img>
                   </div>


                  <div className='modal-container-information'>
                    <h2> {inputCart.title}</h2>
                    <h2>Color :   {inputCart.color}</h2>
                    <h2> {inputCart.size !== ''? 'Size:':''} {inputCart.size}</h2>
                    <h2>Amount :   {inputCart.cant}</h2>
                    <h2>Price : $   {inputCart.price/100}</h2>
                    <p>id :   {inputCart.id}</p>
                  </div>

              </div>

        </div>

    </>
  )
}
