import React from 'react';
import IndexCarousel from '../carousel/indexCarousel';
import './styledSliderImages.css'


export default function SliderImages({imgs}) {
    
    if(imgs){
        console.log(imgs, 'imgs')
    }

  return (
    <>
    
             
             <IndexCarousel imgs={imgs}/>
          
          
          
            {/* {imgs.images? imgs.images.map( (e,i) =>(
            
            <article key={i} className="plans-container--card">
               <img src={e} 
               alt="image1" />
            </article>
              ))
            : 
               <></>} */}
            
         </>
  
  )
}
