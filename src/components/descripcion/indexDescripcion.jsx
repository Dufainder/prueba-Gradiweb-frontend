import React from 'react';
import './styledDescripcion.css';

export default function Descripcion({description}) {
  return (
    <section className='main-descripcion-container'>
       <div className='descripcion-container'>

        <p dangerouslySetInnerHTML={{ __html: description }}> 
        </p>

       </div>
    </section>
  )
}
