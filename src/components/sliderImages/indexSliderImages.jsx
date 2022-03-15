import React from 'react';
import './styledSliderImages.css'


export default function SliderImages({imgs}) {
    
    if(imgs.images){
        console.log(imgs, 'imgs')
    }

  return (
    <>
    

        <section className="plans-container--slider">
            {imgs.images? imgs.images.map( (e,i) =>(
            
            <article key={i} className="plans-container--card">
               <img src={e} 
               alt="image1" />
            </article>
              ))
            : 
               <></>}
            
         </section>
   
    </>
  )
}
