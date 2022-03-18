import React, {useState} from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styledCorousel.css"; // requires a loader

function IndexCarousel({imgs, modalState}) {

    const [cont, setCont] = useState(0);

  return (

<section className={modalState===''?  'plans-container--card-off' : 'plans-container--card' }>
      <div className='carrusel-title'>
         <h3>Catalog / sneckers /</h3><p> {imgs?.title}</p>  
    </div>
    <Carousel 
    
    showArrows={true} 
    showThumbs={false} 
    showIndicators={false} 
    showStatus={false}
    width={'100%'}
    onChange={(e)=>(setCont(e))}
    id='cnatiner'
    className='cnatiner'
    >
     {imgs?.images? imgs.images.map( (e,i) =>(

         
               <img className='ClassImagen' src={e} key={i} 
               alt="image1"/>
    
              ))
            : 
               <></>}

    </Carousel>
       
       <div className='indicador-container'>

        {imgs?.images? imgs.images.map( (e, i) =>(
            
            <div key={i} className={cont===i? 'indicador-on':'indicador-off'}/>
            
            ))
            : 
            <></>}
     </div>

 
 <div id='foot-images'>

 
 {imgs?.images? imgs.images.map( (e,i) =>(
   
      (i!==0?
      <div key={i+10} >
      <img  id='foot-images-img' src={e} 
      alt="image8"/> 
      </div>
      : <></>)
    
   
   ))
   : 
   <></>
   
   }

  </div>



    </section>
  )
}

export default IndexCarousel