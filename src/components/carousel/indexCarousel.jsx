import React, {useState} from 'react'
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styledCorousel.css"; // requires a loader

function IndexCarousel({imgs, modalState}) {

    
    const inputCart = useSelector((state) => state.cart)
    const [cont, setCont] = useState(0);
    const variBlack = ['https://cdn.shopify.com/s/files/1/0603/3031/1875/products/AQ9201-001_2_02f19028-dc92-4365-80e8-0f54b56023d6.jpg?v=1645715716'
    ,'https://cdn.shopify.com/s/files/1/0603/3031/1875/products/AQ9201-001_3_7cb8e5b7-fe9c-4140-af7f-d76525c1c1f1.jpg?v=1645716058'
    ,'https://cdn.shopify.com/s/files/1/0603/3031/1875/products/AQ9201-001_4_b95f05e5-9c4a-4417-b224-51263c8a7385.jpg?v=1645716345'
    ,'https://cdn.shopify.com/s/files/1/0603/3031/1875/products/AQ9201-001_5.jpg?v=1645716674'];






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
     {(inputCart?.color==='Red')? imgs.images.map( (e,i) =>(

         
               <img className='ClassImagen' src={e} key={i} 
               alt="image1"/>
    
              ))
            : 

            variBlack.map( (e,i) =>(

         
              <img className='ClassImagen' src={e} key={i} 
              alt="image2"/>
   
             ))}

    </Carousel>
       
       <div className='indicador-container'>

        {imgs?.images? imgs.images.map( (e, i) =>(
            
            <div key={i} className={cont===i? 'indicador-on':'indicador-off'}/>
            
            ))
            : 
            <></>}
     </div>

 
 <div id='foot-images'>

 
 {(inputCart?.color==='Red')? imgs.images.map( (e,i) =>(
   
      (i!==0?
      <div key={i+10} >
      <img  id='foot-images-img' src={e} 
      alt="image8"/> 
      </div>
      : <></>)
    
   
   ))
   : 
   variBlack.map( (e,i) =>(
   
    (i!==0?
    <div key={i+10} >
    <img  id='foot-images-img' src={e} 
    alt="image8"/> 
    </div>
    : <></>)
  
 
 ))
   
   }

  </div>



    </section>
  )
}

export default IndexCarousel