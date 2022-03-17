import React from 'react';

import IndexCarousel from '../carousel/indexCarousel';
import { useDispatch} from 'react-redux';
import './styledSliderImages.css'


export default function SliderImages({imgs , modalState}) {
      


    if(imgs.images){
        console.log(imgs.images, 'imgs')
       
    }

  return (
    <>
          
            
             <IndexCarousel imgs={imgs}  modalState={modalState}/>
          
          
          
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
