import React from 'react'
import './styledModal.css'

export default function Modal({inputCart}) {
  return (
    <>
        <div className='modal-overlay'>
              
              <div className='modal-container'>
                <div className='modal-title'>
                  <h3>Añadido al cart</h3>
                   <button className='modal-cerrar-button'>
                  X</button>
                </div>
                  
                  <div>
                    <h2>Title: {inputCart.title}</h2>
                    <h2>Color: {inputCart.color}</h2>
                    <h2>Cant:  {inputCart.cant}</h2>
                    <h2>Price: {inputCart.price}</h2>
                  </div>

              </div>

        </div>

    </>
  )
}
